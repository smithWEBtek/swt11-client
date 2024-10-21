import { Route, Routes } from 'react-router-dom'
import MainContent from '../components/MainContent/MainContent';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/about" element={<MainContent content='about' />} />
      <Route path="/blog" element={<MainContent content='blog' />} />
      <Route path="/samples" element={<MainContent content='samples' />} />
      <Route path="/library" element={<MainContent content='library' />} />
      <Route path="/" element={<MainContent content='home' />} />
    </Routes>
  )
}

export default AppRoutes;