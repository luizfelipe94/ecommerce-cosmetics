import Product from "@/components/product";
import { listProducts, ReadProductDTO } from "@/service/products-service";
import { useEffect, useState } from "react";
import { StyledProductsList } from "./styles";

export default function Products() {

  const [products, setProducts] = useState<ReadProductDTO[]>([]);

  useEffect(() => {
    listProducts()
      .then((products) => setProducts(products));
  }, []);

  return (
    <StyledProductsList>
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </StyledProductsList>
  );
}