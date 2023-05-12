import React, { useContext } from 'react';
import HomeButton from '../components/HomeButton';
import { BeerContext } from '../context/Beers.context';
import { useParams } from 'react-router-dom';

const SingleBeerPage = () => {
  const { beersData } = useContext(BeerContext);
  const { id } = useParams();

  const foundBeer = beersData.find((beer) => {
    return beer._id === id;
  });

  if (!foundBeer) {
    return <div></div>;
  }

  return (
    <div>
      <HomeButton />
      <h1>Beer Details:</h1>
      <hr />
      <img src={foundBeer.image_url} alt={foundBeer.name} />
      <h2>{foundBeer.name}</h2>
      <p>{foundBeer.tagline}</p>
      <p>{foundBeer.first_brewed}</p>
      <p>{foundBeer.attenuation_level}</p>
      <p>{foundBeer.description}</p>
      <p>{foundBeer.contributed_by}</p>
    </div>
  );
};

export default SingleBeerPage;
