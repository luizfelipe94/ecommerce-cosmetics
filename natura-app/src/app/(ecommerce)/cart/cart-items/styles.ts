import styled from "styled-components";
import Image from "next/image";

export const ListContainer = styled.div`
  width: 65%;
  border-radius: 12px;
  border: 1px solid #ced4da;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const ItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const ImageWrapper = styled(Image)`
  display: block;
  width: 130px;
  height: 130px;
  object-fit: cover;
  border-radius: 12px;
`;