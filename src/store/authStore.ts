import { proxy } from 'valtio'
import { IAuthStore } from '@interfaces'

export const authStore = proxy<IAuthStore>({
  loggedIn: false,
  dbUser: null,
})
