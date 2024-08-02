import { ReadProductDTO } from "@/service/products-service";
import { StyledProduct, ImageWrapper, ProcutTitle, RatingLabel, ProductRating, PriceContent, PriceLabel, DiscountContent, DiscountLabel } from "./styles";
import Stars from "../stars";
import Badge from "../badge";

export type ProductProps = {
  product: ReadProductDTO
};

function calculatePrice(price: number, discount: number): number {
  return price - (price * (discount / 100));
}

export default function Product({ product }: ProductProps) {
  return (
    <StyledProduct>
      <ImageWrapper
        width={150}
        height={150}
        src={product.image}
        alt="product"
      />
      <ProcutTitle>{product.title}</ProcutTitle>
      <ProductRating>
        <div>
          <Stars rating={product.rating} />
        </div>
        <div>
          <RatingLabel>{product.rating}/5</RatingLabel>
        </div>
      </ProductRating>
      <PriceContent>
        <PriceLabel>R$ {calculatePrice(product.price, product.discountPercentage)}</PriceLabel>
        {product.discountPercentage > 0 && (
          <DiscountContent>
            <DiscountLabel>R$ {product.price}</DiscountLabel>
            <div>
              <Badge color="#f1a08f">{product.discountPercentage}%</Badge>
            </div>
          </DiscountContent>
        )}
      </PriceContent>
    </StyledProduct>
  );
}