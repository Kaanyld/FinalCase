import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const StarshipContext = createContext();

const StarshipContextProvider = (props) => {
  const [starships, setStarships] = useState([]);

  useEffect(() => {
    const fetchStarships = async () => {
      try {
        const response = await axios.get('https://swapi.dev/api/starships/');
        const fetchedStarships = response.data.results.map((starship, index) => ({
          id: index + 1,
          name: starship.name,
          model: starship.model,
          hyperdrive_rating: starship.hyperdrive_rating,
          image: `/images/starships/${index + 1}.jpg`,
        }));
        setStarships(fetchedStarships);
      } catch (error) {
        console.error(error);
      }
    };
    fetchStarships();
  }, []);

  return (
    <StarshipContext.Provider value={{ starships }}>
      {props.children}
    </StarshipContext.Provider>
  );
};

export default StarshipContextProvider;