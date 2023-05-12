import React, { useContext } from 'react';
import HomeButton from '../components/HomeButton';
import { BeerContext } from '../context/Beers.context';
import { Link } from 'react-router-dom';

const BeersPage = () => {
  const { beersData, setBeersData } = useContext(BeerContext);

  return (
    <div>
      <HomeButton />
      <br />

      {beersData.map((beer) => {
        return (
          <div key={beer._id}>
            <Link to={`/beer/${beer._id}`}>
              <img src={beer.image_url} alt={beer.name} />
              <h4>{beer.name}</h4>
            </Link>
            <p>{beer.tagline}</p>
            <p>{beer.contributed_by}</p>
            <hr />
          </div>
        );
      })}
    </div>
  );
};

export default BeersPage;
