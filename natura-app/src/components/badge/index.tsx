"use client";

import React from "react";
import { StyledBadge } from "./styles";

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
