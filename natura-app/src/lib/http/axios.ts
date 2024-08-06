import axios, { AxiosInstance } from "axios";
import { HttpClient } from "./http";

export default class AxiosHttpClient implements HttpClient {

  private instance: AxiosInstance;

  constructor(baseURL?: string) {
    this.instance = axios.create({
      baseURL,
      timeout: 10000,
      headers: { "Content-Type": "application/json", },
    });
  }

  async get<T>(url: string, config?: object): Promise<T> {
    const response = await this.instance.get<T>(url, config);
    return response.data;
  }

  async post<T>(url: string, data: any, config?: object): Promise<T> {
    const response = await this.instance.post<T>(url, data, config);
    return response.data;
  }

  async put<T>(url: string, data: any, config?: object): Promise<T> {
    const response = await this.instance.put<T>(url, data, config);
    return response.data;
  }

  async delete<T>(url: string, config?: object): Promise<T> {
    const response = await this.instance.delete<T>(url, config);
    return response.data;
  }

}