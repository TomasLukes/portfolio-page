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
            description={'Trivia quiz application that fetches questions from the Open Trivia Database and allows users to test their knowledge across various categories. Created with React, Vite, Tailwind CSS for styling, and Material UI components for form.'}
            img={'triviathon-screenshot-desktop.png'}
            url={'https://triviathon.tomaslukes.com/'}
            ghUrl={'https://github.com/TomasLukes/scrimba-solo-projects/tree/main/03_triviathon'}
          />
          <ProjectCardSm 
            name={'Movie Search'} 
            description={'Movie search application utilizing the OMDB API to search movie informations. Built with vanilla CSS and JavaScript. Users can add or remove movies to a watchlist, which is stored in localStorage.'}
            img={'moviesearch-screenshot-desktop.png'}
            url={'https://moviesearch.tomaslukes.com/'}
            ghUrl={'https://github.com/TomasLukes/scrimba-solo-projects/tree/main/04_movie-search'}
          />
          <ProjectCardSm 
            name={'Tenzies'} 
            description={'Dice game application where players compete to achieve the highest score by strategically rolling and holding dice. Developed using React, Vite, and Sass for styling. Users time is tracked, and they can compete against their personal best record.'}
            img={'tenzies-screenshot-desktop.png'}
            url={'https://tenzies.tomaslukes.com/'}
            ghUrl={'https://github.com/TomasLukes/scrimba-solo-projects/tree/main/02_tenzies'}
          />
        </div>
      </div>
    </section>
  )
}