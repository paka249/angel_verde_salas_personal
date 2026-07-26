import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

const iconClass = 'h-5 w-5 shrink-0'

const NAV_ITEMS = [
  {
    label: 'Home',
    path: '/',
    icon: (
      <svg className={iconClass} viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="4 12 12 5 20 12" />
        <rect x="4" y="12" width="16" height="8" rx="1" />
        <line x1="12" y1="20" x2="12" y2="15" />
      </svg>
    ),
  },
  {
    label: 'Projects',
    path: '/projects',
    icon: (
      <svg className={iconClass} viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.75">
        <rect x="4" y="4" width="7" height="7" rx="1" />
        <rect x="13" y="4" width="7" height="7" rx="1" />
        <rect x="4" y="13" width="7" height="7" rx="1" />
        <rect x="13" y="13" width="7" height="7" rx="1" />
      </svg>
    ),
  },
  {
    label: 'Resume',
    path: '/resume',
    icon: (
      <svg className={iconClass} viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round">
        <rect x="5" y="3" width="14" height="18" rx="1" />
        <line x1="8" y1="8" x2="16" y2="8" />
        <line x1="8" y1="12" x2="16" y2="12" />
        <line x1="8" y1="16" x2="12" y2="16" />
      </svg>
    ),
  },
  {
    label: 'Hobbies',
    path: '/hobbies',
    icon: (
      <svg className={iconClass} viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
  },
]

const CONTACT_LINKS = [
  {
    label: 'Email',
    href: 'mailto:ange7verde@gmail.com',
    icon: (
      <svg className={iconClass} viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <polyline points="3 7 12 13 21 7" />
      </svg>
    ),
  },
  {
    label: 'GitHub',
    href: 'https://github.com/paka249',
    icon: (
      <svg className={iconClass} viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.833.092-.647.35-1.088.636-1.339-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.269 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.747-1.026 2.747-1.026.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/angel-verde-salas-3a591425b',
    icon: (
      <svg className={iconClass} viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.119 20.452H3.554V9h3.565v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
]

const COLLAPSE_STORAGE_KEY = 'sidebar-collapsed'

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isCollapsed, setIsCollapsed] = useState(
    () => window.localStorage.getItem(COLLAPSE_STORAGE_KEY) === 'true',
  )

  useEffect(() => {
    window.localStorage.setItem(COLLAPSE_STORAGE_KEY, String(isCollapsed))
  }, [isCollapsed])

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
        className={`fixed inset-y-0 left-0 z-10 flex w-64 flex-col justify-between bg-surface p-4 transition-all duration-200 ease-in-out md:static ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0 ${isCollapsed ? 'md:w-20' : 'md:w-64'}`}
      >
        <div>
          <div className="mb-8 flex items-center justify-between">
            <span className={`text-lg font-semibold text-text ${isCollapsed ? 'md:hidden' : ''}`}>
              Angel Verde-Salas
            </span>
            <span className={`hidden text-lg font-semibold text-text ${isCollapsed ? 'md:inline' : ''}`}>
              AV
            </span>
            <button
              type="button"
              onClick={() => setIsCollapsed((collapsed) => !collapsed)}
              className="hidden h-8 w-8 shrink-0 items-center justify-center rounded-md text-muted transition-colors hover:bg-bg hover:text-text md:flex"
              aria-label={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
              aria-expanded={!isCollapsed}
            >
              <span className="text-base">{isCollapsed ? '»' : '«'}</span>
            </button>
          </div>
          <nav className="flex flex-col gap-2">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === '/'}
                onClick={() => setIsOpen(false)}
                title={item.label}
                aria-label={item.label}
                className={({ isActive }) =>
                  `flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                    isCollapsed ? 'md:justify-center md:px-2' : ''
                  } ${isActive ? 'bg-accent text-bg' : 'text-muted hover:bg-bg hover:text-text'}`
                }
              >
                {item.icon}
                <span className={isCollapsed ? 'md:hidden' : ''}>{item.label}</span>
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
              title={link.label}
              aria-label={link.label}
              className={`flex items-center gap-3 rounded-md px-3 py-1 text-sm text-muted transition-colors hover:text-accent ${
                isCollapsed ? 'md:justify-center md:px-2' : ''
              }`}
            >
              {link.icon}
              <span className={isCollapsed ? 'md:hidden' : ''}>{link.label}</span>
            </a>
          ))}
        </div>
      </aside>
    </>
  )
}

export default Sidebar
