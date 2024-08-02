"use client";

import Link from "next/link";
import styled from "styled-components";

export const Content = styled.div`
  /* background-color: gray; */
  display: flex;
  flex-direction: row;
  gap: 20px;
  height: 70px;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const Banner = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  width: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Menu = styled.div`
  width: 10%;
`;

export const Search = styled.div`
  width: 40%;
`;

export const SettingMenu = styled(Link)`
  width: 40%;
  display: flex;  
  justify-content: center;
  align-items: center;
  padding: 10px;
  border-radius: 50%;
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