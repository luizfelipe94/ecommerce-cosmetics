"use client";

import { ReadProductDTO } from "@/service/products-service";
import { ListContainer } from "./styles";
import CartItem from "./cart-item";

export type CartItemProps = {
  items: ReadProductDTO[];
};

export default function CartItems({ items }: CartItemProps) {
  return (
    <ListContainer>
      {items.map((item) => (
        <CartItem key={item.id} item={item}/>
      ))}
    </ListContainer>
  );
}