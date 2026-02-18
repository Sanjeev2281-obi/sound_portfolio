import { useState } from "react"
import logo from "../assets/logo.jpeg"

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const menu = [
    { name: "Home", link: "#home" },
    { name: "Works", link: "#projects" },
    { name: "Workshop", link: "#workshop" },
    { name: "Class", link: "#class" },
    { name: "About Us", link: "#about" },
    { name: "Contact", link: "#contact" },
  ]

  return (
    <nav className="w-full bg-white/90 backdrop-blur-md border-b border-gray-200 fixed top-0 z-50">
      <div className="relative max-w-7xl mx-auto px-6 py-4 flex items-center">

        {/* LOGO */}
        <div className="absolute left-0">
          <img
            src={logo}
            alt="Logo"
            className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover cursor-pointer"
          />
        </div>

        {/* DESKTOP MENU */}
        <ul className="ml-auto hidden md:flex gap-10 text-black font-medium">
          {menu.map((item) => (
            <li key={item.name} className="relative group">
              <a
                href={item.link}
                className="cursor-pointer hover:text-gray-500 transition"
              >
                {item.name}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          ))}
        </ul>

        {/* MOBILE TOGGLE */}
        <button
          onClick={() => setOpen(!open)}
          className="ml-auto md:hidden text-3xl"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <ul className="flex flex-col items-center gap-6 py-8 text-lg">
            {menu.map((item) => (
              <li key={item.name}>
                <a
                  href={item.link}
                  onClick={() => setOpen(false)}
                  className="cursor-pointer hover:text-gray-500 transition"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
}
