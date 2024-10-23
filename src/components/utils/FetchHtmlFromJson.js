import { useEffect, useCallback } from 'react';
import ReactDOMServer from 'react-dom/server';
import PropTypes from 'prop-types';

const FetchHtmlFromJson = ({ setHtmlContent }) => {
  const constructFamilies = useCallback((data) => {
    const families = [];
    const urlsWithJavascript = [];

    // Find the parents, which are children of 'tek', which has id of 871
    const parents = data.filter(d => d.parentId === '871');

    // For each parent, build an object of {title: parent.title, children: [{title: child.title, url: child.url},...]}
    parents.forEach(parent => {
      const family = {
        title: parent.title,
        bookmarks: []
      };
      data.forEach(d => {
        if (d.parentId === parent.id.toString()) {
          const child = {
            title: d.title,
            url: d.url
          };
          // Filter out javascript: URLs, it will be deprecated soon
          if (child.url?.startsWith('javascript:')) {
            urlsWithJavascript.push(child);
          } else {
            family.bookmarks.push(child);
          }
        }
      });
      families.push(family);
    });

    console.log('families: ', families);
    console.log('urlsWithJavascript: ', urlsWithJavascript);
    return families;
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/bookmarks/bookmarks.json');
        if (!response.ok) {
          throw new Error('Failed to fetch bookmarks');
        }
        const data = await response.json();

        const families = constructFamilies(data);

        const htmlContent = families.map((family, index) => {
          const childBookmarks = family.bookmarks.map((child, childIndex) => (
            <li key={childIndex}><a href={child.url}>{child.title}</a></li>
          ));
          return (
            <div key={index}>
              <div className="bookmark-title"><b>{family.title}</b></div>
              <ul>
                {childBookmarks}
              </ul>
            </div>
          );
        });

        const htmlString = ReactDOMServer.renderToString(<><div className="canvas-title">tekmarks</div>{htmlContent}</>);
        setHtmlContent(htmlString);

      } catch (error) {
        console.error('Error fetching bookmarks:', error);
        setHtmlContent(`<div>Error: ${error.message}</div>`);
      }
    };
    fetchData();
  }, [setHtmlContent, constructFamilies]);

  return null;
};

FetchHtmlFromJson.propTypes = {
  setHtmlContent: PropTypes.func.isRequired,
};

export default FetchHtmlFromJson;
