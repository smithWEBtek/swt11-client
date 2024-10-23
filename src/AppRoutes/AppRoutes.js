import { Route, Routes } from 'react-router-dom'
import MainContent from '../components/MainContent/MainContent';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainContent page='about' />} />
      <Route path="/about" element={<MainContent page='about' />} />
      <Route path="/projects" element={<MainContent page='projects' />} />
      <Route path="/prototypes" element={<MainContent page='prototypes' />} />
      <Route path="/blog" element={<MainContent page='blog' />} />
      <Route path="/library" element={<MainContent page='library' />} />
      <Route path="/tekmarks" element={<MainContent page='tekmarks' />} />
      <Route path="/demo" element={<MainContent page='demo' />} />
    </Routes>
  )
}

export default AppRoutes;