import { motion } from 'framer-motion'
import Carousel from '../components/Carousel'
import { hobbyImages, hobbySections } from '../data/hobbies'

function Hobbies() {
  const slides = hobbyImages.map((image) => ({
    id: image.src,
    media: <img src={image.src} alt={image.alt} className="aspect-video w-full object-cover" />,
  }))

  return (
    <div className="space-y-8">
      <div className="rounded-2xl border-2 border-depth/40 bg-surface p-8 shadow-[0_1px_2px_rgba(15,23,42,0.04),0_18px_34px_-12px_rgba(100,128,158,0.32)] md:p-10">
        <h1 className="font-heading text-2xl font-semibold text-text">Hobbies</h1>
        <p className="mt-6 max-w-xl text-text">
          Replace this placeholder with whatever you want to share here — hobbies,
          interests, side projects that don't fit elsewhere.
        </p>
      </div>

      <Carousel slides={slides} ariaLabel="Photo carousel" />

      {hobbySections.map((section) => (
        <motion.section
          key={section.id}
          id={section.id}
          className="scroll-mt-20 rounded-2xl border-2 border-depth/40 bg-surface p-8 shadow-[0_1px_2px_rgba(15,23,42,0.04),0_18px_34px_-12px_rgba(100,128,158,0.32)] md:p-10"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <h2 className="font-section-title text-3xl font-semibold tracking-tight text-text">
            {section.heading}
          </h2>
          <p className="mt-4 text-text">{section.paragraph}</p>
        </motion.section>
      ))}
    </div>
  )
}

export default Hobbies
