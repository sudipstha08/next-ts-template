import axios, { AxiosError, AxiosInstance, AxiosResponse } from 'axios'
import { config } from '@/utils'

/**
 * Create Axios instance with custom config
 */
export const API: AxiosInstance = axios.create({
  baseURL: config.API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

/**
 *  Request interceptor
 * */
API.interceptors.request.use(
  async axiosConfig => {
    return axiosConfig
  },
  (error: AxiosError) => Promise.reject(error),
)

/**
 * Response interceptor
 **/
API.interceptors.response.use(
  (response: AxiosResponse) => {
    return response.data
  },
  async error => {
    return Promise.reject({
      message: 'Error occured',
      ...error,
    })
  },
)
