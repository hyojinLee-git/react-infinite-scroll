import { AxiosRequestConfig } from "axios";
import axiosInstance from "./axios";

export default class API {
    static async get(
        url: string,
        params?: Pick<AxiosRequestConfig, "params">,
        config?: Omit<AxiosRequestConfig, "params">
    ) {
        const res = await axiosInstance.get(url, { ...config, params });
        return res;
    }
}
