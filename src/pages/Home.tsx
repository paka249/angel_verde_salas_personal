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
        <section
          key={section.id}
          id={section.id}
          className="scroll-mt-20 flex flex-col gap-6 rounded-2xl border border-muted/20 bg-surface p-8 shadow-sm md:flex-row md:p-10"
        >
          <div className="flex-1">
            <h2 className="font-heading text-xl font-semibold text-text">{section.heading}</h2>
            {section.paragraphs.map((paragraph, i) => (
              <p key={i} className="mt-4 text-text">
                {paragraph}
              </p>
            ))}
          </div>
          <img
            src={section.image}
            alt=""
            className="aspect-square w-full rounded-lg object-cover md:w-48 md:shrink-0"
          />
        </section>
      ))}
    </div>
  )
}

export default Home
