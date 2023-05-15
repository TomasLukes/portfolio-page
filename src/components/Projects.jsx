import ProjectCardLg from "./ProjectCardLg"
import ProjectCardSm from "./ProjectCardSm"

export default function Projects() {
  return (
    /* Projects */
    <section id="projects" >
      {/* Projects container */}
      <div className="container mx-auto py-16 px-8 ">
        <h2 className="text-2xl md:text-3xl font-bold">
          Projects
        </h2>
        <ProjectCardLg />
        <h3 className="text-lg md:text-lg font-semibold">
          Scrimba solo projects
        </h3>
        {/* Scrimba projects cards container */}
        <div>
          {/* Scrimba project cards */}
          <ProjectCardSm />
          <ProjectCardSm />
          <ProjectCardSm />
        </div>
      </div>
    </section>
  )
}