import Timeline from "./Timeline"

export default function About() {
  return (
    /* About section */
    <section id="about" className="pt-12 md:pt-24 px-8">
      {/* About container */}
      <div className="container flex mx-auto">
        <div className="w-2/3">
          <h2 className="text-2xl md:text-4xl font-bold pb-3 md:pb-6">O mně</h2>
          <p className="md:w-3/5 text-neutral-200 pb-2 md:pb-4">
            Již přes rok se intenzivně věnuji webovému vývoji. Mám zkušenosti s celou řadou technologií, včetně Reactu, Tailwindu, Sassu a mnoha dalších. 
            V současné době se učím Next.js a Typescript při práci na nejnovějším projektu.
          </p>
          <p className="md:w-3/5 text-neutral-200 pb-8 md:pb-12">
            Umím všechno? Zdaleka ne. Ale mám za sebou více než 10 let na různých technických pozicích a pokud hledáte posilu do svého týmu s potenciálem rychlého růstu a schopnosti 
            neustále se učit, neváhejte mě kontaktovat.
          </p>
        </div>
        <div className="w-1/3 mt-16">
          <Timeline />
        </div>
      </div>
    </section> 
  )
}