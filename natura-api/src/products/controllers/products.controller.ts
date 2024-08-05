import { Controller, Get, Query } from "@nestjs/common";
import ProductsService from "../services/products.service";
import PageOptionsDTO from "@/shared/dto/pagination/page-options.dto";
import { PageDTO } from "@/shared/dto/pagination";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import ProductDTO from "../dtos/product.dto";

@ApiTags("products")
@Controller("/products")
export default class ProductsController {

  constructor(
    private readonly productsService: ProductsService,
  ) {}

  @Get("/")
  @ApiOperation({ summary: "Retrieve all products" })
  @ApiResponse({ status: 200, description: "Products list", type: [ProductDTO] })
  async listProducts(@Query() pageOptions: PageOptionsDTO): Promise<PageDTO<ProductDTO>> {
    return await this.productsService.listProducts(pageOptions);
  }

}