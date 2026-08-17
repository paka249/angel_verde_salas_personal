import { AnimatePresence, motion } from 'framer-motion'
import { Outlet, useLocation } from 'react-router-dom'
import Sidebar from './Sidebar'

function Layout() {
  const location = useLocation()

  return (
    <div className="flex min-h-screen bg-bg text-text">
      <Sidebar />
      <main className="relative flex-1 px-6 pb-10 pt-20 md:px-12 md:py-16">
        <div className="pattern-wallpaper absolute inset-0 -z-10" aria-hidden="true" />
        <div className="mx-auto max-w-3xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
            >
              <Outlet />
            </motion.div>
          </AnimatePresence>
        </div>
      </main>
    </div>
  )
}

export default Layout
