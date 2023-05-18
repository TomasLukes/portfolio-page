import { useState } from "react"

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  function handleClick() {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  return (
    /* Navbar */
    <nav className="w-full text-xl font-medium">
      {/* Navbar container */}
      <div className="container mx-auto flex items-center justify-end py-6 md:py-9 px-8">
        
        {/*  Logo img
        <div>
          <h1 className="text-xl font-semibold
            md:text-2xl">
          </h1>
        </div> */}
        
        {/* Menu items - desktop */}
        <div className="hidden md:flex space-x-16 text-lg">
          <a href="#about" className="hover:text-neutral-700 drop-shadow-sm">O mně</a>
          <a href="#projects" className="hover:text-neutral-700 drop-shadow-sm">Projekty</a>
          <a href="#contacts" className="hover:text-neutral-700 drop-shadow-sm">Kontakty</a>        
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
      <div className="md:hidden">
        <div id="menu" className={`${!mobileMenuOpen && 'hidden'} absolute flex flex-col gap-4 items-center self-end py-8 mt-10 font-bold rounded-sm
         bg-neutral-200 sm:w-auto sm:self-center left-6 right-6 drop-shadow-md`}>
          <a href="#about" className="hover:text-yellow-500">O mně</a>            
            <span className="w-4/5 mx-auto border border-solid border-b-1 border-gray-400"></span>
          <a href="#projects" className="hover:text-yellow-500">Projekty</a>
            <span className="w-4/5 mx-auto border border-solid border-b-1 border-gray-400"></span>
          <a href="#contacts" className="hover:text-yellow-500">Kontakty</a>
        </div>
      </div>
    </nav>
  )
}