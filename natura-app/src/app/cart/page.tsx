import Breadcrumb from "@/components/breadcrumb";
import React from "react";

export default function Page() {
  return (
    <div>
      <Breadcrumb items={[{ label: "Início" }, { label: "Carrinho" }]}/>
    </div>
  );
}
