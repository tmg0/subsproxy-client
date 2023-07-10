import { UseFetchOptions } from 'nuxt/app'

const BASE_URL = '/api'

export const useResponseStatus = () => {
  const isUnauthorized = <T extends { status: number }>({ status }: T) => status === 403

  return { isUnauthorized }
}

export const useRequest = <T>(url: string, opts?: UseFetchOptions<T>) => {
  const router = useRouter()

  return useFetch(url, {
    baseURL: BASE_URL,

    onRequest: async ({ options }) => {
      const token: string | null = await useStorage.getItem(StorageKey.ACCESS_TOKEN)
      if (!token) { return }
      const extraHeaders = { Authorization: token }
      options.headers = { ...options.headers, ...extraHeaders }
    },

    onResponseError: async ({ response }) => {
      if (useResponseStatus().isUnauthorized(response)) {
        await useSignOut()
        router.push({ name: 'sign-in' })
      }
    },

    ...opts
  })
}
