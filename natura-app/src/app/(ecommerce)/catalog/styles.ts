import { styled } from "styled-components";
import Image from "next/image";

export const StyledProductsList = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 50px;
  width: 50%;
`;

export const ItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const ItemContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 30%;
`;

export const ImageWrapper = styled(Image)`
  display: block;
  object-fit: cover;
  border-radius: 12px;
  width: 150px;
  height: 150px;
`;

export const Footer = styled.div`
  display: flex;
  padding: 24px;
  justify-content: center;
`;