import { Link, NavLink } from 'react-router-dom'
// import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-bg-elevated">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-5 flex flex-col gap-6">
            <Link to="/" className="w-fit">
              <img
                src="assets/images/White logo - no background.svg"
                alt="Code Obsidian"
                className="h-8 w-auto opacity-90 hover:opacity-100 transition-opacity"
              />
            </Link>
            <p className="text-secondary text-sm leading-relaxed max-w-sm">
              Modern web and mobile experiences—built to convert, scale, and stay fast.
            </p>
            <div className="flex flex-col gap-1">
              <span className="text-muted text-xs font-medium uppercase tracking-wider">Get in touch</span>
              <a href="mailto:info@codeobsidian.com" className="text-primary font-medium hover:text-accent transition-colors w-fit">
                info@codeobsidian.com
              </a>
            </div>
            {/* <div className="flex gap-4">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary hover:text-accent transition-colors p-2 rounded-lg hover:bg-accent-muted"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary hover:text-accent transition-colors p-2 rounded-lg hover:bg-accent-muted"
                aria-label="GitHub"
              >
                <FaGithub className="w-5 h-5" />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary hover:text-accent transition-colors p-2 rounded-lg hover:bg-accent-muted"
                aria-label="Instagram"
              >
                <FaInstagram className="w-5 h-5" />
              </a>
            </div> */}
          </div>
          <div className="md:col-span-7 grid grid-cols-2 gap-8 sm:grid-cols-3">
            <div className="flex flex-col gap-4">
              <h3 className="text-primary font-display font-semibold text-sm uppercase tracking-wider">Learn</h3>
              <ul className="flex flex-col gap-3">
                <li>
                  <NavLink to="/about" className="text-secondary hover:text-accent transition-colors text-sm font-medium">
                    About Us
                  </NavLink>
                </li>
                <li>
                  <a href="/#services" className="text-secondary hover:text-accent transition-colors text-sm font-medium">
                    Our Services
                  </a>
                </li>
                <li>
                  <NavLink to="/contact" className="text-secondary hover:text-accent transition-colors text-sm font-medium">
                    Contact
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <span className="text-muted text-sm">© {currentYear} Code Obsidian. All rights reserved.</span>
        </div>
      </div>
    </footer>
  )
}
