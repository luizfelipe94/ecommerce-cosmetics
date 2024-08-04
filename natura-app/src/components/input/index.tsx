import React from "react";
import { Container, IconWrapper, StyledInput } from "./styles";

export type SearchInputProps = {
  placeholder?: string;
  type?: string;
  icon?: React.ReactNode;
}

export default function Input({
  placeholder,
  type,
  icon,
}: SearchInputProps) {
  return (
    <Container>
      <StyledInput type={type ?? "text"} placeholder={placeholder} />
      <IconWrapper>
        {icon}
      </IconWrapper>
    </Container>
  );
}