import { Product } from "@prisma/client";
import { Decimal } from "@prisma/client/runtime/library";
import ProductsMapper from "./products.mapper";

describe("Products Mapper", () => {
  it("Should convert prisma to dto", () => {
    const product: Product = {
      id: "123",
      name: "product1",
      slug: "product1",
      image: "image1",
      rating: 5,
      price: new Decimal(20.50),
      createdAt: new Date("2024-08-05"),
      updatedAt: new Date("2024-08-05"),
      deletedAt: null,
      category: "PERFUME",
      discountPercentege: 0,
      stock: 50,
    };
    const dto = ProductsMapper.toDto(product);
    expect(dto).toEqual({
      id: "123",
      name: "product1",
      slug: "product1",
      image: "image1",
      rating: 5,
      price: 20.50,
      createdAt: new Date("2024-08-05"),
      updatedAt: new Date("2024-08-05"),
      discountPercentege: 0,
    });
  });
});