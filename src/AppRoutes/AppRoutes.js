import { Route, Routes } from 'react-router-dom'
import MainContent from '../components/MainContent/MainContent';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/demo" element={<MainContent page='demo' />} />
      <Route path="/about" element={<MainContent page='about' />} />
      <Route path="/blog" element={<MainContent page='blog' />} />
      <Route path="/samples" element={<MainContent page='samples' />} />
      <Route path="/library" element={<MainContent page='library' />} />
      <Route path="/" element={<MainContent page='about' />} />
    </Routes>
  )
}

export default AppRoutes;