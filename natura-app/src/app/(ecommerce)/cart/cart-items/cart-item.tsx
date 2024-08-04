"use client";

import { ReadProductDTO } from "@/service/products-service";
import styled from "styled-components";
import Image from "next/image";

export type CartItemProps = {
  item: ReadProductDTO;
}

export const ItemContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ImageWrapper = styled(Image)`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 12px;
`;

export default function CartItem({ item }: CartItemProps) {
  return (
    <ItemContainer>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div>
          <ImageWrapper 
            width={70}
            height={70}
            src={item.image}
            alt="product"
          />
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div>title</div>
          <div>price</div>
        </div>
      </div>
      <div>
        <div>lixeira</div>
        <div>quantidade</div>
      </div>
    </ItemContainer>
  );
}