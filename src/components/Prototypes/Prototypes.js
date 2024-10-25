import data from './data.json';
import React, { useEffect, useState } from 'react';
import fetchJson from '../utils/fetchJson';
import PropTypes from 'prop-types';

const Prototypes = ({ filename = data, setHtmlContent }) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const prototypeCard = (prototype) => {
    return (`
      <div>
        <a href=${prototype.href} class="prototype-card" target="_blank" rel="noreferrer">
          <img class="prototype-image object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src='${prototype.image}' alt=${prototype.alt}>
          <div class="flex flex-col">
            <h5 class="prototype-title mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${prototype.title}</h5>
            <p class="prototype-description mb-3 font-normal text-gray-700 dark:text-gray-400">${prototype.description}</p>
          </div>
        </a>
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



