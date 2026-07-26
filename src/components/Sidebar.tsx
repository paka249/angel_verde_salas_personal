import { useState } from 'react'
import { NavLink } from 'react-router-dom'

const NAV_ITEMS = [
  { label: 'Home', path: '/' },
  { label: 'Projects', path: '/projects' },
  { label: 'Resume', path: '/resume' },
  { label: 'Hobbies', path: '/hobbies' },
]

const CONTACT_LINKS = [
  { label: 'Email', href: 'mailto:ange7verde@gmail.com' },
  { label: 'GitHub', href: 'https://github.com/paka249' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/angel-verde-salas-3a591425b' },
]

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        className="fixed left-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-md bg-surface text-text md:hidden"
        aria-label="Toggle navigation"
      >
        <span className="text-xl">{isOpen ? '✕' : '☰'}</span>
      </button>

      <aside
        className={`fixed inset-y-0 left-0 z-10 flex w-64 transform flex-col justify-between bg-surface p-6 transition-transform duration-200 ease-in-out md:static md:translate-x-0 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div>
          <div className="mb-8 text-lg font-semibold text-text">Angel Verde-Salas</div>
          <nav className="flex flex-col gap-2">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === '/'}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-accent text-bg'
                      : 'text-muted hover:bg-bg hover:text-text'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>

        <div className="flex flex-col gap-1 border-t border-muted/20 pt-4">
          {CONTACT_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="rounded-md px-3 py-1 text-sm text-muted transition-colors hover:text-accent"
            >
              {link.label}
            </a>
          ))}
        </div>
      </aside>
    </>
  )
}

export default Sidebar
