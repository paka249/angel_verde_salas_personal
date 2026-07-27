interface SectionNavItem {
  id: string
  label: string
}

interface SectionNavProps {
  items: SectionNavItem[]
}

function SectionNav({ items }: SectionNavProps) {
  return (
    <nav className="flex flex-wrap gap-2" aria-label="Jump to section">
      {items.map((item) => (
        <a
          key={item.id}
          href={`#${item.id}`}
          className="rounded-full border border-muted/20 bg-surface px-3 py-1 text-sm text-muted transition-colors hover:border-accent/40 hover:text-accent"
        >
          {item.label}
        </a>
      ))}
    </nav>
  )
}

export default SectionNav
