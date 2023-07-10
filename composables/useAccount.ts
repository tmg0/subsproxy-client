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
