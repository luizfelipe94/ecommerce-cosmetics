"use client";

import { RiDeleteBin6Line } from "react-icons/ri";
import NumberControl from "@/components/number-control";
import { useState } from "react";
import { ItemContainer } from "../styles";
import { ImageWrapper } from "./styles";
import { CartItem as CartItemStore, useCartStore } from "@/context/cartStore";

export type CartItemProps = {
  item: CartItemStore;
}

export default function CartItem({ item }: CartItemProps) {

  const [quantity, setQuantity] = useState(item.quantity);
  const { decreaseQuantity, increaseQuantity, removeItemFromCart } = useCartStore();

  const handleQuantity = (value: number) => {
    if (value < 1) return;
    setQuantity(value);
    if (value > quantity) {
      increaseQuantity(item.product.id);
    } else {
      decreaseQuantity(item.product.id);
    }
  };

  return (
    <ItemContainer>
      <div style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
        <ImageWrapper
          width={70}
          height={70}
          src={`/assets/${item.product.image}`}
          alt="product"
        />
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-around" }}>
          <div><h3>{item.product.name}</h3></div>
          <div><h3>R$ {item.product.price}</h3></div>
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
        <div
          style={{ cursor: "pointer", display: "flex", justifyContent: "flex-end" }}
          onClick={() => removeItemFromCart(item.product.id)}
        >
          <RiDeleteBin6Line color="red" size={20} />
        </div>
        <div>
          <NumberControl value={quantity} setValue={handleQuantity} />
        </div>
      </div>
    </ItemContainer>
  );
}