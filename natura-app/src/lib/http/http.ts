export interface HttpClient {
  get<T>(url: string, config?: object): Promise<T>;
  post<T>(url: string, data: any, config?: object): Promise<T>;
  put<T>(url: string, data: any, config?: object): Promise<T>;
  delete<T>(url: string, config?: object): Promise<T>;
}