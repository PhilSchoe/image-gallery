export interface APIController {
  get<T>(url: string): Promise<T>;
}
