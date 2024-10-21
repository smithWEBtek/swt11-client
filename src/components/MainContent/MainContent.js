import SideContent from "../SideContent/SideContent"
import Canvas from '../Canvas/Canvas'

const MainContent = () => {
  return (
    <div className="flex h-screen maincontent">
      <SideContent />
      <Canvas />
    </div>)
}

export default MainContent
