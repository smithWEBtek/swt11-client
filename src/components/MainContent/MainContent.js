import StaticHtmlRenderer from "../utils/StaticHtmlRenderer";
import Header from '../Header/Header';
import SideContent from "../SideContent/SideContent"
import Canvas from '../Canvas/Canvas'
import Footer from '../Footer/Footer';

const MainContent = ({ page }) => {
  const html = StaticHtmlRenderer(`${page}.html`)
  const sideContent = html[0].props.dangerouslySetInnerHTML.__html
  const canvasContent = html[1].props.dangerouslySetInnerHTML.__html

  return (
    <>
      <Header />
      <div className="flex h-screen maincontent">
        <SideContent content={sideContent} />
        <Canvas content={canvasContent} />
      </div>
      <Footer />
    </>
  )
}

export default MainContent
