import styled from "styled-components";

export const StyledButton = styled.button<{
  $bgColor;
  $textColor;
  $borderColor;
  $borderRadius;
  $hoverBgColor;
  $hoverTextColor;
}>`
  background-color: ${({ $bgColor }) => $bgColor || "#ffffff"};
  color: ${({ $textColor }) => $textColor || "#000000"};
  border: 2px solid ${({ $borderColor }) => $borderColor || "#fff"};
  border-radius: ${({ $borderRadius }) => $borderRadius || "25px"};
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
  
  &:hover {
    background-color: ${({ $hoverBgColor }) => $hoverBgColor || "#f0f0f0"};
    color: ${({ $hoverTextColor }) => $hoverTextColor || "#333333"};
  }

  &:focus {
    outline: none;
  }
`;