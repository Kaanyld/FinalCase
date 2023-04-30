import React from 'react';
import Header from './components/header';
import StarshipList from './components/StarshipList';
import StarshipDetails from './components/StarshipDetail';

const App = () => {
  return (
    <div>
      <Header />
      <StarshipList />
      <StarshipDetails />

    </div>
  )
}

export default App