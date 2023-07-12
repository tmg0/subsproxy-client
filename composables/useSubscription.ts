export const useSubscriptions = () => {
  return useRequest<Subscription[]>('/subscriptions')
}
