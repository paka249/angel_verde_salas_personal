import type { ReactNode } from 'react'

interface SectionHeadingProps {
  children: ReactNode
}

function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide text-muted">
      {children}
    </h2>
  )
}

export default SectionHeading
