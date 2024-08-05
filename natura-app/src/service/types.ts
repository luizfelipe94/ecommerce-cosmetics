export type PageMeta<T> = {
  data: T[];
  meta: {
    page: number;
    take: number;
    itemCount: number;
    pageCount: number;
    hasPreviousPage: boolean;
    hasNextPage: boolean;
  };
}

export type ReadProductDTO = {
  id: string;
  image: string;
  name: string;
  slug: string;
  rating: number;
  price: number;
  discountPercentege: number;
};