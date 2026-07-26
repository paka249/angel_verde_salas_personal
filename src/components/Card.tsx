interface CardProps {
  title: string
  description: string
  url?: string
  tags?: string[]
}

function Card({ title, description, url, tags }: CardProps) {
  const className =
    'block rounded-lg border border-muted/20 bg-surface p-6 transition-colors hover:border-accent/40'

  const content = (
    <>
      <h3 className="font-heading text-lg font-semibold text-text">{title}</h3>
      <p className="mt-2 text-sm text-muted">{description}</p>
      {tags && tags.length > 0 && (
        <ul className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <li
              key={tag}
              className="font-caption rounded-full bg-bg px-3 py-1 text-xs font-medium text-muted"
            >
              {tag}
            </li>
          ))}
        </ul>
      )}
    </>
  )

  if (url) {
    return (
      <a href={url} target="_blank" rel="noreferrer" className={className}>
        {content}
      </a>
    )
  }

  return <div className={className}>{content}</div>
}

export default Card
