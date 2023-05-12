import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <Link to={'/beer/all'}>All Beers</Link>
      <Link to={'/beer/random'}>Random Beer</Link>
      <Link to={'/beer/new'}>New Beer</Link>
    </div>
  );
};

export default HomePage;
