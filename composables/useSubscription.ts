export interface Subscription {
  id: string
  address: string
  alias?: string
  createdAt: string
  updatedAt: string
}

export const useSubscriptions = () => {
  return useRequest<Subscription[]>('/subscriptions')
}
