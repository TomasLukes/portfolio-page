
export default function TechStack() {
  return (
    /* TechStack container */
    <div className="w-full">
      {/* TechStack heading */}
      <h3 className="text-xl md:text-2xl font-medium pb-3 md:pb-6">Techstack</h3>
      {/* Icons container */}
      <ul className="flex flex-wrap gap-4 text-sm md:text-base">

        {/* HTML badge */}
        <li className="w-28 md:w-36 px-5 py-2 rounded-3xl border border-1 border-neutral-700">
          <div className="mx-auto flex items-center justify-center gap-2">
            {/* HTML img icon */}
            <img className="h-5 w-5 md:w-7 md:h-7" src="/assets/images/icons/tech/html5-colored.svg" alt="" />
            {/* HTML label */}
            <label className="font-medium ">
            HTML  
            </label>
          </div>
        </li>

        {/* CSS Badge */}
        <li className="w-28 md:w-36 px-5 py-2 rounded-3xl border border-1 border-neutral-700">
          <div className="mx-auto flex items-center justify-center gap-2">
            {/* CSS img icon */}
            <img className="h-5 w-5 md:w-7 md:h-7" src="/assets/images/icons/tech/css3-colored.svg" alt="" />
            {/* CSS label */}
            <label className=" justify-self-end text-center font-medium ">
            CSS  
            </label>
          </div>
        </li>        

        {/* Javascript badge desktop */}
        <li className="w-28 md:w-36 px-5 py-2 rounded-3xl border border-1 border-neutral-700">
          <div className="mx-auto flex items-center justify-center gap-3">
            {/* Javascript img icon */}
            <img className="h-5 w-5 md:w-6 md:h-6" src="/assets/images/icons/tech/javascript-colored.svg" alt="" />
            {/* Javascript label desktop */}
            <label className="justify-self-end text-center font-medium ">
            JS
            </label>
          </div>
        </li>

        {/* React badge */}
        <li className="w-28 md:w-36 px-5 py-2 rounded-3xl border border-1 border-neutral-700">
          <div className="mx-auto flex items-center justify-center gap-2">
            {/* React img icon */}
            <img className="h-5 w-5 md:w-7 md:h-7" src="/assets/images/icons/tech/react-colored.svg" alt="" />
            {/* React label */}
            <label className=" justify-self-end text-center font-medium ">
            React   
            </label>
          </div>
        </li>

        {/* Sass badge */}
        <li className="w-28 md:w-36 px-5 py-2 rounded-3xl border border-1 border-neutral-700">
          <div className="mx-auto flex items-center justify-center gap-2">
            {/* Sass img icon */}
            <img className="h-5 w-5 md:w-7 md:h-7" src="/assets/images/icons/tech/sass-colored.svg" alt="" />
            {/* Sass label */}
            <label className=" justify-self-end text-center font-medium ">
            Sass   
            </label>
          </div>
        </li>

        {/* Tailwind badge */}
        <li className="w-28 md:w-36 px-3 md:px-5 py-2 rounded-3xl border border-1 border-neutral-700">
          <div className="mx-auto flex items-center justify-center gap-2">
            {/* Tailwind img icon */}
            <img className="h-5 w-5 md:w-7 md:h-7" src="/assets/images/icons/tech/tailwindcss-colored.svg" alt="" />
            {/* Tailwind label */}
            <label className="justify-self-end text-center font-medium ">
            Tailwind  
            </label>
          </div>
        </li>

        {/* Material UI badge */}
        <li className="w-28 md:w-36 px-5 py-2 rounded-3xl border border-1 border-neutral-700">
          <div className="mx-auto flex items-center justify-center gap-2">
            {/* MUI img icon */}
            <img className="h-5 w-5 md:w-7 md:h-7" src="/assets/images/icons/tech/materialui-colored.svg" alt="" />
            {/* MUI label */}
            <label className=" justify-self-end text-center font-medium ">
            MUI
            </label>
          </div>
        </li>        

        {/* Git badge */}
        <li className="w-28 md:w-36 px-5 py-2 rounded-3xl border border-1 border-neutral-700">
          <div className="mx-auto flex items-center justify-center gap-2">
            {/* Git img icon */}
            <img className="h-5 w-5 md:w-7 md:h-7" src="/assets/images/icons/tech/git-colored.svg" alt="" />
            {/* Git label */}
            <label className=" justify-self-end text-center font-medium ">
            Git
            </label>
          </div>
        </li>

        {/* Vite Badge */}
        <li className="w-28 md:w-36 px-5 py-2 rounded-3xl border border-1 border-neutral-700">
          <div className="mx-auto flex items-center justify-center gap-2">
            {/* Vite img icon */}
            <img className="h-5 w-5 md:w-7 md:h-7" src="/assets/images/icons/tech/vite-colored.svg" alt="" />
            {/* Vite label */}
            <label className=" justify-self-end text-center font-medium ">
            Vite
            </label>
          </div>
        </li>        

        {/* Figma badge */}
        <li className="w-28 md:w-36 px-5 py-2 rounded-3xl border border-1 border-neutral-700">
          <div className="mx-auto flex items-center justify-center gap-2">
            {/* Figma img icon */}
            <img className="h-5 w-5 md:w-7 md:h-7" src="/assets/images/icons/tech/figma-colored.svg" alt="" />
            {/* Figma label */}
            <label className=" justify-self-end text-center font-medium ">
            Figma  
            </label>
          </div>
        </li>        

      </ul>
    </div>
  )
}