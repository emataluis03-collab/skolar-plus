// Phase 1 placeholder data. Replaced by Supabase queries in later phases.
import type { Announcement, GradeRow, Lesson, Subject, Task } from '../types'

export const staffStats = [
  { label: 'Students', value: '482', note: '12 added this month' },
  { label: 'Subjects', value: '24', note: '3 archived' },
  { label: 'Active classes', value: '18', note: 'Across 6 year levels' },
  { label: 'Pending submissions', value: '37', note: 'Waiting for review' },
]

export const recentActivity = [
  { id: 'a1', text: 'Ms. Reyes published "Fractions Review" for Grade 6 - Mabini', time: '20 min ago' },
  { id: 'a2', text: '14 students submitted "Lab Report 2" for Science 8', time: '1 hour ago' },
  { id: 'a3', text: 'Mr. Cruz updated Quiz 3 scores for Filipino 7', time: '3 hours ago' },
  { id: 'a4', text: 'New student Lia Santos added to Grade 9 - Rizal', time: 'Yesterday' },
]

export const announcements: Announcement[] = [
  { id: 'n1', title: 'Midterm schedule is now posted', audience: 'All students', author: 'Registrar', date: 'Oct 2' },
  { id: 'n2', title: 'Bring your lab gowns on Monday', audience: 'Science 8', author: 'Mr. Dela Cruz', date: 'Oct 1' },
  { id: 'n3', title: 'Library closes early on Friday', audience: 'All students', author: 'Admin Office', date: 'Sep 29' },
]

export const mySubjects: Subject[] = [
  { code: 'MATH8', name: 'Mathematics 8', teacher: 'Ms. Reyes', section: 'Grade 8 - Mabini', progress: 72 },
  { code: 'SCI8', name: 'Science 8', teacher: 'Mr. Dela Cruz', section: 'Grade 8 - Mabini', progress: 55 },
  { code: 'ENG8', name: 'English 8', teacher: 'Mrs. Lim', section: 'Grade 8 - Mabini', progress: 80 },
  { code: 'FIL8', name: 'Filipino 8', teacher: 'Mr. Cruz', section: 'Grade 8 - Mabini', progress: 40 },
]

export const recentLessons: Lesson[] = [
  { id: 'l1', title: 'Linear equations in two variables', subject: 'Mathematics 8', date: 'Oct 2' },
  { id: 'l2', title: 'Chemical vs. physical change', subject: 'Science 8', date: 'Oct 1' },
  { id: 'l3', title: 'Writing a persuasive essay', subject: 'English 8', date: 'Sep 30' },
]

export const upcomingTasks: Task[] = [
  { id: 't1', title: 'Problem Set 4', subject: 'Mathematics 8', due: 'Oct 6', kind: 'Assignment', status: 'Not submitted' },
  { id: 't2', title: 'Lab Report 2', subject: 'Science 8', due: 'Oct 8', kind: 'Activity', status: 'Submitted' },
  { id: 't3', title: 'Quiz 3', subject: 'English 8', due: 'Oct 9', kind: 'Quiz', status: 'Not submitted' },
]

export const currentGrades: GradeRow[] = [
  { subject: 'Mathematics 8', assessment: 'Quiz 2', score: 18, max: 20 },
  { subject: 'Science 8', assessment: 'Activity 1', score: 42, max: 50 },
  { subject: 'English 8', assessment: 'Essay 1', score: 27, max: 30 },
]

export const notifications = [
  { id: 'x1', text: 'Your Science 8 Activity 1 score was published', time: '2 hours ago' },
  { id: 'x2', text: 'Problem Set 4 is due in 3 days', time: 'Today' },
]
