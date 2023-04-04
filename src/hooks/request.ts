import useLoading from "@/utils/loading";
import { AxiosResponse } from "axios";

export default function useRequest<T>(api: () => Promise<AxiosResponse>, defaultValue = [] as unknown as <T>) {
  const { loading, setLoading } = useLoading(false);
}
