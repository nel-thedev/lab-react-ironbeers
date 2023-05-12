import './App.css';
import { Routes, Route } from 'react-router-dom';
import NewBeerPage from './pages/NewBeerPage';
import HomePage from './pages/HomePage';
import BeersPage from './pages/BeersPage';
import RandomBeer from './pages/RandomBeer';
import SingleBeerPage from './pages/SingleBeerPage';

import { BeerContext } from './context/Beers.context';
import { useContext } from 'react';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/beer/all" element={<BeersPage />} />
        <Route path="/beer/new" element={<NewBeerPage />} />
        <Route path="/beer/random" element={<RandomBeer />} />
        <Route path="/beer/:id" element={<SingleBeerPage />} />
      </Routes>
    </div>
  );
}

export default App;
