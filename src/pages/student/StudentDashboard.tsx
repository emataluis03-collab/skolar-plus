import { useAuth } from '../../hooks/useAuth'
import {
  announcements,
  currentGrades,
  mySubjects,
  notifications,
  recentLessons,
  upcomingTasks,
} from '../../lib/mockData'

export default function StudentDashboard() {
  const { user } = useAuth()
  const firstName = user?.name.split(' ')[0] ?? 'there'

  return (
    <div className="page">
      <h1 className="page-title">Welcome back, {firstName}</h1>

      <section className="panel">
        <h2>Current subjects</h2>
        <div className="subject-grid">
          {mySubjects.map((s) => (
            <article key={s.code} className="subject">
              <div className="subject-code">{s.code}</div>
              <h3>{s.name}</h3>
              <p className="muted">{s.teacher} - {s.section}</p>
              <div className="progress" role="progressbar" aria-valuenow={s.progress} aria-valuemin={0} aria-valuemax={100} aria-label={`${s.name} lesson progress`}>
                <span style={{ width: `${s.progress}%` }} />
              </div>
              <small>{s.progress}% of lessons viewed</small>
            </article>
          ))}
        </div>
      </section>

      <div className="two-col">
        <section className="panel">
          <h2>Upcoming activities</h2>
          <ul className="list">
            {upcomingTasks.map((t) => (
              <li key={t.id}>
                <span>
                  <strong>{t.title}</strong>
                  <small>{t.subject} - {t.kind}</small>
                </span>
                <span className="right">
                  <time>Due {t.due}</time>
                  <span className={`chip ${t.status === 'Not submitted' ? 'warn' : 'ok'}`}>{t.status}</span>
                </span>
              </li>
            ))}
          </ul>
        </section>
        <section className="panel">
          <h2>Recent lessons</h2>
          <ul className="list">
            {recentLessons.map((l) => (
              <li key={l.id}>
                <span>
                  <strong>{l.title}</strong>
                  <small>{l.subject}</small>
                </span>
                <time>{l.date}</time>
              </li>
            ))}
          </ul>
        </section>
      </div>

      <div className="two-col">
        <section className="panel">
          <h2>Current grades</h2>
          <div className="table-wrap">
            <table>
              <thead>
                <tr><th>Subject</th><th>Assessment</th><th>Score</th><th>%</th></tr>
              </thead>
              <tbody>
                {currentGrades.map((g) => (
                  <tr key={`${g.subject}-${g.assessment}`}>
                    <td>{g.subject}</td>
                    <td>{g.assessment}</td>
                    <td>{g.score} / {g.max}</td>
                    <td>{Math.round((g.score / g.max) * 100)}%</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
        <section className="panel">
          <h2>Announcements</h2>
          <ul className="list">
            {announcements.map((n) => (
              <li key={n.id}>
                <span>
                  <strong>{n.title}</strong>
                  <small>{n.audience}</small>
                </span>
                <time>{n.date}</time>
              </li>
            ))}
          </ul>
          <h2 className="sub-h">Notifications</h2>
          <ul className="list">
            {notifications.map((n) => (
              <li key={n.id}>
                <span>{n.text}</span>
                <time>{n.time}</time>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  )
}
