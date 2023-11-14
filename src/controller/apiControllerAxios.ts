import type { APIController } from './apiController';
import axios, { type AxiosResponse } from 'axios';

export class APIControllerAxios implements APIController {
  public async get<T>(url: string): Promise<T> {
    const result: AxiosResponse<T> = await axios.get<T>(url);
    return result.data;
  }

  public async post<T, U = T>(url: string, data: T): Promise<U> {
    const result: AxiosResponse<U> = await axios.post<U, AxiosResponse<U>, T>(url, data);
    return result.data;
  }
}
