import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import LoginStyle from "./Style/LoginStyle.css"


const Login = () => {
  const [userData, setUserData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:8000/api/login', userData, {
        withCredentials: true,
      })
      .then((res) => {
        localStorage.setItem('token', res.data.token);
        navigate('/');
      })
      .catch((err) => {
        console.log('Error:', err.response.data);
        setErrors(err.response.data.errors || { emailNotFoundErr: err.response.data.msg });
      });
  };

  return (
    <div>
      <div class="login-box">
  <h2>Login</h2>
  <form onSubmit={handleSubmit}>
    <div class="user-box">
      <input type="text" name="" required="" onChange={handleChange}/>
      <label>Email</label>
          <p>{errors.email}</p>
          <p>{errors.emailNotFoundErr}</p>
    </div>
    <div class="user-box">
      <input type="password" name="" required="" onChange={handleChange}/>
      <label>Password</label>
      <p>{errors.password}</p>
    </div>
    <button type="button" class="btn btn-dark">
      Submit
    </button>
  </form>
  <br/>
        <a href="" >
          <img class="icon1" src="https://img.icons8.com/nolan/256/facebook.png" alt="facebook logo"/>
        </a>
        <a href="" >
          <img class="icon1" src="https://img.icons8.com/nolan/256/1A6DFF/C822FF/google-logo.png" alt="google logo"/>
        </a>
  <br/>
  <a class='link' href='/Register'> Register</a>
  </div>
  </div>
  )
}

export default Login;