import { ReadProductDTO } from "@/service/products-service";
import { ImageWrapper, ItemContainer, ItemContent } from "./styles";
import Button from "@/components/button";

export type CatalogItemProps = {
  item: ReadProductDTO;
}

export default function CatalogItem({ item }: CatalogItemProps) {
  return (
    <ItemContainer>
      <div style={{ display: "flex", flexDirection: "row", gap: "50px", width: "100%" }}>
        <ImageWrapper
          width={150}
          height={150}
          src={item.image}
          alt="product"
        />
        <ItemContent>
          <div><h3>{item.title}</h3></div>
          <div><h3>R$ {item.price}</h3></div>
          <Button bgColor="orange" textColor="white">Adicionar</Button>
        </ItemContent>
      </div>
    </ItemContainer>
  );
}