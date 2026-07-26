import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Resume from './pages/Resume'
import Hobbies from './pages/Hobbies'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="projects" element={<Projects />} />
          <Route path="resume" element={<Resume />} />
          <Route path="hobbies" element={<Hobbies />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
