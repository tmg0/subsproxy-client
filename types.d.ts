interface AccountSubscription {
  id: string
  accountId: string
  subscriptionId: string
  subscription?: Subscription
  account?: account
}

interface Account {
  id: string
  avatar?: string
  username: string
  createdAt: string
  updatedAt: string
  accountSubscription?: AccountSubscription[]
}

interface Device {
  id: string
  accountId: string
  ua?: string
}

interface Subscription {
  id: string
  address: string
  alias?: string
  createdAt: string
  updatedAt: string
  accountSubscription?: Omit<AccountSubscription, 'subscription'>[]
  server: Server[]
}

interface Server {
  id: string
  address: string
  subscriptionId: string
  createdAt: string
  updatedAt: string
}

interface ServerConf {
  address: string
}