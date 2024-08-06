"use server";

import AxiosHttpClient from "@/lib/http/axios";
import { HttpClient } from "@/lib/http/http";
import { PageMeta, ReadProductDTO } from "./types";

const httpClient: HttpClient = new AxiosHttpClient("http://api:3000"); // FIXME: get url from env PUBLIC_API

export async function listProducts(page = 1, take?: number): Promise<PageMeta<ReadProductDTO>> {
  return httpClient.get(`/products?page=${page}&take=${take}`);
}