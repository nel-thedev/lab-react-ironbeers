import React, { useState } from 'react';
import HomeButton from '../components/HomeButton';

const NewBeerPage = () => {
  const [form, setForm] = useState({});
  return (
    <div>
      <HomeButton />
      <hr />
      <form></form>
    </div>
  );
};

export default NewBeerPage;
