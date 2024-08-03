"use client";

import { CircleUser, ShoppingCart } from "lucide-react";
import SearchInput from "../search-input";
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
        <Link href="/">
          <Banner>
          Cosméticos&Co
          </Banner>
        </Link>
        <Menu>
          <Dropdown placeholder="Products" options={options }/>
        </Menu>
        <Search>
          <SearchInput placeholder="O que está buscando hoje?"/>
        </Search>
        <Settings>
          <SettingMenu href="/cart">
            <ShoppingCart size={25} strokeWidth={2} />
          </SettingMenu>
          <SettingMenu href="#">
            <CircleUser size={25} strokeWidth={2}/>
          </SettingMenu>
        </Settings>
      </Content>
    </section>
  );
}