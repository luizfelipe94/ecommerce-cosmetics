"use client";

import React, { useState } from "react";
import Template from "../template";
import { Container } from "./styles";
import CartItems from "./cart-items/cart-items";
import CartSummary from "./cart-summary/cart-summary";
import { useProducts } from "@/hooks/useProducts";

export default function Page() {

  const [page, setPage] = useState(1);
  const { data: products } = useProducts(page);

  return (
    <Template
      breadcrumb={[{ label: "Início" }, { label: "Carrinho" }]}
    >
      <Container>
        <CartItems items={products?.data || []} />
        <CartSummary />
      </Container>
    </Template>
  );
}
