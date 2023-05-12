import React, { useContext } from 'react';
import { BeerContext } from '../context/Beers.context';
import { Navigate } from 'react-router-dom';

const RandomBeer = () => {
  const { beersData } = useContext(BeerContext);
  const randomId = Math.floor(Math.random() * beersData.length);

  return (
    <div>
      <Navigate to={`/beer/${beersData[randomId]._id}`} />
    </div>
  );
};

export default RandomBeer;
