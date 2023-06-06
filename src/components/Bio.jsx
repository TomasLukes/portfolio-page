import Timeline from "./Timeline"

export default function Bio() {
  return (
    /* Bio container */
    <div className="">
      <h5 className="text-lg md:text-xl font-semibold mb-1 md:mb-3">
        Další informace
      </h5>
      {/* About container */}
      <div className="md:w-3/5 grid grid-cols-2 gap-4">
        <div className="flex flex-col">
          <p>Jméno:</p>
          <p className="font-medium">Tomáš Lukeš</p>
        </div>
        <div className="flex flex-col">
          <p>Věk:</p>
          <p className="font-medium">29 let</p>
        </div>
        <div className="flex flex-col">
          <p>Lokalita:</p>
          <p className="font-medium">Praha, ČR</p>
        </div>
        <div className="flex flex-col">
          <p>Možný nástup:</p>
          <p className="font-medium">srpen/2023</p>
        </div>
        <div className="flex flex-col">
          <p>Anglický jazyk:</p>
          <p className="font-medium">Pokročilý, včetně technikých termínů</p>
        </div>
      </div>
    </div> 
  )
}