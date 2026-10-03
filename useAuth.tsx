import { createContext, useCallback, useContext, useMemo, useState } from 'react'
import type { ReactNode } from 'react'
import type { Role, SessionUser } from '../types'

/**
 * PHASE 1: demo-only session stored in sessionStorage so the UI can be explored.
 * PHASE 2 replaces the internals with Supabase Auth + the `profiles` table.
 * The shape of this context (user, signIn, signOut) is meant to stay the same.
 */
interface AuthContextValue {
  user: SessionUser | null
  signIn: (email: string, role: Role) => void
  signOut: () => void
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined)
const KEY = 'skolar-plus-demo-session'

function readSession(): SessionUser | null {
  try {
    const raw = sessionStorage.getItem(KEY)
    return raw ? (JSON.parse(raw) as SessionUser) : null
  } catch {
    return null
  }
}

const demoNames: Record<Role, string> = {
  admin: 'Alex Rivera',
  teacher: 'Maria Reyes',
  student: 'Jamie Santos',
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<SessionUser | null>(readSession)

  const signIn = useCallback((email: string, role: Role) => {
    const next: SessionUser = { id: `demo-${role}`, name: demoNames[role], email, role }
    try {
      sessionStorage.setItem(KEY, JSON.stringify(next))
    } catch {
      /* storage unavailable: session lasts until reload */
    }
    setUser(next)
  }, [])

  const signOut = useCallback(() => {
    try {
      sessionStorage.removeItem(KEY)
    } catch {
      /* ignore */
    }
    setUser(null)
  }, [])

  const value = useMemo(() => ({ user, signIn, signOut }), [user, signIn, signOut])
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth(): AuthContextValue {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used inside <AuthProvider>')
  return ctx
}
