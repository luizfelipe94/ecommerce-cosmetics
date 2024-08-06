"use client";

import Product from "@/components/product";
import { StyledProductsList } from "./styles";
import { ReadProductDTO } from "@/service/types";

export type ProductsProps = {
  products: ReadProductDTO[];
};

export default function Products({ products }: ProductsProps) {

  return (
    <StyledProductsList>
      {products?.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </StyledProductsList>
  );
}