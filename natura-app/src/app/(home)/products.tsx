"use client";

import Product from "@/components/product";
import { useState } from "react";
import { StyledProductsList } from "./styles";
import { useProducts } from "@/hooks/useProducts";

export default function Products() {

  const [page, setPage] = useState(1);
  const { data: products } = useProducts(page);

  return (
    <StyledProductsList>
      {products?.data.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </StyledProductsList>
  );
}