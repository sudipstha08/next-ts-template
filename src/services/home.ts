import { API } from '@utils'

const fetchData = () => {
  return API.get('/home')
}

export { fetchData }
