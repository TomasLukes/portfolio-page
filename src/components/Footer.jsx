
export default function Footer() {
  return (
    /* Footer */
    <footer className="absolute bottom-0 w-full py-4 text-neutral-100 bg-neutral-900">
      {/* Footer container */}
      <div className="flex items-center justify-between px-12">
        {/* Social icons */}
        <div className="flex">
          <p>IN</p>
          <p>GH</p>
        </div>
        {/* Copyright */}
        <p>©2023 by Tomáš Lukeš</p>
      </div>
    </footer>
  )
}