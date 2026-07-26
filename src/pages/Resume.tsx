import { resumeEntries, type ResumeEntryType } from '../data/resume'
import SectionHeading from '../components/SectionHeading'

const SECTIONS: { type: ResumeEntryType; label: string }[] = [
  { type: 'experience', label: 'Experience' },
  { type: 'education', label: 'Education' },
  { type: 'skill', label: 'Skills' },
]

function Resume() {
  return (
    <div>
      <h1 className="text-2xl font-semibold text-text">Resume</h1>
      <div className="mt-8 space-y-10">
        {SECTIONS.map((section) => {
          const entries = resumeEntries.filter((entry) => entry.type === section.type)
          if (entries.length === 0) return null

          return (
            <section key={section.type}>
              <SectionHeading>{section.label}</SectionHeading>
              <div className="space-y-6">
                {entries.map((entry) => (
                  <div key={entry.id}>
                    <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                      <h3 className="font-medium text-text">{entry.title}</h3>
                      {entry.dates && (
                        <span className="text-sm text-muted">{entry.dates}</span>
                      )}
                    </div>
                    {entry.subtitle && (
                      <div className="text-sm text-muted">{entry.subtitle}</div>
                    )}
                    {entry.summary && (
                      <p className="mt-1 text-sm text-text">{entry.summary}</p>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )
        })}
      </div>
    </div>
  )
}

export default Resume
