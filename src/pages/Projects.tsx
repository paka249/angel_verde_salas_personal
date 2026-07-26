import { projects } from '../data/projects'
import Card from '../components/Card'

function Projects() {
  return (
    <div>
      <h1 className="font-heading text-2xl font-semibold text-text">Projects</h1>
      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <Card
            key={project.id}
            title={project.name}
            description={project.description}
            url={project.url}
            tags={project.tags}
          />
        ))}
      </div>
    </div>
  )
}

export default Projects
