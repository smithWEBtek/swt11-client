// components/Projects.js

import React, { useEffect, useState } from 'react';
import fetchJson from '../utils/fetchJson';
import PropTypes from 'prop-types';

const Projects = ({ filename, setHtmlContent }) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const projectCard = (project) => {
    return (`
      <a href=${project.href} class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src='/images/${project.image}' alt=${project.alt}>
        <div class="flex flex-col justify-between p-4 leading-normal">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${project.title}</h5>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">${project.description}</p>
        </div>
      </a>
      `)
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetchJson(filename);
        setData(result);

        const styledContent = result.map(project => (
          projectCard(project)
        )).join('')

        setHtmlContent(styledContent);

      } catch (err) {
        setError(err.message);
      }
    };

    fetchData();
  }, [filename, setHtmlContent]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!data) {
    return <div>Loading...</div>;
  }
};

Projects.propTypes = {
  filename: PropTypes.string.isRequired,
  setHtmlContent: PropTypes.func.isRequired,
}

export default Projects;
