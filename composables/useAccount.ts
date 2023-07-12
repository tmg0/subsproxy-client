import { Device } from './useDevice'
import { Server } from './useServer'
import { Subscription } from './useSubscription'

export interface AccountSubscription {
  id: string
  accountId: string
  subscriptionId: string
  subscription: Subscription
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

export const useBindSubscription = (accountId: string) => {
  const subscriptionId = ref('')

  const bindSubscription = () => {
    if (!subscriptionId.value) { return }
    const body = { subscriptionId: subscriptionId.value, accountId }
    return useRequest(`/accounts/${accountId}/subscriptions`, { method: 'post', body })
  }

  return { subscriptionId, bindSubscription }
}

export const useUnbindSubscription = (accountId: string) => {
  return useRequest<Subscription[]>(`/accounts/${accountId}/subscriptions`, { method: 'delete' })
}

export const useAccountSubscriptions = (accountId: string) => {
  return useRequest<Subscription[]>(`/accounts/${accountId}/subscriptions`)
}

export const useAccountServers = (accountId: string) => {
  return useRequest<Server[]>(`/accounts/${accountId}/servers`)
}

export const useAccountDevices = (accountId: string) => {
  return useRequest<Device[]>(`/accounts/${accountId}/devices`)
}
