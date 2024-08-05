import PageOptionsDTO from "@/shared/dto/pagination/page-options.dto";
import { Product } from "@prisma/client";

export interface ProductsRepository {
  findAll(pageOptions: PageOptionsDTO): Promise<Product[]>;
  count(): Promise<number>;
}

export const PRODUCTS_REPOSITORY = Symbol("PRODUCTS_REPOSITORY");