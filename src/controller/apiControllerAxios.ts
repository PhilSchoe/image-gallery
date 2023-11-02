import type { APIController } from './apiController';
import axios, { type AxiosResponse } from 'axios';

export class APIControllerAxios implements APIController {
  public async get<T>(url: string): Promise<T> {
    const result: AxiosResponse<T> = await axios.get<T>(url);
    return result.data;
  }
}
