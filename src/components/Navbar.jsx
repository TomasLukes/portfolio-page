import { useState } from "react"

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)


  function handleClick() {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  return (
    /* Navbar */
    <nav className="w-full py-4 text-neutral-100 bg-neutral-900 drop-shadow-md">
      {/* Navbar container */}
      <div className="flex items-center justify-between px-12 ">
        {/* Logo img */}
        <div>
          <h1 className="text-xl font-semibold
            md:text-2xl">
            {`<TomášLukeš/>`}
          </h1>
        </div>
        {/* Menu items - desktop */}
        <div className="hidden md:flex space-x-12 font-semibold ">
          <a href="#" className="hover:text-yellow-500 drop-shadow-md">Domů</a>
          <a href="#" className="hover:text-yellow-500 drop-shadow-md">O mně</a>
          <a href="#" className="hover:text-yellow-500 drop-shadow-md">Projekty</a>
          <a href="#" className="hover:text-yellow-500 drop-shadow-md">Kontakty</a>        
        </div>

        {/* Hamburger icon */}
        <button id="menu-btn" onClick={handleClick}
          className="hamburger
          md:hidden focus:outline-none">
          <span className="hamburger-top"></span>
          <span className="hamburger-middle"></span>
          <span className="hamburger-bottom"></span>
        </button>

      </div>

      {/* Mobile menu */}
      <div className="md:hidden text-neutral-900">
        <div id="menu" className={`${!mobileMenuOpen && 'hidden'} absolute flex flex-col gap-4 items-center self-end py-8 mt-10 font-bold rounded-sm
         bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md`}>
          <a href="#" className="hover:text-yellow-500">Domů</a>
            <span className="w-4/5 mx-auto border border-solid border-b-1 border-gray-200"></span>
          <a href="#" className="hover:text-yellow-500">O mně</a>            
            <span className="w-4/5 mx-auto border border-solid border-b-1 border-gray-200"></span>
          <a href="#" className="hover:text-yellow-500">Projekty</a>
            <span className="w-4/5 mx-auto border border-solid border-b-1 border-gray-200"></span>
          <a href="#" className="hover:text-yellow-500">Kontakty</a>
        </div>
      </div>
    </nav>
  )
}