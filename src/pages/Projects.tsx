import { projects } from '../data/projects'
import Carousel from '../components/Carousel'

function Projects() {
  const slides = projects.map((project) => ({
    id: project.id,
    media: (
      <img
        src={project.image}
        alt={project.name}
        className="aspect-video w-full object-cover"
      />
    ),
    caption: (
      <>
        <h3 className="font-heading text-lg font-semibold text-text">{project.name}</h3>
        <p className="mt-2 text-sm text-muted">{project.description}</p>
        {project.tags && project.tags.length > 0 && (
          <ul className="mt-4 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <li
                key={tag}
                className="font-caption rounded-full bg-bg px-3 py-1 text-xs font-medium text-muted"
              >
                {tag}
              </li>
            ))}
          </ul>
        )}
        {project.url && (
          <a
            href={project.url}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-block text-sm text-accent underline"
          >
            View project
          </a>
        )}
      </>
    ),
  }))

  return (
    <div>
      <h1 className="font-heading text-2xl font-semibold text-text">Projects</h1>
      <div className="mt-8">
        <Carousel slides={slides} ariaLabel="Projects carousel" autoAdvance={false} />
      </div>
    </div>
  )
}

export default Projects
