import React, { useState, useEffect } from "react";
import { getStarships } from "../services/swapi";
import axios from "axios";
import { Link } from "react-router-dom";
import Header from "./header";
const StarshipList = () => {
  const [starships, setStarships] = useState([]);
  const [search, setSearch] = useState("");
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
      .then((response) => {
        setStarships(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [search]);

  const handleLoadMore = async () => {
    try {
      const response = await axios.get(nextPage);
      setStarships([...starships, ...response.data.results]);
      setNextPage(response.data.next);
    } catch (error) {
      console.error(error);
    }
  };
  const getIdFromUrl = url => {
    const urlParts = url.split("/");
    return urlParts[urlParts.length - 2];
  };
  return (
    <>
    <Header />
      <div className="search-text">
        <input
          type="text"
          placeholder="Name / Model"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="container">
        {starships.map((starship) => (
          <div className="starshiplist" key={starship.name}>
            <img
              src="https://cdnb.artstation.com/p/assets/images/images/028/214/581/large/ansel-hsiao-vsd120.jpg?1593795082"
              alt={starship.name}
              style={{ width: "100%" }}
            />
            <p>Name: {starship.name}</p>
            <p>Model: {starship.model}</p>
            <p>Hyperdrive Rating: {starship.hyperdrive_rating}</p>
            <div className="details-link">
            <Link to={`/starships/${getIdFromUrl(starship.url)}`} key={starship.name}>
              <p>Details</p>
            </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="loadmore">
        {nextPage && (
          <button className="loadbutton" onClick={handleLoadMore}>
            Load More Starships
          </button>
        )}
      </div>
    </>
  );
};

export default StarshipList;