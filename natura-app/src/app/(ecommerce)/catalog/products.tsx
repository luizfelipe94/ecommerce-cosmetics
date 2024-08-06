"use client";

import { useState } from "react";
import { StyledProductsList } from "./styles";
import CatalogItem from "./catalog-item";
import { useProducts } from "@/hooks/useProducts";
import Button from "@/components/button";

export default function Products() {
  const [take, setTake] = useState(4);
  const { data: products } = useProducts(1, take);

  const handleNextPage = () => {
    setTake(take+4);
  };

  return (
    <StyledProductsList>
      {products && products.data.map((item) => (
        <CatalogItem key={item.id} item={item}/>
      ))}
      <div>
        <Button
          bgColor="white"
          textColor="black"
          borderColor="black"
          onClick={() => handleNextPage()}
        >
            Carregar outros
        </Button>
      </div>
    </StyledProductsList>
  );

}