import StatCard from '../../components/StatCard'
import { announcements, recentActivity, staffStats } from '../../lib/mockData'
import type { Role } from '../../types'

export default function AdminDashboard({ role = 'admin' }: { role?: Extract<Role, 'admin' | 'teacher'> }) {
  return (
    <div className="page">
      <h1 className="page-title">{role === 'admin' ? 'School overview' : 'Teaching overview'}</h1>

      <div className="stats">
        {staffStats.map((s) => (
          <StatCard key={s.label} {...s} />
        ))}
      </div>

      <div className="two-col">
        <section className="panel">
          <h2>Recent activity</h2>
          <ul className="list">
            {recentActivity.map((a) => (
              <li key={a.id}>
                <span>{a.text}</span>
                <time>{a.time}</time>
              </li>
            ))}
          </ul>
        </section>
        <section className="panel">
          <h2>Recent announcements</h2>
          <ul className="list">
            {announcements.map((n) => (
              <li key={n.id}>
                <span>
                  <strong>{n.title}</strong>
                  <small>{n.audience} - {n.author}</small>
                </span>
                <time>{n.date}</time>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  )
}
