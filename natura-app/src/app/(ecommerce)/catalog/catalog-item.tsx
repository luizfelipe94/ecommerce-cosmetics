"use client";

import { ReadProductDTO } from "@/service/types";
import { ImageWrapper, ItemContainer, ItemContent } from "./styles";
import Button from "@/components/button";
import { useCartStore } from "@/context/cartStore";
import { calculatePrice } from "@/utils/product-utils";

export type CatalogItemProps = {
  item: ReadProductDTO;
}

export default function CatalogItem({ item }: CatalogItemProps) {

  const { addItem } = useCartStore();

  const handleAddItem = (item: ReadProductDTO) => {
    addItem({ product: item,quantity: 1 });
    alert("Item adicionado ao carrinho"); // TODO: Toasts
  };

  return (
    <ItemContainer>
      <div style={{ display: "flex", flexDirection: "row", gap: "50px", width: "100%" }}>
        <ImageWrapper
          width={150}
          height={150}
          src={`/assets/${item.image}`}
          alt="product"
        />
        <ItemContent>
          <div><h3>{item.name}</h3></div>
          <div><h4>R$ {calculatePrice(item.price, item.discountPercentege).toFixed(2)}</h4></div>
          <Button 
            bgColor="orange" 
            textColor="white"
            onClick={() => handleAddItem(item)}
          >
            Adicionar
          </Button>
        </ItemContent>
      </div>
    </ItemContainer>
  );
}