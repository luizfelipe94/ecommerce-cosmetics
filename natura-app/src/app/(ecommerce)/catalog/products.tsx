"use client";

import { ReadProductDTO, listProducts } from "@/service/products-service";
import { useState, useEffect } from "react";
import { StyledProductsList } from "./styles";
import CatalogItem from "./catalog-item";

export default function Products() {
  const [products, setProducts] = useState<ReadProductDTO[]>([]);

  useEffect(() => {
    listProducts()
      .then((products) => setProducts(products));
  }, []);

  return (
    <StyledProductsList>
      {products.map((item) => (
        <CatalogItem key={item.id} item={item} />
      ))}
    </StyledProductsList>
  );

}