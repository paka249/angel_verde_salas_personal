export type ResumeEntryType = 'experience' | 'education' | 'skill'

export interface ResumeEntry {
  id: string
  type: ResumeEntryType
  title: string
  subtitle?: string
  dates?: string
  summary?: string
}

export const resumeEntries: ResumeEntry[] = [
  {
    id: 'exp-one',
    type: 'experience',
    title: 'Job Title',
    subtitle: 'Company Name',
    dates: '20XX — Present',
    summary: 'A short summary of this role goes here.',
  },
  {
    id: 'edu-one',
    type: 'education',
    title: 'Degree Name',
    subtitle: 'School Name',
    dates: '20XX — 20XX',
  },
  {
    id: 'skill-one',
    type: 'skill',
    title: 'Skill Category',
    summary: 'List of skills goes here.',
  },
]
