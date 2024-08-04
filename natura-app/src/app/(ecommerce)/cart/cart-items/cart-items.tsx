"use client";

import { ReadProductDTO } from "@/service/products-service";
import { ListContainer } from "./styles";
import CartItem from "./cart-item";
import { Fragment } from "react";
import { DividerContainer } from "@/components/divider/styles";

export type CartItemProps = {
  items: ReadProductDTO[];
};

export default function CartItems({ items }: CartItemProps) {
  return (
    <ListContainer>
      {items.map((item) => (
        <Fragment key={item.id}>
          <CartItem key={item.id} item={item} />
          <DividerContainer />
        </Fragment>
      ))}
    </ListContainer>
  );
}