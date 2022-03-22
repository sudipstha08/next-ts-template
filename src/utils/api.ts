import axios, { AxiosInstance } from 'axios'

const API: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
})

export { API }
