import AxiosHttpClient from "@/lib/http/axios";
import { HttpClient } from "@/lib/http/http";
import { PageMeta, ReadProductDTO } from "./types";

const httpClient: HttpClient = new AxiosHttpClient(process.env.NEXT_PUBLIC_API_URL || "http://localhost:3005");

export async function listProducts(page = 1): Promise<PageMeta<ReadProductDTO>> {
  return httpClient.get(`/products?page=${page}&take=50`);
}