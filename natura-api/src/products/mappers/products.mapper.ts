import { Product as PrismaProduct } from "@prisma/client";
import ProductDTO from "../dtos/product.dto";

export default class ProductsMapper {

  static toDto(product: PrismaProduct): ProductDTO {
    return {
      id: product.id,
      name: product.name,
      price: product.price.toNumber(),
      image: product.image,
      slug: product.slug,
      rating: product.rating,
      createdAt: product.createdAt,
      updatedAt: product.updatedAt,
      discountPercentege: product.discountPercentege,
    };
  }

  static toDtoList(products: PrismaProduct[]): ProductDTO[] {
    return products.map(this.toDto);
  }

  // toEntity

}