import React from 'react';
import Giveaway from '../components/Giveaway';
import CardsGive from '../components/CardsGive';
import Contact from '../components/Contact';
import NavBar from '../components/NavBar';



const GiveCar = () => {
  return (
    <div>
      <NavBar/>
      <br/>
      <Giveaway />
      <br/>
      <CardsGive />
      <br/>
      <br/>
      <Contact/>
    </div>
  );
};

export default GiveCar;