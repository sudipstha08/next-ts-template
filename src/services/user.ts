import { API } from '@utils'

const fetchUser = () => {
  return API.get('/user')
}

export const userService = { fetchUser }
