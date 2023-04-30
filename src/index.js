import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StarshipList from './components/StarshipList';
import StarshipDetails from './components/StarshipDetail';
import StarshipContextProvider from './starshipcontext';
import './index.css';
ReactDOM.render(
  <React.StrictMode>
    <StarshipContextProvider>
      <Router>
        <Routes>
          <Route path="/" element={<StarshipList />} />
          <Route path="/starships" element={<StarshipList />} />
          <Route path="/starships/:starshipId" element={<StarshipDetails />} />
        </Routes>
      </Router>
    </StarshipContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);