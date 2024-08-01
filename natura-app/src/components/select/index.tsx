"use client";

import React from "react";
import styled from "styled-components";

interface Option {
  value: string;
  label: string;
}

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options: Option[];
}

const StyledSelect = styled.select`
  /* width: 100%; */
  padding: 10px;
  font-size: 16px;
  border: none;
  outline: none;
  background-color: #fff;
  color: #333;
  cursor: pointer;
  
  &:focus {
    border-color: #0070f3;
    outline: none;
    box-shadow: 0 0 0 3px rgba(0, 112, 243, 0.2);
  }
`;

const Select: React.FC<SelectProps> = ({ options, ...props }) => {
  return (
    <StyledSelect {...props}>
      {options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </StyledSelect>
  );
};

export default Select;