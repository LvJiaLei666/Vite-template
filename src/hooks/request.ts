import useLoading from '@/utils/loading'
import type { AxiosResponse } from 'axios'
import { ref, type UnwrapRef } from 'vue'

/**

 useRequest函数用于异步请求数据，并返回请求结果和loading状态
 @template T 请求结果类型
 @param {() => Promise<AxiosResponse>} api 请求数据的函数，返回Promise对象
 @param {T} [defaultValue=[]] 默认值，可选参数，默认为一个空数组
 @param {boolean} [isLoading=true] 是否需要loading状态，可选参数，默认为true
 @param requestParams
 @returns {{ loading: boolean, response: Ref<T> }} 返回包含loading状态和响应结果的对象 */
export default function useRequest<T, K>(
  api: (requestParams: K) => Promise<AxiosResponse>,
  defaultValue = [] as unknown as T,
  isLoading = true,
  requestParams = {} as unknown as K
) {
  const { loading, setLoading } = useLoading(isLoading)
  const response = ref<T>(defaultValue)
  const err = ref(null)
  api(requestParams)
    .then((res) => {
      response.value = res.data as unknown as UnwrapRef<T>
    })
    .catch((err) => {
      err.value = err
    })
    .finally(() => {
      setLoading(false)
    })

  return { loading, response, err }
}
