import Template from "../template";

export default function Page() {
  return (
    <Template
      breadcrumb={[{ label: "Início" }, { label: "Catalog" }]}
    >
      catalog
    </Template>
  );
}