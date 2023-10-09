import { AxiosRequestConfig } from "axios";
import axiosInstance from "./axios";

export default class API {
    static get<T>(
        url: string,
        params?: Pick<AxiosRequestConfig, "params">,
        config?: Omit<AxiosRequestConfig, "params">
    ): Promise<T> {
        const option: AxiosRequestConfig = {
            method: "get",
            url,
            params,
            ...config,
        };
        return axiosInstance(option);
    }
    static post<T, D>(url: string, params: T): Promise<D> {
        const option: AxiosRequestConfig = {
            method: "post",
            url,
            params,
        };
        return axiosInstance(option);
    }
}
