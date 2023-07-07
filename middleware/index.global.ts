const WHITE_LIST: string[] = ['sign-in']

export default defineNuxtRouteMiddleware(async (to) => {
  const accessToken = await useStorage.getItem(StorageKey.ACCESS_TOKEN)
  if (!accessToken && !WHITE_LIST.includes(to.name as string)) { return navigateTo({ name: 'sign-in' }) }
})
