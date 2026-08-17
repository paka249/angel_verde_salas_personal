import { motion } from 'framer-motion'
import { homeSections } from '../data/home'

function Home() {
  return (
    <div className="space-y-8">
      <div className="rounded-2xl border border-muted/20 bg-surface p-8 shadow-sm md:p-10">
        <h1 className="font-heading text-3xl font-semibold text-text">Angel Verde-Salas</h1>
        <p className="mt-2 text-lg text-muted">
          Graduate Student in Applied Mathematics at Texas State University
        </p>
      </div>

      {homeSections.map((section) => (
        <motion.section
          key={section.id}
          id={section.id}
          className="scroll-mt-20 flex flex-col gap-6 rounded-2xl border border-muted/20 bg-surface p-8 shadow-sm md:flex-row md:p-10"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <div className="flex-1">
            <h2 className="font-section-title text-3xl font-semibold tracking-tight text-text">
              {section.heading}
            </h2>
            {section.paragraphs.map((paragraph, i) => (
              <p key={i} className="mt-4 text-text">
                {paragraph}
              </p>
            ))}
          </div>
          <motion.img
            src={section.image}
            alt=""
            className="aspect-square w-full rounded-lg border-2 border-muted/40 object-cover md:w-48 md:shrink-0"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, delay: 0.1, ease: 'easeOut' }}
            whileHover={{ scale: 1.03, transition: { duration: 0.2, ease: 'easeOut' } }}
          />
        </motion.section>
      ))}
    </div>
  )
}

export default Home
