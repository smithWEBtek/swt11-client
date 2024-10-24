import { useEffect, useState } from 'react';
import StaticHtmlRenderer from "../utils/StaticHtmlRenderer";
import Bookmarks from '../Bookmarks/Bookmarks';
import Projects from '../Projects/Projects';

import Header from '../Header/Header';
import SideBar from "../SideBar/SideBar";
import Canvas from '../Canvas/Canvas';
import Footer from '../Footer/Footer';

const MainContent = ({ page }) => {
  const html = StaticHtmlRenderer(`${page}.html`);
  const [sideBarContent, setSideBarContent] = useState('');
  const [canvasContent, setCanvasContent] = useState('');
  const [bookmarksContent, setBookmarksContent] = useState(null);
  const [projectsContent, setProjectsContent] = useState('')

  useEffect(() => {
    setSideBarContent(html[0].props.dangerouslySetInnerHTML.__html);
    setCanvasContent(html[1].props.dangerouslySetInnerHTML.__html);
  }, [page, html]);

  const canvasContentToRender = () => {
    switch (page) {
      case 'bookmarks':
        return bookmarksContent;
      case 'projects':
        return projectsContent;
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
          {page === 'bookmarks' ? (
            <Bookmarks setHtmlContent={setBookmarksContent} />
          ) :
            <Canvas content={canvasContentToRender()} />
          }
        </div>
      </div>
      {page === 'projects' && (
        <>
          <Projects filename={page} setHtmlContent={setProjectsContent} />
        </>
      )}
      <Footer />
    </div>
  );
};

export default MainContent;
