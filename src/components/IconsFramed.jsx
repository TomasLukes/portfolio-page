export default function IconsFramed({ techName, img }) {
  return (
    /* Icon container */
    <div className="flex flex-col items-center w-14 h-14 bg-amber-300">
      <img src={`${img}`} alt="" className="w-6" />
      <label className="text-sm">{techName}</label>
    </div>
  )
}