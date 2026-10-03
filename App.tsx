import { Navigate, Route, Routes } from 'react-router-dom'
import type { ReactElement } from 'react'
import ComingSoon from './components/ComingSoon'
import ProtectedRoute from './components/ProtectedRoute'
import { useAuth } from './hooks/useAuth'
import AppLayout from './layouts/AppLayout'
import { navByRole, roleHome } from './lib/navigation'
import AdminDashboard from './pages/admin/AdminDashboard'
import LoginPage from './pages/auth/LoginPage'
import StudentDashboard from './pages/student/StudentDashboard'
import TeacherDashboard from './pages/teacher/TeacherDashboard'
import type { Role } from './types'

const dashboards: Record<Role, ReactElement> = {
  admin: <AdminDashboard />,
  teacher: <TeacherDashboard />,
  student: <StudentDashboard />,
}

function RoleRedirect() {
  const { user } = useAuth()
  return <Navigate to={user ? roleHome(user.role) : '/login'} replace />
}

function roleRoutes(role: Role) {
  return (
    <Route
      path={`/${role}`}
      element={
        <ProtectedRoute role={role}>
          <AppLayout />
        </ProtectedRoute>
      }
    >
      <Route index element={dashboards[role]} />
      {navByRole[role]
        .filter((item) => item.path !== '')
        .map((item) => (
          <Route key={item.path} path={item.path} element={<ComingSoon title={item.label} phase={item.phase} />} />
        ))}
    </Route>
  )
}

export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/" element={<RoleRedirect />} />
      {roleRoutes('admin')}
      {roleRoutes('teacher')}
      {roleRoutes('student')}
      <Route path="*" element={<RoleRedirect />} />
    </Routes>
  )
}
