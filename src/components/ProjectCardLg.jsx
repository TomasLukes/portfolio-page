export default function ProjectCardLg({ name, description, img, url }) {
  return (
    <a href={`${url}`}
      className="flex flex-col items-center bg-neutral-900 border border-gray-700 rounded-lg shadow 
      md:flex-row md:max-w-xl hover:bg-gray-700"
    >
      <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" 
        src={`/assets/images/projects-screenshots/${img}`} alt="">
      </img>
      <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
          {name}
        </h5>
        <p className="mb-3 font-normal text-gray-400">
          {description}
        </p>
      </div>
    </a>
  )
}