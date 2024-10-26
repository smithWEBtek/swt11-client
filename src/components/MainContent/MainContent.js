import { useEffect, useState } from 'react';
import Header from '../Header/Header';
import SideBar from "../SideBar/SideBar";
import Canvas from '../Canvas/Canvas';
import Footer from '../Footer/Footer';
import StaticHtmlRenderer from "../utils/StaticHtmlRenderer";
import Bookmarks from '../Bookmarks/Bookmarks';
import Projects from '../Projects/Projects';
import Prototypes from '../Prototypes/Prototypes';

const MainContent = ({ page }) => {
  const html = StaticHtmlRenderer(`${page}.html`);
  const [sideBarContent, setSideBarContent] = useState('');
  const [canvasContent, setCanvasContent] = useState('');
  const [bookmarksContent, setBookmarksContent] = useState(null);
  const [projectsContent, setProjectsContent] = useState('')
  const [prototypesContent, setPrototypesContent] = useState('')

  useEffect(() => {
    setSideBarContent(html[0].props.dangerouslySetInnerHTML.__html);
    setCanvasContent(html[1].props.dangerouslySetInnerHTML.__html);
  }, [page, html]);

  const canvasContentToRender = () => {
    switch (page) {
      case 'projects':
        return projectsContent;
      case 'prototypes':
        return prototypesContent;
      case 'bookmarks':
        return bookmarksContent;
      default:
        return canvasContent
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-grow">
        <SideBar content={sideBarContent} />
        <div className="flex flex-row flex-grow">
          {page === 'bookmarks' && <Bookmarks setHtmlContent={setBookmarksContent} />}
          {!page.includes(['projects', 'prototypes', 'blog']) &&
            <Canvas content={canvasContentToRender()} />}
        </div>
      </div>
      {page === 'projects' && (
        <>
          <Projects filename={page} setHtmlContent={setProjectsContent} />
        </>
      )}
      {page === 'prototypes' && (
        <>
          <Prototypes filename={page} setHtmlContent={setPrototypesContent} />
        </>
      )}
      <Footer />
    </div>
  );
};

export default MainContent;
