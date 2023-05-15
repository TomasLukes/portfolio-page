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
        <ProjectCardLg 
          name={'Triviathon'}
          description={'Description 1'}
          img={'triviathon-screenshot-desktop.png'}
          url={'https://triviathon.tomaslukes.com/'}
        />
        <h3 className="text-lg md:text-lg font-semibold">
          Scrimba solo projects
        </h3>
        {/* Scrimba projects cards container */}
        <div className="flex flex-col gap-6
          md:flex-row">
          {/* Scrimba project cards */}
          <ProjectCardSm 
            name={'Triviathon'}
            description={'Description 1'}
            img={'triviathon-screenshot-desktop.png'}
            url={'https://triviathon.tomaslukes.com/'}
          />
          <ProjectCardSm 
            name={'Movie Search'} 
            description={'Description 1'}
            img={'moviesearch-screenshot-desktop.png'}
            url={'https://moviesearch.tomaslukes.com/'}
          />
          <ProjectCardSm 
            name={'Tenzies'} 
            description={'Description 1'}
            img={'tenzies-screenshot-desktop.png'}
            url={'https://tenzies.tomaslukes.com/'}
          />
        </div>
      </div>
    </section>
  )
}