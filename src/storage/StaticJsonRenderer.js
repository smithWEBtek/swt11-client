import React, { useEffect } from 'react';
import ReactMarkdown from 'react-markdown';

function StaticJsonRenderer(page) {
  // const [sideContent, setSideContent] = useState('');
  // const [canvasContent, setCanvasContent] = useState('');

  let sideContent;
  let canvasContent;

  useEffect(() => {
    fetch(`/json/${page}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch JSON content');
        }
        console.log('response: ', response);
        return response.json();
      })
      .then((json) => {
        console.log('json: ', json);
        sideContent = json.side ? <ReactMarkdown>{json.side}</ReactMarkdown> : 'JSON not found';
        canvasContent = json.canvas ? <ReactMarkdown>{json.canvas}</ReactMarkdown> : 'JSON not found';
      })
      .catch((error) => console.error('Error fetching JSON:', error));
    // }, [page, content]);
  }, []);

  // return ([sideContent, canvasContent]
  // return ([content.renderedSideContent, content.renderedCanvasContent]
  return ([sideContent, canvasContent]
  );
}

export default StaticJsonRenderer;
