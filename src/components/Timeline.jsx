export default function Timeline() {
  return (
    /* Timeline */
    <ol id="timeline" className="h-full border-l-4 border-neutral-200 ">

      <li className="pl-8 pb-8 pt-6 relative">
        <img src="/assets/images/icons/jobs/hostynska.png" 
          className="absolute top-6 left-[-2px] w-8 h-8 bg-neutral-100 rounded-full transform -translate-x-1/2" alt="" />
        <h5 className="text-xl font-semibold">Učitel IT</h5>
        <div className="pb-2">
          <span>ZŠ Hostýnská</span><span> • </span><span>09/2019-06/2023</span>
        </div>
        <p className="text-sm md:w-2/5">
          Job description example. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia reprehenderit nulla itaque.
        </p>
      </li>

      <li className="pl-8 pb-8 relative">
      <img src="/assets/images/icons/jobs/CT.png" 
          className="absolute left-[-2px] w-8 h-8 bg-neutral-100 rounded-full transform -translate-x-1/2" alt="" />
        <h5 className="text-xl font-semibold">Koordinátor postprodukce</h5>
        <div className="pb-2">
          <span>Česká televize</span><span> • </span><span>07/2018-07/2020</span>
        </div>
        <p className="text-sm md:w-2/5">
          Job description example. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia reprehenderit nulla itaque.
        </p>
      </li>

      <li className="pl-8 pb-8 relative">
      <img src="/assets/images/icons/jobs/CT.png" 
          className="absolute left-[-2px] w-8 h-8 bg-neutral-100 rounded-full transform -translate-x-1/2" alt="" />
        <h5 className="text-xl font-semibold">Technik zvukové techniky</h5>
        <div className="pb-2">
          <span>Česká televize</span><span> • </span><span>09/2014-06/2018</span>
        </div>
        <p className="text-sm md:w-2/5">
          Job description example. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia reprehenderit nulla itaque.
        </p>
      </li>

      <li className="pl-8 pb-8 relative">
      <img src="/assets/images/icons/jobs/Panska.png" 
          className="absolute left-[-2px] w-8 h-8 bg-neutral-100 rounded-full transform -translate-x-1/2" alt="" />
        <h5 className="text-xl font-semibold">Audiovizuální technika</h5>
        <div className="pb-2">
          <span>SPŠST Panská</span><span> • </span><span>09/2019-06/2013</span>
        </div>
        <p className="text-sm md:w-2/5">
          Job description example. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia reprehenderit nulla itaque.
        </p>
      </li>

    </ol>
  )
}
