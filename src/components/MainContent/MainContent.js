import { useEffect, useState } from 'react';
import StaticHtmlRenderer from "../utils/StaticHtmlRenderer";
import FetchHtmlFromJson from '../utils/FetchHtmlFromJson';

import Header from '../Header/Header';
import SideBar from "../SideBar/SideBar";
import Canvas from '../Canvas/Canvas';
import CanvasRight from "../CanvasRight";
import Footer from '../Footer/Footer';

const MainContent = ({ page }) => {
  const html = StaticHtmlRenderer(`${page}.html`);
  const [sideBarContent, setSideBarContent] = useState('');
  const [canvasContent, setCanvasContent] = useState('');
  const [canvasRightContent, setCanvasRightContent] = useState('');
  const [tekMarksContent, setTekMarksContent] = useState('');

  useEffect(() => {
    setSideBarContent(html[0].props.dangerouslySetInnerHTML.__html);
    setCanvasContent(html[1].props.dangerouslySetInnerHTML.__html);
    setCanvasRightContent(html[2].props.dangerouslySetInnerHTML.__html);
  }, [page, html]);

  const canvasContentToRender = page === 'tekmarks' ? tekMarksContent : canvasContent;

  return (
    <div className="maincontent">
      <Header />
      <div className="flex h-screen">
        <SideBar content={sideBarContent} />
        <div className="flex flex-row flex-grow">
          <Canvas content={canvasContentToRender} />
          <CanvasRight content={canvasRightContent} />
        </div>
      </div>
      {page === 'tekmarks' && (
        <>
          <FetchHtmlFromJson setHtmlContent={setTekMarksContent} />
        </>
      )}
      <Footer />
    </div>
  );
};

export default MainContent;
