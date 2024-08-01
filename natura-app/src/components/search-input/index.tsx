"use client";

import React from "react";
import styled from "styled-components";

interface SearchInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
}

const StyledInput = styled.input`
  width: 100%;
  padding: 10px 20px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 25px;
  background-color: #f9f9f9;
  color: #333;
  outline: none;
  &:focus {
    border-color: #0070f3;
    box-shadow: 0 0 0 3px rgba(0, 112, 243, 0.2);
  }
  
  &::placeholder {
    color: #aaa;
  }
`;

const SearchInput: React.FC<SearchInputProps> = (props) => {
  return <StyledInput type="search" {...props} />;
};

export default SearchInput;