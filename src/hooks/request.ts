import useLoading from '@/utils/loading'
import type { AxiosResponse } from 'axios'
import { ref, type UnwrapRef } from 'vue'

export default function useRequest<T>(
  api: () => Promise<AxiosResponse>,
  defaultValue = [] as unknown as T,
  isLoading = true
) {
  const { loading, setLoading } = useLoading(isLoading)
  const response = ref<T>(defaultValue)
  api()
    .then((res) => {
      response.value = res.data as unknown as UnwrapRef<T>
    })
    .catch((err) => {})
    .finally(() => {
      setLoading(false)
    })

  return { loading, response }
}
