"use client";

import React from "react";
import styled from "styled-components";

interface ButtonProps extends React.SelectHTMLAttributes<HTMLSelectElement>{
  bgColor?: string;
  textColor?: string;
  borderColor?: string;
  borderRadius?: string;
  hoverBgColor?: string;
  hoverTextColor?: string;
  children: React.ReactNode;
}

const StyledButton = styled.button<ButtonProps>`
  background-color: ${({ bgColor }) => bgColor || "#ffffff"};
  color: ${({ textColor }) => textColor || "#000000"};
  border: 2px solid ${({ borderColor }) => borderColor || "#fff"};
  border-radius: ${({ borderRadius }) => borderRadius || "25px"};
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
  
  &:hover {
    background-color: ${({ hoverBgColor }) => hoverBgColor || "#f0f0f0"};
    color: ${({ hoverTextColor }) => hoverTextColor || "#333333"};
  }

  &:focus {
    outline: none;
  }
`;

const Button: React.FC<ButtonProps> = ({
  children,
  bgColor,
  textColor,
  borderColor,
  borderRadius,
  hoverBgColor,
  hoverTextColor
}) => {
  return (
    <StyledButton
      bgColor={bgColor}
      textColor={textColor}
      borderColor={borderColor}
      borderRadius={borderRadius}
      hoverBgColor={hoverBgColor}
      hoverTextColor={hoverTextColor}
    >
      {children}
    </StyledButton>
  );
};

export default Button;