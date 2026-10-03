export default function ComingSoon({ title, phase }: { title: string; phase: number }) {
  return (
    <div className="page">
      <h1 className="page-title">{title}</h1>
      <div className="empty">
        <h2>This page is built in Phase {phase}</h2>
        <p>The navigation and route are ready. The content arrives with its database tables and security rules.</p>
      </div>
    </div>
  )
}
