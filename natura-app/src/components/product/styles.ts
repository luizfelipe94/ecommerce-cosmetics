"use client";

import Image from "next/image";
import styled from "styled-components";

export const StyledProduct = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

export const ImageWrapper = styled(Image)`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 12px;
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