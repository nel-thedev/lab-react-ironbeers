import React from 'react';
import { Link } from 'react-router-dom';

const HomeButton = () => {
  return (
    <Link to={'/'}>
      <button>🏠</button>
    </Link>
  );
};

export default HomeButton;
