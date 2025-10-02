import { useState } from "react"
import { FaBars, FaTimes } from "react-icons/fa"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const handleScroll = (id: string) => {
    const section = document.getElementById(id)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
    setIsOpen(false) 
  }

  return (
    <header className="sticky top-0 bg-white shadow-md z-50">
      <nav className="max-w-6xl mx-auto flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold text-blue-900">Guilherme Henry</h1>

        {/* Menu Desktop */}
        <ul className="hidden md:flex gap-6 text-gray-700">
          <li><button onClick={() => handleScroll("home")} className="hover:text-blue-900">Home</button></li>
          <li><button onClick={() => handleScroll("about")} className="hover:text-blue-900">About</button></li>
          <li><button onClick={() => handleScroll("skills")} className="hover:text-blue-900">Skills</button></li>
          <li><button onClick={() => handleScroll("projects")} className="hover:text-blue-900">Projects</button></li>
          <li><button onClick={() => handleScroll("contact")} className="hover:text-blue-900">Contact</button></li>
        </ul>

        <button
          className="md:hidden text-2xl text-blue-900"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {isOpen && (
        <ul className="md:hidden flex flex-col items-center gap-6 py-6 bg-white shadow-md text-gray-700">
          <li><button onClick={() => handleScroll("home")} className="hover:text-blue-900">Home</button></li>
          <li><button onClick={() => handleScroll("about")} className="hover:text-blue-900">About</button></li>
          <li><button onClick={() => handleScroll("skills")} className="hover:text-blue-900">Skills</button></li>
          <li><button onClick={() => handleScroll("projects")} className="hover:text-blue-900">Projects</button></li>
          <li><button onClick={() => handleScroll("contact")} className="hover:text-blue-900">Contact</button></li>
        </ul>
      )}
    </header>
  )
}
