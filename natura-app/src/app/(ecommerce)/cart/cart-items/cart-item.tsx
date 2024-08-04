"use client";

import { ReadProductDTO } from "@/service/products-service";

import { RiDeleteBin6Line } from "react-icons/ri";
import NumberControl from "@/components/number-control";
import { useState } from "react";
import { ItemContainer } from "../styles";
import { ImageWrapper } from "./styles";

export type CartItemProps = {
  item: ReadProductDTO;
}

export default function CartItem({ item }: CartItemProps) {

  const [quantity, setQuantity] = useState(1);

  const handleQuantity = (value: number) => {
    if (value < 1) return;
    setQuantity(value);
  };

  return (
    <ItemContainer>
      <div style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
        <ImageWrapper
          width={70}
          height={70}
          src={item.image}
          alt="product"
        />
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-around" }}>
          <div><h3>{item.title}</h3></div>
          <div><h3>R$ {item.price}</h3></div>
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
        <div style={{ cursor: "pointer", display: "flex", justifyContent: "flex-end" }}>
          <RiDeleteBin6Line color="red" size={20} />
        </div>
        <div>
          <NumberControl value={quantity} setValue={handleQuantity} />
        </div>
      </div>
    </ItemContainer>
  );
}