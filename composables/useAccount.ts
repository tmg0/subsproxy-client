export interface Account {
  id: string
  username: string
  createdAt: string
  updatedAt: string
}

export const useAccounts = () => {
  return useRequest<Account[]>('/accounts')
}
