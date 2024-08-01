"use client";

import { CircleUser, ShoppingCart } from "lucide-react";
import SearchInput from "../search-input";
import Select from "../select";
import { Banner, Settings, Content, Menu, Search, SettingMenu } from "./styles";

export default function Navbar() {
  return (
    <section>
      <Content>
        <Banner>
          Cosméticos&Co
        </Banner>
        <Menu>
          <Select options={[{ label: "Products", value: "products" }]}/>
        </Menu>
        <Search>
          <SearchInput placeholder="O que está buscando hoje?"/>
        </Search>
        <Settings>
          <SettingMenu>
            <ShoppingCart size={25} strokeWidth={2} />
          </SettingMenu>
          <SettingMenu>
            <CircleUser size={25} strokeWidth={2}/>
          </SettingMenu>
        </Settings>
      </Content>
    </section>
  );
}