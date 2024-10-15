import type { IRes, IUser } from '@/types/typings'
import { useRequest } from '@/hooks/useRequest'

export function login(account: string, password: string) {
  return useRequest.POST<IRes<IUser>>(`/auth/login`, { account, password }).then(res => res.data)
}
