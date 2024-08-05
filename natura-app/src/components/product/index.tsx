
import { StyledProduct, ImageWrapper, ProcutTitle, RatingLabel, ProductRating, PriceContent, PriceLabel, DiscountContent, DiscountLabel } from "./styles";
import { ReadProductDTO } from "@/service/types";
import Stars from "../stars";
import Badge from "../badge";

export type ProductProps = {
  product: ReadProductDTO
};

function calculatePrice(price: number, discount: number): number {
  return discount ? price - (price * (discount / 100)) : price;
}

export default function Product({ product }: ProductProps) {
  return (
    <StyledProduct>
      <ImageWrapper
        width={150}
        height={150}
        src={`/assets/${product.image}`}
        alt="product"
      />
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
    </StyledProduct>
  );
}