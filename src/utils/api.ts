import axios, { AxiosInstance, AxiosError, AxiosResponse } from 'axios'

/**
 * Create Axios instance with custom config
 */
const API: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

// Request interceptor
API.interceptors.request.use(
  async axiosConfig => {
    return axiosConfig
  },
  (error: AxiosError) => Promise.reject(error),
)

// Response interceptor
API.interceptors.response.use(
  (response: AxiosResponse) => {
    return response.data
  },
  async (error: AxiosError) => {
    return Promise.reject(error)
  },
)

export { API }
