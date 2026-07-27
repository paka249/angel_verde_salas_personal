export interface Project {
  id: string
  name: string
  description: string
  image: string
  url?: string
  tags?: string[]
}

export const projects: Project[] = [
  {
    id: 'project-one',
    name: 'Project One',
    description: 'A short description of this project goes here.',
    image: '/projects/placeholder-1.svg',
    url: 'https://example.com',
    tags: ['TypeScript', 'React'],
  },
  {
    id: 'project-two',
    name: 'Project Two',
    description: 'A short description of this project goes here.',
    image: '/projects/placeholder-2.svg',
    tags: ['Python'],
  },
]
