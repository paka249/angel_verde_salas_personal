import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'

function Layout() {
  return (
    <div className="flex min-h-screen bg-bg text-text">
      <Sidebar />
      <main className="flex-1 px-6 py-10 md:px-12 md:py-16">
        <div className="mx-auto max-w-3xl">
          <Outlet />
        </div>
      </main>
    </div>
  )
}

export default Layout
