import { useEffect, useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { Accordion } from 'flowbite-react';

const Bookmarks = ({ setHtmlContent }) => {
  const [families, setFamilies] = useState([]);

  const constructFamilies = useCallback((data) => {
    const families = [];
    const urlsWithJavascript = [];

    // Find the parents, which are in the category of 'tek', which has id of 871
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
      if (family.bookmarks.length > 0) {
        families.push(family);
      }
    });

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
        setFamilies(families);
      } catch (error) {
        console.error('Error fetching bookmarks:', error);
        setHtmlContent(`<div>Error: ${error.message}</div>`);
      }
    };
    fetchData();
  }, [setHtmlContent, constructFamilies]);

  return (
    <div className='bookmarks-content'>
      <div className="canvas-title">bookmarks</div>
      <Accordion>
        {families.map((family, index) => {
          const childBookmarks = family.bookmarks.map((child, childIndex) => (
            <p key={childIndex} className="mb-2 text-gray-500 dark:text-gray-400 bookmark-child">
              <a href={child.url}>{child.title}</a>
            </p>
          ));
          return (
            <Accordion.Panel key={index}>
              <Accordion.Title className="bookmark-topic">
                {family.title}
              </Accordion.Title>
              <Accordion.Content className="bookmark-children">
                {childBookmarks}
              </Accordion.Content>
            </Accordion.Panel>
          );
        })}
      </Accordion>
    </div>
  );
};

Bookmarks.propTypes = {
  setHtmlContent: PropTypes.func.isRequired,
};

export default Bookmarks;
