"use client";

import { CircleUser, ShoppingCart } from "lucide-react";
import SearchInput from "../search-input";
import Select from "../select";
import { Banner, Settings, Content, Menu, Search, SettingMenu } from "./styles";
import Link from "next/link";

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
          <Select options={[{ label: "Products", value: "products" }]}/>
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