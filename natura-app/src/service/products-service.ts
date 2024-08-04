

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
      title: "Product1",
      price: 212.20,
      discountPercentage: 30,
      rating: 4.5,
    },
    {
      id: "2",
      image: "/assets/perfume2.jpg",
      title: "Product1",
      price: 212.20,
      discountPercentage: 0,
      rating: 4.5,
    },
    {
      id: "3",
      image: "/assets/perfume1.png",
      title: "Product1",
      price: 212.20,
      discountPercentage: 0,
      rating: 4.5,
    },
    {
      id: "4",
      image: "/assets/perfume1.png",
      title: "Product1",
      price: 1000,
      discountPercentage: 10,
      rating: 2,
    },
    {
      id: "1",
      image: "/assets/perfume1.png",
      title: "Product1",
      price: 212.20,
      discountPercentage: 30,
      rating: 4.5,
    },
    {
      id: "2",
      image: "/assets/perfume2.jpg",
      title: "Product1",
      price: 212.20,
      discountPercentage: 0,
      rating: 4.5,
    },
    {
      id: "3",
      image: "/assets/perfume1.png",
      title: "Product1",
      price: 212.20,
      discountPercentage: 0,
      rating: 4.5,
    },
    {
      id: "4",
      image: "/assets/perfume1.png",
      title: "Product1",
      price: 1000,
      discountPercentage: 10,
      rating: 2,
    },
  ];
}