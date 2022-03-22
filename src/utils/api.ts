import axios, { AxiosInstance } from 'axios'

export const API: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
})

export const test = 'my testing'
