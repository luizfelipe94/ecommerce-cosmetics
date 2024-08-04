"use client";

import { CircleUser, ShoppingCart } from "lucide-react";
import Input from "../input";
import { FaSearch } from "react-icons/fa";
import { Banner, Settings, Content, Menu, Search, SettingMenu } from "./styles";
import Link from "next/link";
import Dropdown, { SelectOption } from "../dropdown";

const options: SelectOption[] = [
  {
    value: "products",
    label: "Produtos",
    href: "/catalog?type=products",
  },
  {
    value: "perfumes",
    label: "Perfumaria",
    href: "/catalog?type=perfumes",
  }
];

export default function Navbar() {
  return (
    <section>
      <Content>
        <Banner>
          <Link href="/">
            Cosméticos&Co
          </Link>
        </Banner>
        <Menu>
          <Dropdown placeholder="Products" options={options} />
        </Menu>
        <Search>
          <Input placeholder="O que está buscando hoje?" icon={<FaSearch size={20} />} />
        </Search>
        <Settings>
          <SettingMenu href="/cart">
            <ShoppingCart size={25} strokeWidth={2} />
          </SettingMenu>
          <SettingMenu href="#">
            <CircleUser size={25} strokeWidth={2} />
          </SettingMenu>
        </Settings>
      </Content>
    </section>
  );
}