import type { PropsWithChildren } from 'react'
import { AuthContext } from '@/contexts/Auth.ctx'
import { useAuthStore } from '@/hooks/useAuth'

export function AuthProvider({ children }: PropsWithChildren) {
  const { isAuthenticated, loading, login, logout, users } = useAuthStore('users')

  return (
    <AuthContext.Provider
      value={{
        login,
        logout,
        users,
        loading,
        isAuthenticated,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
