import { DBUser } from './user'

export interface IAuthStore {
  loggedIn: boolean
  dbUser: DBUser | null
}
