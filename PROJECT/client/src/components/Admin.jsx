import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import React from 'react';
import axios from 'axios';


const Admin = () => {
  const [adminData, setadminData] = useState({
    Email: '',
    assword: '',
  });

  const handleChange = (e) => {
    setadminData({
      ...adminData,
      [e.target.admin]: e.target.value,
    });
  };

  const [errors, setErrors] = useState({});
  const [emailNotFoundErr, setEmailNotFoundErr] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8000/api/createadmin', adminData, {
        withCredentials: true,
      })
      .then((res) => {
        localStorage.setItem('token', res.data.token);
        navigate('/admin');
      })
      .catch((err) => {
        // console.log('*********************', err.response.data);
        setEmailNotFoundErr(err.response.data.msg);
        const errResponse = err.response.data.errors;
        console.log(errResponse);
        const errObj = {};
        // for (const key of Object.keys(errResponse)) {
        //   errObj[key] = errResponse[key].message;
        // }
        // setErrors(errObj);
      });
  };


    return(   
      <div>
      <h1 className='admin' >Login Admin</h1>
      <br/>
      <form onSubmit={handleSubmit}>
        <div>
          <label  htmlFor="">
            Email
          </label><br/>
          <input
            type="text"
            name="email"
            onChange={handleChange}
          />
          <p>{errors.email}</p>
          <p>{emailNotFoundErr && emailNotFoundErr}</p>
        </div>
        <div>
          <label  htmlFor="">
            Password
          </label><br/>
          <input
            type="password"
            name="password"
            onChange={handleChange}
          />
          <p>{errors.password}</p>
          {/* <label className="form-label" htmlFor="">
            Code Admin
          </label>
          <input
            className="form-control"
            type="password"
            name="password"
            onChange={handleChange}
          />
          <p>{errors.password}</p> */}
        </div>
        <br/>
        <button type="submit" value="Login" className="btn btn-primary">submit</button>
      </form>
    </div>  
    );
}

export default Admin;