import { projects } from '../data/projects'
import Carousel from '../components/Carousel'
import ImageWithFallback from '../components/ImageWithFallback'

function Projects() {
  const slides = projects.map((project) => ({
    id: project.id,
    media: (
      <ImageWithFallback
        src={project.image}
        alt={project.name}
        wrapperClassName="aspect-video w-full"
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
        {(project.githubUrl || project.liveUrl) && (
          <div className="mt-4 flex flex-wrap gap-4">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="text-sm text-accent underline"
              >
                View on GitHub
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="text-sm text-accent underline"
              >
                View project
              </a>
            )}
          </div>
        )}
      </>
    ),
  }))

  return (
    <div>
      <h1 className="font-section-title text-4xl font-semibold tracking-tight text-text">Projects</h1>
      <div className="mt-8">
        <Carousel slides={slides} ariaLabel="Projects carousel" autoAdvance={false} />
      </div>
    </div>
  )
}

export default Projects
