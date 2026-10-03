import { useState } from 'react'
import type { FormEvent } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'
import { roleHome } from '../../lib/navigation'
import type { Role } from '../../types'

const roles: { value: Role; label: string }[] = [
  { value: 'student', label: 'Student' },
  { value: 'teacher', label: 'Teacher' },
  { value: 'admin', label: 'Admin' },
]

export default function LoginPage() {
  const { user, signIn } = useAuth()
  const navigate = useNavigate()
  const [role, setRole] = useState<Role>('student')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  if (user) return <Navigate to={roleHome(user.role)} replace />

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (!email.trim() || !password) {
      setError('Enter your email and password to continue.')
      return
    }
    setError('')
    signIn(email.trim(), role)
    navigate(roleHome(role), { replace: true })
  }

  return (
    <div className="login">
      <section className="login-art" aria-hidden="true">
        <div className="chalk-grid" />
        <p className="login-quote">Everything for the school day, in one place.</p>
      </section>
      <section className="login-panel">
        <form className="login-form" onSubmit={onSubmit} noValidate>
          <div className="brand brand-dark">
            <span className="brand-mark">S+</span>
            <span>Skolar+</span>
          </div>
          <h1>Sign in</h1>
          <p className="muted">Use your school account.</p>

          <fieldset className="segmented">
            <legend>Preview as</legend>
            {roles.map((r) => (
              <label key={r.value} className={role === r.value ? 'on' : ''}>
                <input type="radio" name="role" value={r.value} checked={role === r.value} onChange={() => setRole(r.value)} />
                {r.label}
              </label>
            ))}
          </fieldset>

          <label className="field">
            Email
            <input type="email" autoComplete="username" value={email} onChange={(e) => setEmail(e.target.value)} />
          </label>
          <label className="field">
            Password
            <input type="password" autoComplete="current-password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </label>

          {error && <p className="error" role="alert">{error}</p>}
          <button className="btn btn-primary" type="submit">Sign in</button>
          <p className="notice">Preview mode: any email and password work, and "Preview as" picks the role. Real sign-in with Supabase arrives in Phase 2.</p>
        </form>
      </section>
    </div>
  )
}
