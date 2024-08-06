"use client";

import React from "react";
import { StyledButton } from "./styles";

interface ButtonProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  bgColor?: string;
  textColor?: string;
  borderColor?: string;
  borderRadius?: string;
  hoverBgColor?: string;
  hovertextcolor?: string;
  children: React.ReactNode;
}

export default function Button({
  children,
  bgColor,
  textColor,
  borderColor,
  borderRadius,
  hoverBgColor,
  hovertextcolor,
  ...rest
}: ButtonProps) {
  return (
    <StyledButton
      $bgColor={bgColor}
      $textColor={textColor}
      $borderColor={borderColor}
      $borderRadius={borderRadius}
      $hoverBgColor={hoverBgColor}
      $hoverTextColor={hovertextcolor}
      {...rest}
    >
      {children}
    </StyledButton>
  );
}