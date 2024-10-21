import React, { useEffect, useState } from 'react';

function StaticHtmlRenderer(page) {
  console.log('page: ', page);
  const [sideContent, setSideContent] = useState('');
  const [canvasContent, setCanvasContent] = useState('');

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

        const querySideContent = doc.querySelector('#side-content');
        const queryCanvasContent = doc.querySelector('#canvas-content');

        // Get the HTML content of the extracted section.
        setSideContent(querySideContent ? querySideContent.innerHTML : 'Section not found');
        setCanvasContent(queryCanvasContent ? queryCanvasContent.innerHTML : 'Section not found');
      })
      .catch((error) => console.error('Error fetching HTML:', error));
  }, [page]);

  return ([
    <div
      className="html-content"
      dangerouslySetInnerHTML={{ __html: sideContent }}
    />,
    <div
      className="html-content"
      dangerouslySetInnerHTML={{ __html: canvasContent }}
    />
  ]
  );
}

export default StaticHtmlRenderer;
