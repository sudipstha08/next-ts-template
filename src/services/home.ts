import { API } from './api'

const fetchData = () => {
  return API.get('/home')
}

export { fetchData }
