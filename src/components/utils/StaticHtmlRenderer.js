import React, { useEffect, useState } from 'react';

function StaticHtmlRenderer(page) {
  const [sideBarContent, setSideBarContent] = useState('');
  const [canvasContent, setCanvasContent] = useState('');
  const [canvasRightContent, setCanvasRightContent] = useState('');

  useEffect(() => {
    fetch(`/html/${page}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch HTML content');
        }
        return response.text();
      })
      .then((html) => {
        // Create a new DOMParser to parse the HTML string into a DOM object.
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');

        const querySideContent = doc.querySelector('#sidebar-content');
        const queryCanvasContent = doc.querySelector('#canvas-content');
        const queryCanvasRightContent = doc.querySelector('#canvasright-content');

        // Get the HTML content of the extracted section.
        setSideBarContent(querySideContent ? querySideContent.innerHTML : null);
        setCanvasContent(queryCanvasContent ? queryCanvasContent.innerHTML : null);
        setCanvasRightContent(queryCanvasRightContent ? queryCanvasRightContent.innerHTML : null);
      })
      .catch((error) => console.error('Error fetching HTML:', error));
  }, [page]);

  /* return an array of html sections to MainContent component, 
    ALL /public/html/*.html files adhere to this 3part format, which maps to <SideBar/>, <Canvas/> and <CanvasRight/>,
    whether they have visible content or not, the 3 ids are present,
    so the array returned to MainContent is intact in all cases.
  */
  return ([
    <div
      className="html-content"
      dangerouslySetInnerHTML={{ __html: sideBarContent }}
    />,
    <div
      className="html-content"
      dangerouslySetInnerHTML={{ __html: canvasContent }}
    />,
    <div
      className="html-content"
      dangerouslySetInnerHTML={{ __html: canvasRightContent }}
    />,
  ]
  );
}

export default StaticHtmlRenderer;
