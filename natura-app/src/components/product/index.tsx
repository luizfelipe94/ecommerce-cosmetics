import { ReadProductDTO } from "@/service/products-service";
import { ImageContainer, StyledProduct } from "./styles";
import Image from "next/image";

export type ProductProps = {
  product: ReadProductDTO
};

export default function Product({ product }: ProductProps) {
  return (
    <StyledProduct>
      <ImageContainer>
        <Image
          width={150}
          height={150}
          src={product.image}
          alt=""
        />
      </ImageContainer>
      <div>{product.title}</div>
      <div>{product.rating}</div>
      <div>
        <div>R$ {product.price}</div>
        <div>
          <div>discount calculated</div>
          <div>discount</div>
        </div>
      </div>
    </StyledProduct>
  );
}