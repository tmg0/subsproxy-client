export const useAccount = (accountId: string) => {
  return useRequest<Account>(`/accounts/${accountId}`)
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

export const useBindSubscription = (accountId: string) => {
  const subscriptionId = ref('')

  const bindSubscription = () => {
    if (!subscriptionId.value) { return }
    const body = { subscriptionId: subscriptionId.value, accountId }
    return useRequest(`/accounts/${accountId}/subscriptions`, { method: 'post', body })
  }

  return { subscriptionId, bindSubscription }
}

export const useUnbindSubscription = (subscriptionId: string, accountId?: string) => {
  if (!accountId) { return }
  return useRequest<Subscription[]>(`/accounts/${accountId}/subscriptions/${subscriptionId}`, { method: 'delete' })
}

export const useBindServer = (accountId: string) => {
  if (!accountId) { return }
  return useRequest<Subscription[]>(`/accounts/${accountId}/servers`, { method: 'post' })
}

export const useUnbindServer = (serverId: string, accountId?: string) => {
  if (!serverId || !accountId) { return }
  return useRequest<Subscription[]>(`/accounts/${accountId}/servers/${serverId}`, { method: 'delete' })
}

export const useAccountSubscriptions = (accountId: string) => {
  return useRequest<AccountSubscription[]>(`/accounts/${accountId}/subscriptions`)
}

export const useAccountServers = (accountId: string) => {
  return useRequest<Server[]>(`/accounts/${accountId}/servers`)
}

export const useAccountDevices = (accountId: string) => {
  return useRequest<Device[]>(`/accounts/${accountId}/devices`)
}
