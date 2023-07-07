import { UseFetchOptions } from 'nuxt/app'

const BASE_URL = '/api'

export const useRequest = <T>(url: string, opts?: UseFetchOptions<T>) => {
  return useFetch(url, {
    baseURL: BASE_URL,

    onRequest: async ({ options }) => {
      const token: string | null = await useStorage.getItem(StorageKey.ACCESS_TOKEN)
      if (!token) { return }
      const extraHeaders = { Authorization: token }
      options.headers = { ...options.headers, ...extraHeaders }
    },

    onResponse: () => { },

    ...opts
  })
}
