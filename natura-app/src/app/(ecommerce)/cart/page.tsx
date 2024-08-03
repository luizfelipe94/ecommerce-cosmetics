import React from "react";
import Template from "../template";

export default function Page() {
  return (
    <Template
      breadcrumb={[{ label: "Início" }, { label: "Carrinho" }]}
    >
      cart
    </Template>
  );
}
