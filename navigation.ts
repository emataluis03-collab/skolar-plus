import type { NavItem, Role } from '../types'

export const navByRole: Record<Role, NavItem[]> = {
  admin: [
    { path: '', label: 'Dashboard', icon: 'dashboard', phase: 1 },
    { path: 'students', label: 'Students', icon: 'users', phase: 3 },
    { path: 'classes', label: 'Classes', icon: 'classes', phase: 3 },
    { path: 'subjects', label: 'Subjects', icon: 'book', phase: 3 },
    { path: 'lessons', label: 'Lessons', icon: 'lessons', phase: 4 },
    { path: 'activities', label: 'Activities', icon: 'tasks', phase: 5 },
    { path: 'gradebook', label: 'Gradebook', icon: 'grades', phase: 6 },
    { path: 'announcements', label: 'Announcements', icon: 'megaphone', phase: 7 },
  ],
  teacher: [
    { path: '', label: 'Dashboard', icon: 'dashboard', phase: 1 },
    { path: 'students', label: 'My students', icon: 'users', phase: 3 },
    { path: 'lessons', label: 'Lessons', icon: 'lessons', phase: 4 },
    { path: 'activities', label: 'Activities', icon: 'tasks', phase: 5 },
    { path: 'gradebook', label: 'Gradebook', icon: 'grades', phase: 6 },
    { path: 'announcements', label: 'Announcements', icon: 'megaphone', phase: 7 },
  ],
  student: [
    { path: '', label: 'Dashboard', icon: 'dashboard', phase: 1 },
    { path: 'subjects', label: 'My subjects', icon: 'book', phase: 3 },
    { path: 'lessons', label: 'Lessons', icon: 'lessons', phase: 4 },
    { path: 'activities', label: 'Activities', icon: 'tasks', phase: 5 },
    { path: 'grades', label: 'Grades', icon: 'grades', phase: 6 },
    { path: 'announcements', label: 'Announcements', icon: 'megaphone', phase: 7 },
  ],
}

export const roleHome = (role: Role): string => `/${role}`
