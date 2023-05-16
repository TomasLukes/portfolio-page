import IconsFramed from "./IconsFramed"

export default function Hero() {
  return (
    /* Hero section */
    <section id="hero" className="px-8 md:px-32 py-12">
      {/* Hero container */}
      <div className="container mx-auto flex gap-8">
        {/* Left item */}
        <div className="w-1/2 relative">
          <h1 className="text-3xl md:text-6xl font-bold">Tomáš Lukeš</h1>
          <h3 className="text-lg pb-4">Frontend React developer</h3>
          {/* Social icons */}
          <div className="flex gap-2 pt-1 pb-6 md:py-4 md:gap-6">
            {/* Linkedin logo */}
            <svg className="w-6 md:w-8 fill-neutral-800" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" >
              <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/>
            </svg>
            {/* Github logo */}
            <svg className="w-6 md:w-8 fill-neutral-800" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
              <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/>
            </svg>
          </div>
        </div>
        {/* Right item */}
        <div className="w-1/2">
          {/* Profile photo */}
          <img className="mx-auto w-26 md:w-36 rounded-full object-cover"
            src="/images/profile-photo.jpg" alt="" 
          />
          {/* Blob animation */}
          <div className="container blob-cont">
            <div className="yellow blob"></div>
            <div className="red blob"></div>
            <div className="green blob"></div>
          </div>
        </div>
      </div>

      <p className="container mx-auto mdw-4/5 md:w-4/5 text-justify">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
            Quod adipisci totam ipsam nisi doloribus vel quis nostrum mollitia ad, 
            dolor eligendi sequi illum esse fugit est quas reiciendis repellendus molestiae.
      </p>

      {/* Skills container  */}
      <div className="container mx-auto flex flex-col gap-8 py-12 ">
        {/* Tech stack */}
        <div className="w-full">
            <h3 className="text-xl font-medium pb-2">Tech stack</h3>
            <div className="flex gap-2 items-center justify-center">
              <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/javascript-colored.svg" width="36" height="36" alt="JavaScript" /></a>
              <a href="https://developer.mozilla.org/en-US/docs/Glossary/HTML5" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/html5-colored.svg" width="36" height="36" alt="HTML5" /></a>
              <a href="https://www.w3.org/TR/CSS/#css" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/css3-colored.svg" width="36" height="36" alt="CSS3" /></a>
              <a href="https://reactjs.org/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/react-colored.svg" width="36" height="36" alt="React" /></a>
              <a href="https://sass-lang.com/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/sass-colored.svg" width="36" height="36" alt="Sass" /></a>
              <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer">
              <a src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/tailwindcss-colored.svg" width="36" height="36" alt="Tailwind CSS" />
              </a>
              <a href="https://mui.com/" target="_blank" rel="noreferrer"><img src="https://v4.material-ui.com/static/logo.png" width="36" height="36" alt="Material UI" /></a>           
            </div>
        </div>
        {/* Tooling */}
        <div className="w-full">
            <h3 className="text-xl font-medium pb-2">Tooling</h3>
            <div className="flex gap-2">
            <IconsFramed techName={'HTML'} img={'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/javascript-colored.svg'} />
            <IconsFramed techName={'CSS'} />
            <IconsFramed techName={'JS'} />
            <IconsFramed techName={'React'} />
            </div>
        </div>
      </div>

      <svg className="hidden">
        <filter id='noiseFilter'>
          <feTurbulence 
            type='fractalNoise' 
            baseFrequency='0.6' 
            stitchTiles='stitch'/>
          <feColorMatrix in="colorNoise" type="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0" />
              <feComposite operator="in" in2="SourceGraphic" result="monoNoise"/>
              <feBlend in="SourceGraphic" in2="monoNoise" mode="screen" />
        </filter>
      </svg>
    </section>
  )
}