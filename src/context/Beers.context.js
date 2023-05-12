import axios from 'axios';
import React, { useEffect } from 'react';

import { createContext, useState } from 'react';

const BeerContext = createContext();

const BeerContextProvider = ({ children }) => {
  const [beersData, setBeersData] = useState([]);

  useEffect(() => {
    axios
      .get('https://ih-beers-api2.herokuapp.com/beers')
      .then((response) => {
        setBeersData(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <BeerContext.Provider value={{ beersData, setBeersData }}>
      {children}
    </BeerContext.Provider>
  );
};

export { BeerContext, BeerContextProvider };
