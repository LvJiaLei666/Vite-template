import { ref } from 'vue'

export default function useLoading(defaultValue = false) {
  const loading = ref<boolean>(defaultValue)

  const setLoading = (value: boolean) => {
    loading.value = value
  }

  const toggle = () => {
    loading.value = !loading.value
  }

  return { loading, setLoading, toggle }
}
