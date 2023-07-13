export const isVmess = (address?: string) => address?.startsWith(ServerPrefix.VMESS)
export const isShadowsocks = (address?: string) => address?.startsWith(ServerPrefix.SHADOWSOCKS)

export const isClash = (ua?: string) => ua?.toLowerCase().includes('clash')
export const isPostman = (ua?: string) => ua?.toLowerCase().includes('postman')

export const parseVmess = (address: string): ServerConf => {
  const encode = address.replace(ServerPrefix.VMESS, '')
  const decode = window.atob(encode)
  return { address: JSON.parse(decode).add }
}

export const parseShadowsocks = (address: string): ServerConf => {
  const [encode] = address.replace(ServerPrefix.SHADOWSOCKS, '').split('#')
  const [method, _, port] = window.atob(encode).split(':')
  const [password, server] = _.split('@')

  return { address: server }
}

export const parseServerConf = ({ address }: { address: string }): ServerConf => {
  if (isVmess(address)) { return parseVmess(address) }
  if (isShadowsocks(address)) { return parseShadowsocks(address) }
  return { address }
}

export const parseUA = (ua?: string) => {
  if (!ua) { return }
  const [browser, version] = ua.split('/')
  return {
    ua,
    browser,
    version
  }
}
