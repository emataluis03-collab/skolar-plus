export type Role = 'admin' | 'teacher' | 'student'

export interface SessionUser {
  id: string
  name: string
  email: string
  role: Role
}

export interface NavItem {
  /** Path relative to the role root. Empty string = dashboard. */
  path: string
  label: string
  icon: string
  /** Build phase in which this page becomes real. */
  phase: number
}

export interface Announcement {
  id: string
  title: string
  audience: string
  author: string
  date: string
}

export interface Subject {
  code: string
  name: string
  teacher: string
  section: string
  progress: number
}

export interface Lesson {
  id: string
  title: string
  subject: string
  date: string
}

export interface Task {
  id: string
  title: string
  subject: string
  due: string
  kind: 'Assignment' | 'Quiz' | 'Activity'
  status: 'Not submitted' | 'Submitted' | 'Graded'
}

export interface GradeRow {
  subject: string
  assessment: string
  score: number
  max: number
}
