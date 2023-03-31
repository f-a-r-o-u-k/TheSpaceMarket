import React from 'react';
import Login from '../components/Login';
import NavBar from '../components/NavBar';

const Auth = () => {
  return (
    <div className="auth">
      <NavBar/>
      <Login />
    </div>
  );
};

export default Auth;