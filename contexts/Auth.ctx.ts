import { createContext } from 'react'

interface AuthContextType {
  login: (account: string, password: string) => any
  logout: () => any
  users: any
  loading: boolean
  isAuthenticated: boolean
}

export const AuthContext = createContext<AuthContextType>({
  login: () => {},
  logout: () => {},
  users: null,
  loading: false,
  isAuthenticated: false,
})
