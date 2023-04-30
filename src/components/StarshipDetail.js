import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { StarshipContext } from '../starshipcontext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {FaArrowLeft} from "react-icons/fa";

import Header from "./header";

const StarshipDetails = () => {
  const { starshipId } = useParams();
  const { starships } = useContext(StarshipContext);
  const navigate = useNavigate();
  const [starship, setStarship] = useState({});

  useEffect(() => {
    const getStarshipDetails = async () => {
      try {
        const response = await axios.get(`https://swapi.dev/api/starships/${starshipId}`);
        setStarship(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    getStarshipDetails();
  }, [starshipId]);

  const handleBackClick = () => {
    navigate('/starships');
  };

  if (!starship.name) {
    return <div>Loading...</div>;
  }

  return (<>
     <Header />
     <button className='backbutton' type='button' onClick={handleBackClick}><FaArrowLeft size = {22} /> </button> 
    <div className="detail">
    <h1>{starship.name}</h1>
    <img src="https://cdnb.artstation.com/p/assets/images/images/028/214/581/large/ansel-hsiao-vsd120.jpg?1593795082" alt={starship.name} /><br />
    <p>Model: {starship.model}</p>
    <p>Manufacturer: {starship.manufacturer}</p>
    <p>Passengers: {starship.passengers}<br /></p>
    <p>Max Atmosphering Speed: {starship.max_atmosphering_speed}</p>
    <p>Crew: {starship.crew}</p>
    <p>Cargo Capacity: {starship.cargo_capacity}</p>
    </div>
    </>
  );
};

export default StarshipDetails;
