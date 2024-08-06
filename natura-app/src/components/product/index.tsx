"use client";

import { StyledProduct, ImageWrapper, ProcutTitle, RatingLabel, ProductRating, PriceContent, PriceLabel, DiscountContent, DiscountLabel, Body } from "./styles";
import { ReadProductDTO } from "@/service/types";
import Stars from "../stars";
import Badge from "../badge";
import Image from "next/image";
import { calculatePrice } from "@/service/products-service";

export type ProductProps = {
  product: ReadProductDTO
};

export default function Product({ product }: ProductProps) {
  return (
    <StyledProduct>
      <ImageWrapper>
        <Image
          width={300}
          height={300}
          src={`/assets/${product.image}`}
          alt="product"
        />
      </ImageWrapper>
      <Body>
        <ProcutTitle>{product.name}</ProcutTitle>
        <ProductRating>
          <div>
            <Stars rating={product.rating} />
          </div>
          <div>
            <RatingLabel>{product.rating}/5</RatingLabel>
          </div>
        </ProductRating>
        <PriceContent>
          <PriceLabel>R$ {calculatePrice(product.price, product.discountPercentege).toFixed(2)}</PriceLabel>
          {product.discountPercentege > 0 && (
            <DiscountContent>
              <DiscountLabel>R$ {product.price}</DiscountLabel>
              <div>
                <Badge color="#f1a08f">{product.discountPercentege}%</Badge>
              </div>
            </DiscountContent>
          )}
        </PriceContent>
      </Body>
    </StyledProduct>
  );
}