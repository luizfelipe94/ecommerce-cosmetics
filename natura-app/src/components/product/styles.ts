"use client";

import styled from "styled-components";

export const StyledProduct = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  text-align: start;
  gap: 24px;
`;

export const ImageWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: fit-content;

  > img {
   border-radius: 8px;
  }
`;

export const ProductRating = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  gap: 10px;
`;

export const ProcutTitle = styled.h3``;

export const RatingLabel = styled.p`
  color: gray;
  font-size: 14px;
  font-weight: bold;
`;

export const PriceContent = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

export const PriceLabel = styled.p`
  font-size: 20px;
  font-weight: bold;
`;

export const DiscountContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;
`;

export const DiscountLabel = styled.p`
  color: gray;
  font-size: 16px;
  font-weight: bold;
  text-decoration: line-through;
`;

export const Body = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    height: 100%;
    width: 100%;
    justify-content: space-around;
`;