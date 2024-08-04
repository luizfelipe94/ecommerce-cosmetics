import styled from "styled-components";
import Image from "next/image";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 15px;
`;

export const ItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

export const ImageWrapper = styled(Image)`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 12px;
`;