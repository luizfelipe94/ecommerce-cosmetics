"use client";

import React, { useState } from "react";
import Link from "next/link";
import { DropdownButton, DropdownContainer, DropdownContent, DropdownIcon, DropdownItem } from "./styles";

export type SelectOption = {
  value: string;
  label: string;
  href?: string;
}

export type DropdownProps = {
  options: SelectOption[];
  placeholder?: string;
}

export default function Dropdown ({ options, placeholder }: DropdownProps) {
  
  const [open, setOpen] = useState(false);
  const toggleDropdown = () => setOpen(!open);

  return (
    <DropdownContainer>
      <DropdownButton onClick={toggleDropdown}>
        {placeholder}
        <DropdownIcon open={open} />
      </DropdownButton>
      <DropdownContent open={open}>
        {options.map((option, index) => (
          option.href ? (
            <Link key={index} href={option.href} passHref>
              <DropdownItem onClick={() => setOpen(false)}>
                {option.label}
              </DropdownItem>
            </Link>
          ) : (
            <DropdownItem
              key={index}
              onClick={() => {
                // Handle selection without navigation
                setOpen(false);
              }}
            >
              {option.label}
            </DropdownItem>
          )
        ))}
      </DropdownContent>
    </DropdownContainer>
  );
}
