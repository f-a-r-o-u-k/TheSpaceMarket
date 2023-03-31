import React from 'react';
import Cards from '../components/Cards';
import Contact from '../components/Contact';
import Home from '../components/Home';
import NavBar from '../components/NavBar';


const NavHome = ({currentUser}) => {
  return (
    <div>
      <NavBar/>
      <br/>
      <Home />
      <br/>
      <Cards  currentUser={currentUser} />
      <br/>
      <br/>
      <Contact/>
    </div>
  );
};

export default NavHome;