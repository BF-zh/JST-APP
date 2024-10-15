export type { StaticRoutes } from 'expo-router'

export interface IRes<T = any> {
  data: T
  code: number
  msg: string
}

export interface IUser {
  hasRisk: boolean
  href: string | null
  loginVerId: null | string
  mobile: string
  idaasHasRisk: boolean
  idaasFid: null | number
  safeLevel: number | null
  isTPWS: number
  co_id: number
  owner_co_id: number
  cookie: string
}
