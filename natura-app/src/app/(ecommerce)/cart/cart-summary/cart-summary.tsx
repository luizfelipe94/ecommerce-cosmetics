"use client";

import Divider from "@/components/divider";
import { CouponSection, SummaryContainer, SummarySection } from "./styles";
import Input from "@/components/input";
import Button from "@/components/button";
import { CiShoppingTag } from "react-icons/ci";
import { useCartStore } from "@/context/cartStore";

export default function CartSummary() {

  const { getTotal, clearCart } = useCartStore();

  const handleBuy = () => {
    alert("Compra realizada com sucesso");
    clearCart();
  };

  return (
    <SummaryContainer>
      <div>
        <h3>Sumário</h3>
      </div>
      <div style={{ width: "100%", display: "flex", flexDirection: "column", gap: "20px" }}>
        <SummarySection>
          <div>Subtotal</div>
          <div><h3>R$ {getTotal().toFixed(2)}</h3></div>
        </SummarySection>
        <SummarySection>
          <div>Desconto (0%)</div>
          <div><h3>R$ 0</h3></div>
        </SummarySection>
        <SummarySection>
          <div>Frete</div>
          <div><h3>R$ 0</h3></div>
        </SummarySection>
        <Divider />
        <CouponSection>
          <Input placeholder="Coupon" icon={<CiShoppingTag size={20} />} />
          <Button bgColor="black" textColor="white">Aplicar</Button>
        </CouponSection>
        <Button 
          bgColor="orange" 
          textColor="white"
          onClick={() => handleBuy()}
        >Finalizar compra</Button>
      </div>
    </SummaryContainer>
  );
}