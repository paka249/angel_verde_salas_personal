export interface HobbyImage {
  src: string
  alt: string
}

export const hobbyImages: HobbyImage[] = [
  { src: '/hobbies/placeholder-1.svg', alt: 'Replace with your own photo' },
  { src: '/hobbies/placeholder-2.svg', alt: 'Replace with your own photo' },
  { src: '/hobbies/placeholder-3.svg', alt: 'Replace with your own photo' },
  { src: '/hobbies/placeholder-4.svg', alt: 'Replace with your own photo' },
  { src: '/hobbies/placeholder-5.svg', alt: 'Replace with your own photo' },
  { src: '/hobbies/placeholder-6.svg', alt: 'Replace with your own photo' },
]

export interface HobbySection {
  id: string
  heading: string
  paragraph: string
}

export const hobbySections: HobbySection[] = [
  {
    id: 'hobby-one',
    heading: 'Hobby One',
    paragraph: 'Replace this with a description of this hobby or interest.',
  },
  {
    id: 'hobby-two',
    heading: 'Hobby Two',
    paragraph: 'Replace this with a description of this hobby or interest.',
  },
  {
    id: 'hobby-three',
    heading: 'Hobby Three',
    paragraph: 'Replace this with a description of this hobby or interest.',
  },
]
