
export default function TechStack() {
  return (
    /* TechStack container */
    <div className="w-full">
      {/* TechStack heading */}
      <h3 className="text-xl md:text-2xl font-medium pb-3 md:pb-6">Techstack</h3>
      {/* Icons container */}
      <div className="flex flex-wrap gap-4 text-sm md:text-base">

        {/* HTML badge */}
        <div className="w-28 md:w-36 px-5 py-2 rounded-3xl border border-1 border-neutral-700">
          <div className="mx-auto flex items-center justify-center gap-2">
            {/* HTML img icon */}
            <img className="h-5 w-5 md:w-7 md:h-7 md:w-7 md:h-7" src="/assets/images/icons/tech/html5-colored.svg" alt="" />
            {/* HTML label */}
            <label className="font-medium ">
            HTML  
            </label>
          </div>
        </div>

        {/* CSS Badge */}
        <div className="w-28 md:w-36 px-5 py-2 rounded-3xl border border-1 border-neutral-700">
          <div className="mx-auto flex items-center justify-center gap-2">
            {/* CSS img icon */}
            <img className="h-5 w-5 md:w-7 md:h-7" src="/assets/images/icons/tech/css3-colored.svg" alt="" />
            {/* CSS label */}
            <label className=" justify-self-end text-center font-medium ">
            CSS  
            </label>
          </div>
        </div>        

        {/* Javascript badge desktop */}
        <div className="w-28 md:w-36 px-5 py-2 rounded-3xl border border-1 border-neutral-700">
          <div className="mx-auto flex items-center justify-center gap-3">
            {/* Javascript img icon */}
            <img className="h-5 w-5 md:w-6 md:h-6" src="/assets/images/icons/tech/javascript-colored.svg" alt="" />
            {/* Javascript label desktop */}
            <label className="justify-self-end text-center font-medium ">
            JS
            </label>
          </div>
        </div>

        {/* React badge */}
        <div className="w-28 md:w-36 px-5 py-2 rounded-3xl border border-1 border-neutral-700">
          <div className="mx-auto flex items-center justify-center gap-2">
            {/* React img icon */}
            <img className="h-5 w-5 md:w-7 md:h-7" src="/assets/images/icons/tech/react-colored.svg" alt="" />
            {/* React label */}
            <label className=" justify-self-end text-center font-medium ">
            React   
            </label>
          </div>
        </div>

        {/* Sass badge */}
        <div className="w-28 md:w-36 px-5 py-2 rounded-3xl border border-1 border-neutral-700">
          <div className="mx-auto flex items-center justify-center gap-2">
            {/* Sass img icon */}
            <img className="h-5 w-5 md:w-7 md:h-7" src="/assets/images/icons/tech/sass-colored.svg" alt="" />
            {/* Sass label */}
            <label className=" justify-self-end text-center font-medium ">
            Sass   
            </label>
          </div>
        </div>

        {/* Tailwind badge */}
        <div className="w-28 md:w-36 px-3 md:px-5 py-2 rounded-3xl border border-1 border-neutral-700">
          <div className="mx-auto flex items-center justify-center gap-2">
            {/* Tailwind img icon */}
            <img className="h-5 w-5 md:w-7 md:h-7" src="/assets/images/icons/tech/tailwindcss-colored.svg" alt="" />
            {/* Tailwind label */}
            <label className="justify-self-end text-center font-medium ">
            Tailwind  
            </label>
          </div>
        </div>

        {/* Material UI badge */}
        <div className="w-28 md:w-36 px-5 py-2 rounded-3xl border border-1 border-neutral-700">
          <div className="mx-auto flex items-center justify-center gap-2">
            {/* MUI img icon */}
            <img className="h-5 w-5 md:w-7 md:h-7" src="/assets/images/icons/tech/materialui-colored.svg" alt="" />
            {/* MUI label */}
            <label className=" justify-self-end text-center font-medium ">
            MUI
            </label>
          </div>
        </div>        

        {/* Git badge */}
        <div className="w-28 md:w-36 px-5 py-2 rounded-3xl border border-1 border-neutral-700">
          <div className="mx-auto flex items-center justify-center gap-2">
            {/* Git img icon */}
            <img className="h-5 w-5 md:w-7 md:h-7" src="/assets/images/icons/tech/git-colored.svg" alt="" />
            {/* Git label */}
            <label className=" justify-self-end text-center font-medium ">
            Git
            </label>
          </div>
        </div>

        {/* Vite Badge */}
        <div className="w-28 md:w-36 px-5 py-2 rounded-3xl border border-1 border-neutral-700">
          <div className="mx-auto flex items-center justify-center gap-2">
            {/* Vite img icon */}
            <img className="h-5 w-5 md:w-7 md:h-7" src="/assets/images/icons/tech/vite-colored.svg" alt="" />
            {/* Vite label */}
            <label className=" justify-self-end text-center font-medium ">
            Vite
            </label>
          </div>
        </div>        

        {/* Figma badge */}
        <div className="w-28 md:w-36 px-5 py-2 rounded-3xl border border-1 border-neutral-700">
          <div className="mx-auto flex items-center justify-center gap-2">
            {/* Figma img icon */}
            <img className="h-5 w-5 md:w-7 md:h-7 md:w-7 md:h-7" src="/assets/images/icons/tech/figma-colored.svg" alt="" />
            {/* Figma label */}
            <label className=" justify-self-end text-center font-medium ">
            Figma  
            </label>
          </div>
        </div>        

      </div>
    </div>
  )
}