

export type ReadProductDTO = {
  id: string;
  image: string;
  title: string;
  rating: number;
  price: number;
  discountPercentage: number;
};

export async function listProducts(maxItems = 4): Promise<ReadProductDTO[]> {
  return [
    {
      id: "1",
      image: "/assets/perfume1.png",
      title: "product1",
      price: 212.20,
      discountPercentage: 30,
      rating: 4.5,
    },
    {
      id: "2",
      image: "/assets/perfume1.png",
      title: "product1",
      price: 212.20,
      discountPercentage: 30,
      rating: 4.5,
    },
    {
      id: "3",
      image: "/assets/perfume1.png",
      title: "product1",
      price: 212.20,
      discountPercentage: 30,
      rating: 4.5,
    },
    {
      id: "4",
      image: "/assets/perfume1.png",
      title: "product1",
      price: 212.20,
      discountPercentage: 30,
      rating: 4.5,
    },
  ];
}