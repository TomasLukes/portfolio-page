import ProjectCardLg from "./ProjectCardLg"
import ProjectCardSm from "./ProjectCardSm"

export default function Projects() {
  return (
    /* Projects */
    <section id="projects" className="mt-12 md:mt-24 px-8 md:px-16">
      {/* Projects container */}
      <div className="container mx-auto">
        {/* Large projects heading + description */}
        <h2 className="text-2xl md:text-4xl font-bold mb-3 md:mb-6 border-solid border-l-8 pl-2 border-yellow-500">
          Projekty
        </h2>
        <p className="md:w-4/5 lg:w-3/5 text-justify mb-6 md:mb-12 text-neutral-200">
          Během studia technologií potřebných pro web development, jsem se učil převážně pomocí vývoje vlastních projektů.
          Zde sdílím dva mé největší fullstack projekty, které nejvíce odráží moje aktuální schopnosti.
        </p>
        {/* Large projects cards container */}
        <div className="flex flex-col gap-8">
          {/* Lynxes project card */}
          <ProjectCardLg 
            name={'Lynxes'}
            CSS={'Tailwind'}
            description={'Fiktivní e-shop s audiofilními zařízeními. Prototyp stránky je hotov, ve druhé dokončovací fázi plně implementuji Typescript a využiji všechny benefity Next.js a Firebase.'}
            imgHorizontal={'lynxes-horizontal.gif'}
            imgVertical={'lynxes-vertical.gif'}
            url={'https://lynxes.tomaslukes.com/'}
            ghUrl={'https://github.com/TomasLukes/lynxes'}
          />
          {/* Innovoicer project card */}
          <ProjectCardLg 
            name={'Innovoicer'}
            CSS={'Sass'}
            description={'Další projekt, na kterém budu pracovat. Půjde o applikaci, kam si mohou uživatele ukládat své faktury a dále je spravovat.'}
            imgHorizontal={'innovoicer-horizontal.jpg'}
            imgVertical={'innovoicer-vertical.jpg'}
            url={'https://innovoicer.tomaslukes.com/'}
            ghUrl={'https://github.com/TomasLukes/innovoicer'}
          />
        </div>
        {/* Scrimba projects heading + description */}
        <h3 className="text-xl md:text-2xl font-semibold mt-6 md:mt-12 mb-3 md:mb-6 border-solid border-l-8 pl-2 border-yellow-500">
          Scrimba solo projects
        </h3>
        <p className="md:w-4/5 lg:w-3/5 text-justify mb-6 text-neutral-200">
          V rámci kurzu Scrimba Frontend Career Path jsem měl příležitost pracovat na řadě samostatných projektů. 
          Obdržel jsem design ve Figmě, který jsem si upravil a přidal celou řadu vlastních prvků a rozšířil požadovanou funkcionalitu.
        </p>
        {/* Scrimba projects cards container */}
        <div className="flex flex-col lg:flex-row gap-6 md:gap-8">
          {/* Triviathon project card */}
          <ProjectCardSm 
            name={'Triviathon'}
            description={'Kvízová aplikace, ve které si uživatel může navolit sadu otázek z různých oblastí a ověřit své vědomosti. Vytvořeno pomocí React+Tailwind, pro formulář jsou použity komponenty z MUI, bundling ve Vite. Data jsou načítána z OpenTrivia DB API.'}
            img={'triviathon.gif'}
            url={'https://triviathon.tomaslukes.com/'}
            ghUrl={'https://github.com/TomasLukes/scrimba-solo-projects/tree/main/03_triviathon'}
          />
          {/* Tenzies project card */}
          <ProjectCardSm 
            name={'Tenzies'}
            description={'Kostková hra, ve které se hráč snaží co nejrychleji posbírat všechny kostky stejné hodnoty a překonat dosud nejlepší čas. Development ve Vite, React, styling je vanilla CSS s BEM metodikou.'}
            img={'tenzies.gif'}
            url={'https://tenzies.tomaslukes.com/'}
            ghUrl={'https://github.com/TomasLukes/scrimba-solo-projects/tree/main/02_tenzies'}
          />
          {/* Movie Search project card */}
          <ProjectCardSm 
            name={'Movie Search'} 
            description={'Applikace pro vyhledávání a ukládání filmů pro pozdější shlédnutí. Data o filmech jsou načítána z OMDB API. Vývoj ve Vite, React (RR6 pro routing), Sass pro stylování.'}
            img={'movie-search.gif'}
            url={'https://moviesearch.tomaslukes.com/'}
            ghUrl={'https://github.com/TomasLukes/scrimba-solo-projects/tree/main/04_movie-search'}
          />
        </div>
      </div>
    </section>
  )
}