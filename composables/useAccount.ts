export interface AccountSubscription {
  id: string
  accountId: string
  subscriptionId: string
}

export interface Account {
  id: string
  username: string
  createdAt: string
  updatedAt: string
  accountSubscription?: AccountSubscription[]
}

export const useAccounts = () => {
  return useRequest<Account[]>('/accounts')
}

export const useCreateAccount = () => {
  const username = ref('')

  const createAccount = async () => {
    if (!username.value) { return }
    await useRequest('/accounts', { method: 'post', body: { username: username.value } })
  }

  return { username, createAccount }
}
