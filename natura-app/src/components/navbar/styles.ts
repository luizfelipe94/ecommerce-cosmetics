"use client";

import Link from "next/link";
import styled from "styled-components";

export const Content = styled.div`
  /* background-color: gray; */
  display: flex;
  flex-direction: row;
  padding: 0 48px;
  gap: 24px;
  height: 74px;
  align-items: center;
  // justify-content: space-around;
  width: 100%;
`;

export const Banner = styled.div`
  > a {
  font-size: 1.5rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  }

  display: inline-flex;
  flex: 1;
  gap: 12px;
`;

export const Search = styled.div`
  flex: 3;
`;

export const SettingMenu = styled(Link)`
  flex:1;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  padding: 5px;
  border-radius: 10%;
  color: #333;
  cursor: pointer;
  &:hover {
    background-color: #f0f0f0;
  }  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(0, 112, 243, 0.2);
  }
`;

export const Settings = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
  justify-content: center;
`;