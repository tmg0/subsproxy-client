export const useSignIn = () => {
  const username = ref('')
  const password = ref('')

  const signIn = async () => {
    const body = { username: username.value, password: password.value }
    const { data } = await useRequest<{ accessToken: string }>('/sessions', { method: 'post', body })
    const { accessToken } = data.value || {}
    if (!accessToken) { return }
    useStorage.setItem(StorageKey.ACCESS_TOKEN, accessToken)
  }

  return { username, password, signIn }
}

export const useSignOut = () => {
  return useStorage.removeItem(StorageKey.ACCESS_TOKEN)
}
