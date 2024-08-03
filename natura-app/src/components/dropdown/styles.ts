import { IoMdArrowDropdown } from "react-icons/io";
import styled from "styled-components";

export const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
`;

export const DropdownButton = styled.button`
  background-color: #f8f9fa;
  border: 1px solid #ced4da;
  padding: 10px;
  cursor: pointer;
  border-radius: 4px;
  text-align: left;
  width: 200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  &:hover {
    background-color: #e9ecef;
  }
`;

export const DropdownContent = styled.div<{ open: boolean }>`
  display: ${({ open }) => (open ? "block" : "none")};
  position: absolute;
  background-color: white;
  border: 1px solid #ced4da;
  border-radius: 4px;
  width: 100%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 1;
`;

export const DropdownItem = styled.div`
  padding: 10px;
  cursor: pointer;
  &:hover {
    background-color: #e9ecef;
  }
`;

export const DropdownIcon = styled(IoMdArrowDropdown)<{ open: boolean }>`
  margin-left: 8px;
  transition: transform 0.3s ease;
  transform: ${({ open }) => open ? "rotate(180deg)" : "rotate(0deg)"};
`;