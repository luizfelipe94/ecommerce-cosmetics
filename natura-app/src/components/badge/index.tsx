import React from "react";
import styled from "styled-components";

const StyledBadge = styled.div<{ color?: string; fontSize?: string }>`
  display: inline-block;
  padding: 5px 10px;
  border-radius: 12px;
  background-color: ${(props) => props.color || "#f00"};
  color: #fff; 
  font-size: ${(props) => props.fontSize || "14px"};
  font-weight: bold;
  text-align: center;
  vertical-align: middle;
`;

export type BadgeProps = {
  children: React.ReactNode;
  color?: string;
};

export default function Badge({ children, color }: BadgeProps) {
  return (
    <StyledBadge
      color={color}
    >
      {children}
    </StyledBadge>
  );
}
