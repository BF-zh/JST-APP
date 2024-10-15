import type { AxiosInstance, AxiosResponse, InternalAxiosRequestConfig } from 'axios'
import axios from 'axios'

const baseURL = process.env.EXPO_PUBLIC_API_URL
class Request {
  private instance: AxiosInstance
  constructor(baseURL: string | undefined) {
    this.instance = axios.create({
      baseURL,
      timeout: 50000,
      maxRedirects: 0,
      headers: {
        'Content-Type': 'application/json',
      },
      validateStatus(status) {
        return status >= 200 && status < 300 || [401, 403, 404, 500].includes(status)
      },
    })
    this.instance.interceptors.request.use(
      this.requestInterceptors,
      (err) => {
        console.log(err)
        return Promise.reject(err)
      },
    )
    this.instance.interceptors.response.use(
      this.responseInterceptors,
      (err) => {
        console.log(err)
        return Promise.reject(err)
      },
    )
  }

  requestInterceptors(config: InternalAxiosRequestConfig) {
    // 请求拦截器
    return config
  }

  responseInterceptors(res: AxiosResponse) {
    // 响应拦截器
    return res
  }

  GET<T>(url: string, params?: any) {
    return this.instance.get<T>(url, { params })
  }

  POST<T>(url: string, data?: any) {
    return this.instance.post<T>(url, data)
  }

  PUT<T>(url: string, data?: any) {
    return this.instance.put<T>(url, data)
  }

  DELETE<T>(url: string, data?: any) {
    return this.instance.delete<T>(url, data)
  }

  PATCH<T>(url: string, data?: any) {
    return this.instance.patch<T>(url, data)
  }

  OPTIONS<T>(url: string, data?: any) {
    return this.instance.options<T>(url, data)
  }
}

export const useRequest = new Request(baseURL)
