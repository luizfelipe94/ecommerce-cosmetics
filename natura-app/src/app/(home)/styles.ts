"use client";

import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const ContentTitle = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 30px;
`;

export const StyledProductsList = styled.div`
  padding: 50px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 50px;
`;

export const Footer = styled.div``;