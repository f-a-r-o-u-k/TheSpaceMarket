import {useState,useEffect} from 'react';
import React from 'react';
import Sidebar from './Sidebar';
import axios from 'axios';
import { Link } from 'react-router-dom';


const Dashboard = () => {
  const[AllUser, setAllUser]= useState([])
  const [isLoading, setIsLoading] = useState(true);
  console.log(AllUser , ("***************"));

  useEffect (()=>{
        axios.get('http://127.0.0.1:8000/api/users')
        .then(res => {
            console.log(res.data);
            setAllUser(res.data);
            setIsLoading(false);
        })
        .catch(err => console.log(err))
    },[]);
    const hadleDelete = (id) => {
      axios.delete('http://127.0.0.1:8000/api/deleteOneproduct/'+id)
      .then (res => {
          console.log(res.data)
          console.log("Delete Succesfully")
          setAllUser(AllUser.users.filter((user)=> user._id !== id))
          })
      .catch(err => console.log(err))   
      }

  return (
    <div style={{display:"flex", backgroundColor:"#F5F5F5"}}>
        <Sidebar/>
        <table class="table">
  <thead>
    <tr>
      <th scope="col">#id</th>
      <th scope="col">Email</th>
      <th scope="col"></th> 
    </tr>
  </thead>
  <tbody>
  {AllUser.users? AllUser.users.map((user)=>{

                return(
            <tr key={user._id}>
            <td>{user._id}</td>
            <td>{user.email}</td>
            <td>
      <button class="btn btn-outline-primary">Profil</button><br/><br/>
      <Link><button onClick={()=>hadleDelete(user._id)} className="btn btn-outline-danger">Delete</button> </Link>
      </td>
    </tr>
    )}): isLoading}
  </tbody>
</table>
    </div>
  
  )
}

export default Dashboard