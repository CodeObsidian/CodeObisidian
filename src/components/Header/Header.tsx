import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { HiX, HiMenu, HiHome, HiInformationCircle, HiAtSymbol } from 'react-icons/hi'

export default function Header() {
  const [expanded, setExpanded] = useState(false)

  return (
    <>
      <div
        className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity md:hidden ${expanded ? 'opacity-100' : 'pointer-events-none opacity-0'}`}
        onClick={() => setExpanded(false)}
        aria-hidden="true"
      />
      <header className="sticky top-0 z-50 border-b border-border bg-bg/80 backdrop-blur-xl">
        <div className="container split gap-6 py-4 md:py-5">
          <Link to="/" className="flex items-center gap-2 transition-opacity hover:opacity-90">
            <img
              src="assets/images/White logo - no background.svg"
              alt="Code Obsidian"
              className="h-8 w-auto sm:h-9"
            />
          </Link>
          <button
            type="button"
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg text-primary hover:bg-bg-card transition-colors"
            onClick={() => setExpanded(true)}
            aria-label="Open menu"
            aria-expanded={expanded}
          >
            <HiMenu className="w-6 h-6" />
          </button>
          <nav className="header-nav" aria-expanded={expanded}>
            <button
              type="button"
              className="md:hidden self-end flex items-center justify-center w-10 h-10 rounded-lg text-secondary hover:text-primary hover:bg-bg-card transition-colors mb-6"
              onClick={() => setExpanded(false)}
              aria-label="Close menu"
            >
              <HiX className="w-6 h-6" />
            </button>
            <NavLink
              to="/"
              onClick={() => setExpanded(false)}
              className="max-md:nav-item md:secondary-button md:!py-2.5 md:!px-4 md:rounded-lg"
            >
              <HiHome className="md:hidden shrink-0" />
              <span>Home</span>
            </NavLink>
            <NavLink
              to="/about"
              onClick={() => setExpanded(false)}
              className="max-md:nav-item md:secondary-button md:!py-2.5 md:!px-4 md:rounded-lg"
            >
              <HiInformationCircle className="md:hidden shrink-0" />
              <span>About</span>
            </NavLink>
            <NavLink
              to="/contact"
              onClick={() => setExpanded(false)}
              className="max-md:nav-item md:primary-button md:!py-2.5 md:!px-5 md:rounded-lg"
            >
              <HiAtSymbol className="md:hidden shrink-0" />
              <span>Contact</span>
            </NavLink>
          </nav>
        </div>
      </header>
    </>
  )
}
