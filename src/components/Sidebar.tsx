import { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { homeSections } from '../data/home'
import { hobbySections } from '../data/hobbies'

const iconClass = 'h-5 w-5 shrink-0'

const NAV_ITEMS = [
  {
    label: 'Home',
    path: '/',
    sections: homeSections.map((section) => ({ id: section.id, label: section.heading })),
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
    sections: hobbySections.map((section) => ({ id: section.id, label: section.heading })),
    icon: (
      <svg className={iconClass} viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
  },
]

const CONTACT_LINKS = [
  {
    label: 'Gmail',
    href: 'https://mail.google.com/mail/?view=cm&fs=1&to=ange7verde@gmail.com',
    icon: (
      <svg className={iconClass} viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
        <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" />
      </svg>
    ),
  },
  {
    label: 'Outlook',
    href: 'https://outlook.office.com/mail/deeplink/compose?to=usn3@txstate.edu',
    icon: (
      <svg className={iconClass} viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
        <path d="M8.56 12.03Q8.56 12.41 8.5 12.76 8.39 13.1 8.2 13.38 8 13.65 7.71 13.81 7.41 13.97 7 13.97 6.58 13.97 6.29 13.8 6 13.63 5.81 13.35 5.62 13.07 5.54 12.72 5.45 12.37 5.45 12 5.45 11.64 5.54 11.28 5.62 10.93 5.81 10.65 6 10.37 6.31 10.2 6.61 10.03 7.03 10.03 7.46 10.03 7.75 10.2 8.05 10.38 8.23 10.66 8.41 10.95 8.5 11.3 8.56 11.66 8.56 12.03M22 12V19.81Q22 20.2 21.73 20.5 21.45 20.75 21.06 20.75H7.94Q7.55 20.75 7.27 20.5 7 20.2 7 19.81V17H2.83Q2.5 17 2.24 16.76 2 16.5 2 16.17V7.83Q2 7.5 2.24 7.24 2.5 7 2.83 7H8.25V4.13Q8.25 3.76 8.5 3.5 8.76 3.25 9.13 3.25H19.87Q20.24 3.25 20.5 3.5 20.75 3.76 20.75 4.13V11.04L21.79 11.64H21.8Q21.88 11.7 21.94 11.8 22 11.89 22 12M17 5.13V7.63H19.5V5.13M17 8.88V11.38H19.5V8.88M17 12.63V14.15L19.54 12.63M12.63 5.13V7.63H15.75V5.13M12.63 8.88V11.38H15.75V8.88M12.63 12.63V14.32L14.64 15.56L15.75 14.9V12.63M9.5 5.13V7H11.27Q11.33 7 11.38 7.04V5.12M7 15.32Q7.73 15.32 8.32 15.06 8.9 14.8 9.31 14.35 9.71 13.9 9.91 13.28 10.12 12.66 10.13 11.94 10.13 11.25 9.92 10.65 9.72 10.06 9.32 9.62 8.93 9.18 8.37 8.93 7.8 8.68 7.08 8.68 6.31 8.68 5.71 8.93 5.12 9.18 4.71 9.63 4.3 10.09 4.09 10.71 3.88 11.34 3.88 12.08 3.88 12.78 4.09 13.38 4.31 13.97 4.71 14.4 5.11 14.83 5.68 15.08 6.26 15.32 7 15.32M8.25 19.5H18.57L12 15.4V16.17Q12 16.5 11.76 16.76 11.5 17 11.17 17H8.25M20.75 19.39V13.36L15.83 16.31Z" />
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
  const location = useLocation()
  const [isOpen, setIsOpen] = useState(false)
  const [isCollapsed, setIsCollapsed] = useState(
    () => window.localStorage.getItem(COLLAPSE_STORAGE_KEY) === 'true',
  )
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>(() =>
    Object.fromEntries(NAV_ITEMS.filter((item) => item.sections).map((item) => [item.path, true])),
  )

  useEffect(() => {
    window.localStorage.setItem(COLLAPSE_STORAGE_KEY, String(isCollapsed))
  }, [isCollapsed])

  const toggleSection = (path: string) =>
    setExpandedSections((current) => ({ ...current, [path]: !current[path] }))

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
        className={`font-sidebar fixed inset-y-0 left-0 z-10 flex w-64 flex-col justify-between overflow-y-auto bg-surface p-4 transition-all duration-200 ease-in-out md:sticky md:top-0 md:h-screen md:self-start ${
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
            {NAV_ITEMS.map((item) => {
              const isCurrentPage = location.pathname === item.path

              const showToggle = item.sections && isCurrentPage
              const isExpanded = expandedSections[item.path]

              return (
                <div key={item.path}>
                  <div className="flex items-center gap-1">
                    <NavLink
                      to={item.path}
                      end={item.path === '/'}
                      onClick={() => setIsOpen(false)}
                      title={item.label}
                      aria-label={item.label}
                      className={({ isActive }) =>
                        `flex flex-1 items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                          isCollapsed ? 'md:justify-center md:px-2' : ''
                        } ${isActive ? 'bg-accent text-bg' : 'text-muted hover:bg-bg hover:text-text'}`
                      }
                    >
                      {item.icon}
                      <span className={isCollapsed ? 'md:hidden' : ''}>{item.label}</span>
                    </NavLink>

                    {showToggle && (
                      <button
                        type="button"
                        onClick={() => toggleSection(item.path)}
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-md text-muted transition-colors hover:bg-bg hover:text-text ${
                          isCollapsed ? 'md:hidden' : ''
                        }`}
                        aria-label={isExpanded ? `Collapse ${item.label} sections` : `Expand ${item.label} sections`}
                        aria-expanded={isExpanded}
                      >
                        <span
                          className={`inline-block text-xs transition-transform ${isExpanded ? 'rotate-90' : ''}`}
                        >
                          ▸
                        </span>
                      </button>
                    )}
                  </div>

                  {showToggle && isExpanded && (
                    <div className={`ml-4 mt-1 flex flex-col gap-1 border-l border-muted/20 pl-4 ${isCollapsed ? 'md:hidden' : ''}`}>
                      {item.sections!.map((section) => (
                        <a
                          key={section.id}
                          href={`#${section.id}`}
                          onClick={() => setIsOpen(false)}
                          className="rounded-md px-2 py-1 text-sm text-muted transition-colors hover:text-accent"
                        >
                          {section.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              )
            })}
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
