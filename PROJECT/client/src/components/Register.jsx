import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import RegisterStyle from "./Style/RegisterStyle.css"
import NavBar from './NavBar';



const Register = () => {
  const [userData, setUserData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  const navigate = useNavigate();

  const [errors, setErrors] = useState({});
  const [dublicatedEmailErr, SetdublicatedEmailErr] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:8000/api/newuser', userData, {
        withCredentials: true,
      })
      .then((res) => {
        localStorage.setItem('token', res.data.token);
        navigate('/');
      })
      .catch((err) => {
        // console.log('*********************', err.response.data);
        SetdublicatedEmailErr(err.response.data.msg);
        const errResponse = err.response.data.errors;
        console.log(errResponse);
        const errObj = {};
        for (const key of Object.keys(errResponse)) {
          errObj[key] = errResponse[key].message;
        }
        setErrors(errObj);
      });
  };

  return (
    <div>
      <NavBar/>
    <div class="login-box">
      <h1>Register</h1>
      <hr/>
      <form onSubmit={handleSubmit}>
        <div class="user-box">
          <label className="form-label" >
            First Name
          </label>
          <input
            className="form-control"
            type="text"
            name="firstName"
            onChange={handleChange}
          />
          <p>{errors.firstName}</p>
        </div>
        <div class="user-box">
          <label className="form-label">
            Last Name
          </label>
          <input
            className="form-control"
            type="text"
            name="lastName"
            onChange={handleChange}
          />
          <p>{errors.lastName}</p>
        </div>
        <div class="user-box">
          <label className="form-label">
            Email
          </label>
          <input
            className="form-control"
            type="text"
            name="email"
            onChange={handleChange}
          />
          <p>{errors.email}</p>
          <p>{dublicatedEmailErr && dublicatedEmailErr}</p>
        </div>
        <div class="user-box">
          <label className="form-label" htmlFor="">
            Password
          </label>
          <input
            className="form-control"
            type="password"
            name="" required=""
            onChange={handleChange}
          />
          <p>{errors.password}</p>
        </div>
        <div class="user-box">
          <label className="form-label" htmlFor="">
            Confirm Password
          </label>
          <input
            className="form-control"
            type="password"
            name="confirmPassword"
            onChange={handleChange}
          />
          <p>{errors.confirmPassword}</p>
        </div>
    <button type="button" class="btn btn-dark">
      Submit
    </button>
      </form>
    </div>
    </div>
  );
};

export default Register;
