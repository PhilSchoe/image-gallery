export interface APIController {
  get<T>(url: string): Promise<T>;
  post<T, U = T>(url: string, data: T): Promise<U>;
}
