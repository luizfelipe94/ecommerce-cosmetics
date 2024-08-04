import Divider from "@/components/divider";
import { SummaryContainer } from "./styles";
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
        <div style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div>Subtotal</div>
          <div><h3>R$ 123.00</h3></div>
        </div>
        <div style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div>Desconto (20%)</div>
          <div><h3>R$ 123.00</h3></div>
        </div>
        <div style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div>Frete</div>
          <div><h3>R$ 15.00</h3></div>
        </div>
        <Divider />
        <div style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "10px" }}>
          <Input placeholder="Coupon" icon={<CiShoppingTag size={20} />} />
          <Button bgColor="black" textColor="white">Aplicar</Button>
        </div>
        <div style={{ width: "100%" }}>
          <Button bgColor="orange" textColor="white">Finalizar compra</Button>
        </div>
      </div>
    </SummaryContainer>
  );
}