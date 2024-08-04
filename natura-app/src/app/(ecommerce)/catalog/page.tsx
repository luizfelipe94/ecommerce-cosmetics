import Template from "../template";
import Products from "./products";

export default function Page() {
  return (
    <Template
      breadcrumb={[{ label: "Início" }, { label: "Catalog" }]}
    >
      <Products />
    </Template>
  );
}