import React from 'react';
import Header from '../components/header';
import { Outlet } from 'react-router-dom';
import StarshipList from '../components/StarshipList';

const Home = () => {
  return (
    <main>
      <Header />
      <Outlet />
      <StarshipList />
    </main>
  )
}

export default Home