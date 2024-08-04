import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  background-color: #f0f0f0; /* Fundo cinza */
  border-radius: 8px; /* Bordas arredondadas */
  overflow: hidden;
`;

export const Button = styled.button`
  background-color: #e0e0e0; /* Fundo cinza mais escuro */
  border: none;
  border-radius: 8px;
  padding: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s;
  &:hover {
    background-color: #d0d0d0; /* Cor ao passar o mouse */
  }
`;

export const NumberDisplay = styled.div`
  padding: 10px 20px;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 8px;
`;
