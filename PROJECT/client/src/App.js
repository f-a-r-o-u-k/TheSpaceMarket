import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import Auth from './Views/Auth';
import Register from './components/Register';
import Admin from './components/Admin';
import NavBar from './components/NavBar';
import NavHome from './Views/NavHome';
import GiveCar from './Views/GivCar';
import CreateProduct from './components/CreateProduct';
import Formgive from './components/Formgive'
import './App.css';
import Products from './components/Products';
import Dashboard from './components/Dashboard';
import AllProduct from './components/AllProduct';
import Console from './components/Console';
import Games from './components/Games';



function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [refresh, setRefresh] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const config = {
      headers: {
        authorization: localStorage.getItem('token'),
      },
    };
    axios
      .get('http://localhost:8000/api/users/', config)
      .then((res) => {
        setCurrentUser(res.data);
        setIsLoading(false);
      })
      .catch((err) => console.log('*** ==> ', err));
  }, [refresh]);

  const refresher = () => {
    setRefresh(!refresh);
  };

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<NavHome currentUser={currentUser} />} />
          <Route path="/login" element={<Auth />} />
          <Route path="/register" element={<Register />} />
          <Route path="/CreateProduct" element={<CreateProduct />} />          
          <Route path="/giveaway" element={<GiveCar />} />
          <Route path="/form/giveaway" element={<Formgive /> } />
          <Route path="/admin" element={<Admin />} /> 
          <Route path="/products" element={<Products />} />
          <Route path="/product/pc" element={<AllProduct />} />
          <Route path="/product/console" element={<Console />} />
          <Route path="/product/games" element={<Games />} />
          <Route path="/dashboard" element={<Dashboard />} /> 
        </Routes>
      </Router>
    </div>
  );
}

export default App;

