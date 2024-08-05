import { listProducts } from "@/service/products-service";
import { useQuery } from "@tanstack/react-query";

export const useProducts = (page = 1) => {
  const { data, isLoading, isError } = useQuery({
    queryFn: () => listProducts(page),
    queryKey: ["list-procuts", page],
    retry: false,
  });
  return { data, isLoading, isError };
};