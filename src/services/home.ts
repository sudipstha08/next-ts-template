import { API } from '../utils/api'

const fetchData = () => {
  return API.get('/home')
}

export { fetchData }
