import {
    QueryFunction,
    QueryKey,
    useQuery,
    UseQueryOptions,
} from "@tanstack/react-query";
import { AxiosError } from "axios";

const useQueryHook = <T,>(
    key: string[],
    queryFn: QueryFunction<T>,
    option?: Omit<UseQueryOptions<T, AxiosError, T, QueryKey>, "queryFn">
): { data: T | undefined } => {
    const { data } = useQuery<T, AxiosError>(key, queryFn, option);

    return { data };
};

export default useQueryHook;
