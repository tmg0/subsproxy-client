import { createStorage } from 'unstorage'
import localStorageDriver from 'unstorage/drivers/localstorage'

export const useStorage = createStorage({
  driver: localStorageDriver({})
})
