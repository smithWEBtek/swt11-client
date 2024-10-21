import { Route, Routes } from 'react-router-dom'
import MainContent from '../components/MainContent/MainContent';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/demo" element={<MainContent page='demo' />} />
      <Route path="/demo.json" element={<MainContent page='demo.json' />} />
      <Route path="/about" element={<MainContent page='about' />} />
      <Route path="/about.json" element={<MainContent page='about.json' />} />
      <Route path="/blog" element={<MainContent page='blog' />} />
      <Route path="/samples" element={<MainContent page='samples' />} />
      <Route path="/library" element={<MainContent page='library' />} />
      <Route path="/" element={<MainContent page='home' />} />
    </Routes>
  )
}

export default AppRoutes;