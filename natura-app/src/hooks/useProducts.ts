import { listProducts } from "@/service/products-service";
import { useQuery } from "@tanstack/react-query";

export const useProducts = (page = 1, take?: number) => {
  const { data, isLoading, isError } = useQuery({
    queryFn: () => listProducts(page, take),
    queryKey: ["list-procuts", page, take],
    retry: false,
  });
  return { data, isLoading, isError };
};