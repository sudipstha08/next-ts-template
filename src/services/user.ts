import { API } from './api'

const fetchUser = () => {
  return API.get('/user')
}

export const userService = { fetchUser }
