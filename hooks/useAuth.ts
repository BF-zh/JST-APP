import type { IUser } from '@/types/typings'
import { authAPI } from '@/apis'
import { AuthContext } from '@/contexts/Auth.ctx'
import { deleteItemAsync, getItemAsync, setItemAsync } from 'expo-secure-store'
import { useContext, useEffect, useState } from 'react'
import { Platform } from 'react-native'
import Toast from 'react-native-toast-message'

export function useAuth() {
  return useContext(AuthContext)
}
async function setStorage(key: string, value: string | null | Record<string, any>) {
  if (Platform.OS === 'web') {
    try {
      if (value === null) {
        localStorage.removeItem(key)
      }
      else {
        localStorage.setItem(key, JSON.stringify(value))
      }
    }
    catch (e) {
      console.error('Local storage is unavailable:', e)
    }
  }
  else {
    if (value == null) {
      await deleteItemAsync(key)
    }
    else {
      await setItemAsync(key, JSON.stringify(value))
    }
  }
}
async function getStorage(key: string) {
  if (Platform.OS === 'web') {
    try {
      return await JSON.parse(localStorage.getItem(key) || '[]')
    }
    catch (e) {
      console.error('Local storage is unavailable:', e)
    }
  }
  else {
    const data = await getItemAsync(key) || '[]'
    return JSON.parse(data)
  }
}

export function useAuthStore(session: string) {
  const [users, setUsers] = useState<Array<IUser>>([])
  const [isAuthenticated, setAuthenticated] = useState(users.length > 0)
  const [loading, setloading] = useState(true)
  const login = async (account: string, password: string) => {
    // TODO: Implement login logi
    setloading(true)
    const { code, data, msg } = await authAPI.login(account, password)
    setloading(false)
    if (code === 500)
      return Toast.show({ type: 'error', text1: '账号或密码错误' })
    if (code !== 200)
      return Toast.show({ type: 'error', text1: msg })
    setUsers([...users, data])
    setStorage(session, [...users, data])
    setAuthenticated(true)
  }

  useEffect(() => {
    getStorage(session).then((user: IUser[]) => {
      if (user.length > 0) {
        setUsers(user)
        setAuthenticated(true)
        setStorage(session, user)
      }
    })
    setloading(false)
  }, ['users'])
  const logout = () => {
    // TODO: Implement logout logic
    console.log('logout')
  }
  return {
    users,
    isAuthenticated,
    loading,
    login,
    logout,
  }
}
