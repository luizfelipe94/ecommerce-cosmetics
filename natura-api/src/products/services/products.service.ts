import { Inject, Injectable } from "@nestjs/common";
import { PRODUCTS_REPOSITORY, ProductsRepository } from "../repositories/products.repository";
import { PageDTO } from "@/shared/dto/pagination";
import PageOptionsDTO from "@/shared/dto/pagination/page-options.dto";
import { PageMetaDTO } from "@/shared/dto/pagination/page-meta.dto";
import ProductDTO from "../dtos/product.dto";
import ProductsMapper from "../mappers/products.mapper";

@Injectable()
export default class ProductsService {

  constructor(
    @Inject(PRODUCTS_REPOSITORY) private readonly productsRepository: ProductsRepository,
  ) {}

  async listProducts(pageOptions: PageOptionsDTO): Promise<PageDTO<ProductDTO>> {
    const count = await this.productsRepository.count();
    const products = await this.productsRepository.findAll(pageOptions);
    const pageMeta = new PageMetaDTO({ itemCount: count, pageOptionsDto: pageOptions });
    return new PageDTO(ProductsMapper.toDtoList(products), pageMeta);
  }

}