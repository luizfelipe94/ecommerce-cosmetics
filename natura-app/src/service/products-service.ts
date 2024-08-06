import AxiosHttpClient from "@/lib/http/axios";
import { HttpClient } from "@/lib/http/http";
import { PageMeta, ReadProductDTO } from "./types";

const httpClient: HttpClient = new AxiosHttpClient(process.env.NEXT_PUBLIC_API_URL || "http://localhost:3005");

export function calculatePrice(price: number, discount: number): number {
  return discount ? price - (price * (discount / 100)) : price;
}

export async function listProducts(page = 1, take?: number): Promise<PageMeta<ReadProductDTO>> {
  return httpClient.get(`/products?page=${page}&take=${take}`);
}