import Header from '../Header/Header';
import SideContent from "../SideContent/SideContent"
import Canvas from '../Canvas/Canvas'
import Footer from '../Footer/Footer';

import aboutJson from '../../content/about.json';
import homeJson from '../../content/home.json';
import blogJson from '../../content/blog.json';
import samplesJson from '../../content/samples.json';
import libraryJson from '../../content/library.json';

const MainContent = ({ content }) => {
  let json;

  switch (content) {
    case 'home':
      json = homeJson;
      break;
    case 'about':
      json = aboutJson;
      break;
    case 'blog':
      json = blogJson;
      break;
    case 'samples':
      json = samplesJson;
      break;
    case 'library':
      json = libraryJson;
      break;
    default:
      json = homeJson
      break;
  }

  return (
    <>
      <Header />
      <div className="flex h-screen maincontent">
        <SideContent title={json.side.title} body={json.side.body} json={json} />
        <Canvas title={json.canvas.title} body={json.canvas.body} json={json} />
      </div>
      <Footer />
    </>
  )
}

export default MainContent
