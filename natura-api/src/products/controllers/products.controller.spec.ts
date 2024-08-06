import { Test, TestingModule } from "@nestjs/testing";
import ProductsService from "../services/products.service";
import PageOptionsDTO from "@/shared/dto/pagination/page-options.dto";
import { PageDTO } from "@/shared/dto/pagination";
import ProductDTO from "../dtos/product.dto";
import ProductsController from "./products.controller";

const mockProductsService = () => ({
  listProducts: jest.fn(),
});

describe("ProductsController", () => {
  let controller: ProductsController;
  let service: ProductsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductsController],
      providers: [
        {
          provide: ProductsService,
          useFactory: mockProductsService,
        },
      ],
    }).compile();

    controller = module.get<ProductsController>(ProductsController);
    service = module.get<ProductsService>(ProductsService);
  });

  describe("listProducts", () => {
    it("should return a page of products", async () => {
      const pageOptions = new PageOptionsDTO();
      const mockProductDTOs: ProductDTO[] = [
        {
          id: "123",
          name: "product1",
          image: "image1.jpg",
          price: 100.90,
          rating: 4.5,
          slug: "product1",
          createdAt: new Date("2024-08-06"),
          updatedAt: new Date("2024-08-06"),
          discountPercentege: 0,
        }
      ];
      const mockPage = new PageDTO<ProductDTO>(mockProductDTOs, {
        itemCount: 2,
        hasNextPage: false,
        hasPreviousPage: false,
        page: 1,
        pageCount: 1,
        take: 4,
      });

      jest.spyOn(service, "listProducts").mockResolvedValue(mockPage);

      const result = await controller.listProducts(pageOptions);

      expect(result).toEqual(mockPage);
      expect(service.listProducts).toHaveBeenCalledWith(pageOptions);
    });
  });
});