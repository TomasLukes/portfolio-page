export default function Contacts() {
  return (
    /* Contacts */
    <section id="contacts" className="pt-12 pb-16 px-8" >
      {/* Contacts container */}
      <div className="container mx-auto">
      <h2 className="text-2xl md:text-4xl text-center font-bold pb-4">Kontakt</h2>
        <form action="" className="grid grid-cols-1 gap-2 md:w-3/5 mx-auto">
          {/* Inputs group */}
          <div className="flex flex-row gap-2">
            {/* Name input */}
            <input type='text' name="name" placeholder="Jméno" className="placeholder:italic placeholder:text-slate-400 block
             bg-neutral-50 w-full border border-neutral-800 rounded-md py-2 pl-3 pr-3 shadow-sm 
             focus:outline-none focus:border-yello-500 focus:ring-yellow-500 focus:ring-1 sm:text-sm" 
            />
            {/* Email input */}
            <input type='email' name="email" placeholder="E-mail" className="placeholder:italic placeholder:text-slate-400 block
             bg-neutral-50 w-full border border-neutral-800 rounded-md py-2 pl-3 pr-3 shadow-sm 
             focus:outline-none focus:border-yello-500 focus:ring-yellow-500 focus:ring-1 sm:text-sm" 
            />
          </div>
          {/* Message textarea */}
          <div>
            <textarea name="message" placeholder="Zpráva" className="placeholder:italic placeholder:text-slate-400 block
            bg-neutral-50 w-full border border-neutral-800 rounded-md h-32 resize-none py-2 pl-3 pr-3 shadow-sm 
              focus:outline-none focus:border-yello-500 focus:ring-yellow-500 focus:ring-1 sm:text-sm" 
            >
            </textarea>
          </div>
          {/* Submit button */}
          <button className="mt-4 px-6 py-3 bg-neutral-800 text-neutral-100">
            Odeslat
          </button>
        </form>
      </div>
    </section>
  )
}