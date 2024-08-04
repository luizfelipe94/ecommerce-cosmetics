import Divider from "@/components/divider";
import { CouponSection, SummaryContainer, SummarySection } from "./styles";
import Input from "@/components/input";
import Button from "@/components/button";
import { CiShoppingTag } from "react-icons/ci";

export default function CartSummary() {
  return (
    <SummaryContainer>
      <div>
        <h3>Summary</h3>
      </div>
      <div style={{ width: "100%", display: "flex", flexDirection: "column", gap: "20px" }}>
        <SummarySection>
          <div>Subtotal</div>
          <div><h3>R$ 123.00</h3></div>
        </SummarySection>
        <SummarySection>
          <div>Desconto (20%)</div>
          <div><h3>R$ 123.00</h3></div>
        </SummarySection>
        <SummarySection>
          <div>Frete</div>
          <div><h3>R$ 15.00</h3></div>
        </SummarySection>
        <Divider />
        <CouponSection>
          <Input placeholder="Coupon" icon={<CiShoppingTag size={20} />} />
          <Button bgColor="black" textColor="white">Aplicar</Button>
        </CouponSection>
        <Button bgColor="orange" textColor="white">Finalizar compra</Button>
      </div>
    </SummaryContainer>
  );
}