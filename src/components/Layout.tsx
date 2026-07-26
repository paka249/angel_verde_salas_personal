import { useRef, type CSSProperties, type MouseEvent } from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'

function Layout() {
  const mainRef = useRef<HTMLElement>(null)

  const handleMouseMove = (event: MouseEvent<HTMLElement>) => {
    const main = mainRef.current
    if (!main) return
    const rect = main.getBoundingClientRect()
    const x = ((event.clientX - rect.left) / rect.width) * 100
    const y = ((event.clientY - rect.top) / rect.height) * 100
    main.style.setProperty('--mx', `${x}%`)
    main.style.setProperty('--my', `${y}%`)
  }

  return (
    <div className="flex min-h-screen bg-bg text-text">
      <Sidebar />
      <main
        ref={mainRef}
        onMouseMove={handleMouseMove}
        className="pattern-wallpaper flex-1 px-6 pb-10 pt-20 md:px-12 md:py-16"
        style={{ '--mx': '50%', '--my': '20%' } as CSSProperties}
      >
        <div className="mx-auto max-w-3xl">
          <Outlet />
        </div>
      </main>
    </div>
  )
}

export default Layout
