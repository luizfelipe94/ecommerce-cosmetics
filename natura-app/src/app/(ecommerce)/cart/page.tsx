"use client";

import React, { useEffect, useState } from "react";
import Template from "../template";
import { Container } from "./styles";
import CartItems from "./cart-items/cart-items";
import CartSummary from "./cart-summary/cart-summary";
import { ReadProductDTO, listProducts } from "@/service/products-service";

export default function Page() {

  const [products, setProducts] = useState<ReadProductDTO[]>([]);

  useEffect(() => {
    listProducts()
      .then((products) => setProducts(products));
  }, []);

  return (
    <Template
      breadcrumb={[{ label: "Início" }, { label: "Carrinho" }]}
    >
      <Container>
        <CartItems items={products}/>
        <CartSummary />
      </Container>
    </Template>
  );
}
