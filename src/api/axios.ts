import axios, { AxiosResponse } from "axios";

const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_MSW_URL,
});

const handleResFulfilled = (res: AxiosResponse<any, any>) => {
    return res.data;
};

const handleResError = (err: any) => {
    return Promise.reject(err);
};

axiosInstance.interceptors.response.use(handleResFulfilled, handleResError);

export default axiosInstance;
