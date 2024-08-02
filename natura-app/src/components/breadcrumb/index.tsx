"use client";

import React from "react";
import { BreadcrumbContainer, BreadcrumbLink, BreadcrumbSeparator } from "./styles";

export type BreadcrumbProps = {
  items: { label: string; href?: string }[];
};

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <BreadcrumbContainer>
      {items.map((item, index) => (
        <React.Fragment key={index}>
          {item.href ? (
            <BreadcrumbLink href={item.href}>{item.label}</BreadcrumbLink>
          ) : (
            <span>{item.label}</span>
          )}
          {index < items.length - 1 && <BreadcrumbSeparator>&gt;</BreadcrumbSeparator>}
        </React.Fragment>
      ))}
    </BreadcrumbContainer>
  );
}
