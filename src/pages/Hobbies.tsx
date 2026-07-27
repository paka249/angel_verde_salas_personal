import Carousel from '../components/Carousel'
import SectionNav from '../components/SectionNav'
import { hobbyImages } from '../data/hobbies'

interface HobbySection {
  id: string
  heading: string
  paragraph: string
}

const SECTIONS: HobbySection[] = [
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

function Hobbies() {
  const slides = hobbyImages.map((image) => ({
    id: image.src,
    media: <img src={image.src} alt={image.alt} className="aspect-video w-full object-cover" />,
  }))

  return (
    <div className="space-y-8">
      <div className="rounded-2xl border border-muted/20 bg-surface p-8 shadow-sm md:p-10">
        <h1 className="font-heading text-2xl font-semibold text-text">Hobbies</h1>
        <p className="mt-6 max-w-xl text-text">
          Replace this placeholder with whatever you want to share here — hobbies,
          interests, side projects that don't fit elsewhere.
        </p>
      </div>

      <SectionNav
        items={SECTIONS.map((section) => ({ id: section.id, label: section.heading }))}
      />

      <Carousel slides={slides} ariaLabel="Photo carousel" />

      {SECTIONS.map((section) => (
        <section
          key={section.id}
          id={section.id}
          className="scroll-mt-20 rounded-2xl border border-muted/20 bg-surface p-8 shadow-sm md:p-10"
        >
          <h2 className="font-heading text-xl font-semibold text-text">{section.heading}</h2>
          <p className="mt-4 text-text">{section.paragraph}</p>
        </section>
      ))}
    </div>
  )
}

export default Hobbies
