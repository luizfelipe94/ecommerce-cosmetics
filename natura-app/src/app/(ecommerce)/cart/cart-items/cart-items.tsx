"use client";

import { ListContainer } from "./styles";
import CartItem from "./cart-item";
import { Fragment } from "react";
import { DividerContainer } from "@/components/divider/styles";
import { CartItem as CartItemStore } from "@/context/cartStore";

export type CartItemProps = {
  items: CartItemStore[];
};

export default function CartItems({ items }: CartItemProps) {
  return (
    <ListContainer>
      {items.map((item) => (
        <Fragment key={item.product.id}>
          <CartItem key={item.product.id} item={item} />
          <DividerContainer />
        </Fragment>
      ))}
    </ListContainer>
  );
}