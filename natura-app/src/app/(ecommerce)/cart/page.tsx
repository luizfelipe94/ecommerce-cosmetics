"use client";

import React from "react";
import Template from "../template";
import { Container } from "./styles";
import CartItems from "./cart-items/cart-items";
import CartSummary from "./cart-summary/cart-summary";
import { useCartStore } from "@/context/cartStore";

export default function Page() {

  const { items } = useCartStore();

  return (
    <Template
      breadcrumb={[{ label: "Início" }, { label: "Carrinho" }]}
    >
      <Container>
        <CartItems items={items} />
        <CartSummary />
      </Container>
    </Template>
  );
}
