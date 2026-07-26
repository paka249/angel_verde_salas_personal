import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'

function Layout() {
  return (
    <div className="flex min-h-screen bg-bg text-text">
      <Sidebar />
      <main className="relative flex-1 px-6 pb-10 pt-20 md:px-12 md:py-16">
        <div className="pattern-wallpaper absolute inset-0 -z-10" aria-hidden="true" />
        <div className="mx-auto max-w-3xl">
          <Outlet />
        </div>
      </main>
    </div>
  )
}

export default Layout
