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
  margin-bottom: 30px;  
`;

export const StyledProductsList = styled.div`
  padding: 50px;
  display: grid;  
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 16px;
`;

export const Footer = styled.div`
  display: flex;
  padding: 24px;
  justify-content: center;
`;