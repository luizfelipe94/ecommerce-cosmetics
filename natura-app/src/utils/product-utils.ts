export function calculatePrice(price: number, discount: number): number {
  return discount ? price - (price * (discount / 100)) : price;
}
