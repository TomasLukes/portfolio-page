
export default function Hero() {
  return (
    /* Hero section */
    <section id="hero" className="">
      {/* Hero container */}
      <div className="container mx-auto flex gap-8 py-16 px-8 ">
        {/* Left item */}
        <div className="w-3/4">
          <h1>Tomáš Lukeš</h1>
          <h3>Frontend React developer</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
            Quod adipisci totam ipsam nisi doloribus vel quis nostrum mollitia ad, 
            dolor eligendi sequi illum esse fugit est quas reiciendis repellendus molestiae.
          </p>
          <a>IN</a>
          <a>GH</a>
        </div>
        {/* Right item */}
        <div className="w-1/4">
          {/* Profile photo */}
          <img className="w-32 rounded-full"
            src="./public/images/placeholder-profile-photo.png" alt="" 
          />
        </div>

      </div>
      {/* Skills container  */}
      <div className="container mx-auto flex flex-col gap-8 py-16 px-8 ">
        {/* Tech stack */}
        <div className="w-full">
            <h3>Tech stack</h3>
            <div>
              <img src="" alt="" />
            </div>
        </div>
        {/* Tooling */}
        <div className="w-full">
            <h3>Tooling</h3>
            <div>
              <img src="" alt="" />
            </div>
        </div>
      </div>

    </section>
  )
}