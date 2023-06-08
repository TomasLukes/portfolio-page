import Timeline from "./Timeline"
import Bio from "./Bio"

export default function About() {
  return (
    /* About section */
    <section id="about" className="mt-16 md:mt-28 px-8 md:px-16">
      {/* About container */}
      <div className="container flex flex-col md:flex-row mx-auto">
        <div className="md:w-3/5 lg:w-2/3">
          <h2 className="text-2xl md:text-4xl font-bold mb-3 md:mb-6 border-solid border-l-8 pl-2 border-yellow-500">
            O mně
          </h2>
          <p className="md:w-3/5 text-neutral-200 pb-2 md:pb-4">
            Již přes rok se intenzivně věnuji webovému vývoji. Mám zkušenosti s celou řadou technologií, včetně Reactu, Tailwindu, Sassu a mnoha dalších. 
            V současné době se učím Next.js a Typescript při práci na nejnovějším projektu.
          </p>
          <p className="md:w-3/5 text-neutral-200 pb-8 md:pb-12">
            Umím všechno? Zdaleka ne. Ale mám za sebou více než 10 let na různých technických pozicích a pokud hledáte posilu do svého týmu s potenciálem rychlého růstu a schopnosti 
            neustále se učit, neváhejte mě kontaktovat.
          </p>
          <Bio />
        </div>
        <div className="md:w-2/5 lg:w-1/3 mt-16">
          <Timeline />
        </div>
      </div>
    </section> 
  )
}