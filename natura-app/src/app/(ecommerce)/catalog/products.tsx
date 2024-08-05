"use client";

import { useState } from "react";
import { StyledProductsList } from "./styles";
import CatalogItem from "./catalog-item";
import { useProducts } from "@/hooks/useProducts";

export default function Products() {
  const [page, setPage] = useState(1);
  const { data: products } = useProducts(page);

  return (
    <StyledProductsList>
      {products && products.data.map((item) => (
        <CatalogItem key={item.id} item={item} />
      ))}
    </StyledProductsList>
  );

}