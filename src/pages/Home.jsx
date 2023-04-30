import React from 'react';
import Header from '../components/header';
import { Outlet } from 'react-router-dom';
import StarshipList from '../components/StarshipList';
import StarshipDetails from '../components/StarshipDetail';
const Home = () => {
  return (
    <main>
      <Header />
      <Outlet />
      <StarshipList />
      <StarshipDetails />
    </main>
  )
}

export default Home