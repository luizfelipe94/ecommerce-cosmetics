"use client";

import { ListContainer } from "./styles";
import CartItem from "./cart-item";
import { Fragment } from "react";
import { DividerContainer } from "@/components/divider/styles";
import { ReadProductDTO } from "@/service/types";

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