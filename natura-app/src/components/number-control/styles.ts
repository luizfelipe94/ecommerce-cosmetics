import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  overflow: hidden;
`;

const Button = styled.button`
  background-color: #e0e0e0;
  border: none;
  padding: 0px 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s;
  &:hover {
    background-color: #d0d0d0;
  }  
`;

export const LeftButton = styled(Button)`
  border-top-left-radius: 12px;
  border-bottom-left-radius: 12px;
`;

export const RightButton = styled(Button)`
  border-top-right-radius: 12px;
  border-bottom-right-radius: 12px;
`;

export const NumberDisplay = styled.div`
  padding: 0px 20px;
  background-color: #e0e0e0;
`;
