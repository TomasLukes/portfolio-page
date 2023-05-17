import ProjectCardLg from "./ProjectCardLg"
import ProjectCardSm from "./ProjectCardSm"

export default function Projects() {
  return (
    /* Projects */
    <section id="projects" className="pt-12 md:pt-24 px-8">
      {/* Projects container */}
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-4xl font-bold pb-3 md:pb-6">
          Projects
        </h2>
        <p className="md:w-3/5 text-justify pb-6 md:pb-12">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, asperiores perferendis pariatur 
          itaque praesentium dolores fugit corrupti soluta tempore voluptatum perspiciatis neque enim repellendus, 
          est commodi rem maxime corporis? Odit!
        </p>

        <ProjectCardLg 
          name={'Triviathon'}
          description={'Description 1'}
          img={'triviathon-screenshot-desktop.png'}
          url={'https://triviathon.tomaslukes.com/'}
        />

        <h3 className="text-xl md:text-2xl font-semibold pt-6 md:pt-12 pb-3 md:pb-6">
          Scrimba solo projects
        </h3>
        <p className="md:w-3/5 text-justify pb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, asperiores perferendis pariatur 
          itaque praesentium dolores fugit corrupti soluta tempore voluptatum perspiciatis neque enim repellendus, 
          est commodi rem maxime corporis? Odit!
        </p>
        {/* Scrimba projects cards container */}
        <div className="flex flex-col gap-6 md:gap-8
          md:flex-row">
          {/* Scrimba project cards */}
          <ProjectCardSm 
            name={'Triviathon'}
            description={'Description 1'}
            img={'triviathon-screenshot-desktop.PNG'}
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