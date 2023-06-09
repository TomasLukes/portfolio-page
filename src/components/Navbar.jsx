import { useState } from "react"

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  function handleClick() {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  return (
    /* Navbar */
    <nav className="text-xl font-medium">
      {/* Navbar container */}
      <div className="container mx-auto flex items-center justify-end py-6 md:py-9 px-8 md:px-16">
        {/* Menu items - desktop */}
        <div className="hidden lg:flex space-x-16 text-lg md:text-xl">
          <a href="#about" className="hover:text-yellow-500 drop-shadow-sm">O mně</a>
          <a href="#projects" className="hover:text-yellow-500 drop-shadow-sm">Projekty</a>
          <a href="#contacts" className="hover:text-yellow-500 drop-shadow-sm">Kontakty</a>        
        </div>
        <button 
          id="menu-btn" aria-label="Mobile hamburger icon" 
          type="button"
          className="flex items-center p-3 md:p-6"
          onClick={handleClick}>
          {/* Hamburger icon */}
          <div 
            className={`${mobileMenuOpen ? 'open' : ''} block hamburger lg:hidden focus:outline-none`}
          >
            <span className="hamburger-top"></span>
            <span className="hamburger-middle"></span>
            <span className="hamburger-bottom"></span>
          </div>
        </button>
      </div>

      {/* Mobile + tablet menu */}
      <div className="lg:hidden">
        <div id="menu" className={`${!mobileMenuOpen && 'hidden'} absolute flex flex-col gap-4 items-center self-end py-8 font-bold rounded-lg
         bg-neutral-200 text-neutral-900 sm:w-auto sm:self-center left-6 right-6 drop-shadow-md mx-auto md:mx-8`}>
          <a href="#about">O mně</a>            
            <span className="w-4/5 mx-auto border border-solid border-b-1 border-gray-300 drop-shadow-sm"></span>
          <a href="#projects">Projekty</a>
            <span className="w-4/5 mx-auto border border-solid border-b-1 border-gray-300 drop-shadow-sm"></span>
          <a href="#contacts">Kontakty</a>
        </div>
      </div>
    </nav>
  )
}