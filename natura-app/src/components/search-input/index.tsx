import React from "react";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";

interface SearchInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
}

const Container = styled.div`
  position: relative;
  width: 100%;
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 10px 20px;
  padding-left: 40px; /* Espaço para o ícone */
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

const IconWrapper = styled.div`
  position: absolute;
  left: 10px; /* Ajuste a posição conforme necessário */
  top: 55%;
  transform: translateY(-50%);
  color: #aaa;
`;

const SearchInput: React.FC<SearchInputProps> = (props) => {
  return (
    <Container>
      <StyledInput type="search" {...props} />
      <IconWrapper>
        <FaSearch size={20} />
      </IconWrapper>
    </Container>
  );
};

export default SearchInput;