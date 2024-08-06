import { TestingModule, Test } from "@nestjs/testing";
import { Product } from "@prisma/client";
import ProductsService from "./products.service";
import { PRODUCTS_REPOSITORY, ProductsRepository } from "../repositories/products.repository";
import PageOptionsDTO from "@/shared/dto/pagination/page-options.dto";
import { PageMetaDTO } from "@/shared/dto/pagination/page-meta.dto";
import { PageDTO } from "@/shared/dto/pagination";
import ProductsMapper from "../mappers/products.mapper";
import { Decimal } from "@prisma/client/runtime/library";

const mockProductsRepository = () => ({
  count: jest.fn(),
  findAll: jest.fn(),
});

describe("Products Service", () => {
  let productsService: ProductsService;
  let productsRepository: ProductsRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ProductsService,
        {
          provide: PRODUCTS_REPOSITORY,
          useFactory: mockProductsRepository,
        }
      ]
    }).compile();
    productsService = module.get<ProductsService>(ProductsService);
    productsRepository = module.get<ProductsRepository>(PRODUCTS_REPOSITORY);
  });

  describe("listProducts", () => {
    it("should return a page of products", async () => {
      const pageOptions = new PageOptionsDTO();
      const mockProducts: Product[] = [{
        id: "5c214d72-0781-4cb7-883c-a7d0533b519a",
        name: "Luna Colônia 75ml",
        image: "luna-colonia.jpg",
        slug: "luna-colonia",
        rating: 4.9,
        price: new Decimal(169.90),
        stock: 10,
        category: "PERFUME",
        createdAt: new Date("2024-08-06"),
        updatedAt: new Date("2024-08-06"),
        deletedAt: null,
        discountPercentege: 0,
      }];
      const mockCount = 1;

      jest.spyOn(productsRepository, "count").mockResolvedValue(mockCount);
      jest.spyOn(productsRepository, "findAll").mockResolvedValue(mockProducts);
      
      const pageMeta = new PageMetaDTO({ itemCount: mockCount, pageOptionsDto: pageOptions });
      const dtoList = ProductsMapper.toDtoList(mockProducts);
      const expectedPage = new PageDTO(dtoList, pageMeta);

      const result = await productsService.listProducts(pageOptions);

      expect(result).toEqual(expectedPage);
      expect(productsRepository.count).toHaveBeenCalled();
      expect(productsRepository.findAll).toHaveBeenCalledWith(pageOptions);
    });
  });
  
});