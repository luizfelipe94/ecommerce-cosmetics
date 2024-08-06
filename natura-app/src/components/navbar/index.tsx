"use client";

import { CircleUser, ShoppingCart } from "lucide-react";
import Input from "../input";
import { FaSearch } from "react-icons/fa";
import { Banner, Settings, Content, Search, SettingMenu } from "./styles";
import Link from "next/link";
import Dropdown, { SelectOption } from "../dropdown";
import Badge from "../badge";
import { useCartStore } from "@/context/cartStore";

const options: SelectOption[] = [
  {
    value: "cosmetics",
    label: "Cosméticos",
    href: "/catalog?type=cosmetics",
  },
  {
    value: "perfumes",
    label: "Perfumaria",
    href: "/catalog?type=perfumes",
  }
];

export default function Navbar() {

  const { getTotalItems } = useCartStore();

  return (
    <Content>
      <Banner>
        <Link href="/">
            Cosméticos&Co
        </Link>
        <Dropdown placeholder="Produtos" options={options} />
      </Banner>
      <Search>
        <Input placeholder="O que está buscando hoje?" icon={<FaSearch size={20} />} />
      </Search>
      <Settings>
        <SettingMenu href="/cart">
          <ShoppingCart size={24}  />
          <Badge>{getTotalItems()}</Badge>
        </SettingMenu>
        <SettingMenu href="#">
          <CircleUser size={24} />
        </SettingMenu>
      </Settings>
    </Content>
  );
}