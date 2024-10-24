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

  const contentMap = {
    bookmarks: bookmarksContent,
    projects: projectsContent,
    default: canvasContent,
  };

  const getContentToRender = (page) => contentMap[page] || contentMap.default;

  const PageContent = ({ page, setBookmarksContent, setProjectsContent }) => {
    switch (page) {
      case 'bookmarks':
        return <Bookmarks setHtmlContent={setBookmarksContent} />;
      case 'projects':
        return <Projects filename={page} setHtmlContent={setProjectsContent} />;
      default:
        return <Canvas content={getContentToRender(page)} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-grow">
        <SideBar content={sideBarContent} />
        <div className="flex flex-row flex-grow">
          <PageContent
            page={page}
            setBookmarksContent={setBookmarksContent}
            setProjectsContent={setProjectsContent}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MainContent;
