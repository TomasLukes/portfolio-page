
export default function Navbar() {
  return (
    /* Navbar */
    <nav className="w-full py-4 text-neutral-100 bg-neutral-900 drop-shadow-md">
      {/* Navbar container */}
      <div className="flex items-center justify-between px-12 ">
        {/* Logo img */}
        <div>
          <h1 className="text-2xl font-semibold">Tomas Lukes</h1>
        </div>
        {/* Menu items - desktop */}
        <div className="hidden md:flex space-x-12">
          <a href="#" className="hover:text-red-500">Domů</a>
          <a href="#" className="hover:text-red-500">O mně</a>
          <a href="#" className="hover:text-red-500">Projekty</a>
          <a href="#" className="hover:text-red-500">Kontakt</a>
        </div>


      </div>
    </nav>
  )
}