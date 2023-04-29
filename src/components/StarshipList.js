import React, { useState, useEffect } from "react";
import { getStarships } from "../services/swapi";
import axios from "axios";
const StarshipList = () => {
  const [starships, setStarships] = useState([]);
  const [search, setSearch] = useState('');

  const [nextPage, setNextPage] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getStarships();
      setStarships(data.results);
      setNextPage(data.next);
    };
    fetchData();
  }, []);

  useEffect(() => {
    axios
      .get(`https://swapi.dev/api/starships/?search=${search}`)
      .then(response => {
        setStarships(response.data.results);
      })
      .catch(error => {
        console.log(error);
      });
  }, [search]);

  return (
    
      <div className="starships-grid">
    <input type="text" placeholder="Search" value={search} onChange={e => setSearch(e.target.value)} />
    <ul>
      {starships.map(starship => (
        <li key={starship.url}>
          <h2>{starship.name}</h2>
          <p>{`Model: ${starship.model}`}</p>
          <p>{`Hyperdrive Rating: ${starship.hyperdrive_rating}`}</p>
        </li>
      ))}
    </ul>
  </div>
  )
        }

export default StarshipList;