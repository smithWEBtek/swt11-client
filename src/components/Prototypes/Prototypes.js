import data from './data.json';
import React, { useEffect, useState } from 'react';
import fetchJson from '../utils/fetchJson';
import PropTypes from 'prop-types';

const Prototypes = ({ filename = data, setHtmlContent }) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const prototypeCard = (prototype) => {
    const gitRepo = prototype.git_repo ? prototype.git_repo : null;
    const gitRepoApi = prototype.git_repo_api ? prototype.git_repo_api : null;

    return (`
          <div class="project-card">
            <a href=${prototype.href} class="project-card">
              <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src='${prototype.image}' alt=${prototype.alt}>
            </a>
            <div class="flex flex-col h-full">
              <h5 class="project-title mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${prototype.title}</h5>
              <p class="project-description mb-3 font-normal text-gray-700 dark:text-gray-400">${prototype.description}</p>
              
              <p class="project-git-repo mt-auto">site: <a href=${prototype.href} target='_blank' rel='noreferrer'>${prototype.href}</a></p>
              <p class="project-git-repo mt-auto">github repo client: <a href=${gitRepo} target='_blank' rel='noreferrer'>${gitRepo || 'private'}</a></p>
              <p class="project-git-repo mt-auto">github repo api: <a href=${gitRepoApi} target='_blank' rel='noreferrer'>${gitRepoApi || 'private'}</a></p>
            </div>
          </div>
        `)
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetchJson(filename);
        setData(result);

        const styledContent = result.map(prototype => (
          prototypeCard(prototype)
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

Prototypes.propTypes = {
  filename: PropTypes.string.isRequired,
  setHtmlContent: PropTypes.func.isRequired,
}

export default Prototypes;



