import { useEffect, useState } from 'react'
import { NavLink, Outlet, useLocation, useNavigate } from 'react-router-dom'
import Icon from '../components/Icon'
import { useAuth } from '../hooks/useAuth'
import { useTheme } from '../hooks/useTheme'
import { navByRole } from '../lib/navigation'

export default function AppLayout() {
  const { user, signOut } = useAuth()
  const { theme, toggle } = useTheme()
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => setOpen(false), [location.pathname])

  if (!user) return null
  const items = navByRole[user.role]
  const base = `/${user.role}`

  const handleSignOut = () => {
    signOut()
    navigate('/login', { replace: true })
  }

  return (
    <div className="shell">
      <a href="#main" className="skip-link">Skip to content</a>
      {open && <div className="scrim" onClick={() => setOpen(false)} aria-hidden="true" />}
      <aside className={`sidebar${open ? ' open' : ''}`} aria-label="Main navigation">
        <div className="brand">
          <span className="brand-mark">S+</span>
          <span>Skolar+</span>
        </div>
        <nav>
          {items.map((item) => (
            <NavLink
              key={item.label}
              to={item.path ? `${base}/${item.path}` : base}
              end={item.path === ''}
              className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
            >
              <Icon name={item.icon} />
              {item.label}
            </NavLink>
          ))}
        </nav>
        <div className="sidebar-foot">
          <div className="who">
            <strong>{user.name}</strong>
            <span>{user.role}</span>
          </div>
        </div>
      </aside>

      <div className="main-col">
        <header className="topbar">
          <button className="icon-btn menu-btn" onClick={() => setOpen((o) => !o)} aria-label="Toggle navigation" aria-expanded={open}>
            <Icon name={open ? 'close' : 'menu'} />
          </button>
          <div className="topbar-spacer" />
          <button className="icon-btn" onClick={toggle} aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}>
            <Icon name={theme === 'light' ? 'moon' : 'sun'} />
          </button>
          <button className="icon-btn" aria-label="Notifications">
            <Icon name="bell" />
          </button>
          <button className="btn btn-quiet" onClick={handleSignOut}>
            <Icon name="logout" size={18} />
            Sign out
          </button>
        </header>
        <main id="main" className="content">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
