import React from 'react'
import './Sidebar.css';
import DashboardIcon from '@mui/icons-material/Dashboard';


import {SidebarData} from "./SidebarData";

const Sidebar = () => {

  return (
    <div className='Sidebar'>
      <img className='img2' src='https://cdn.discordapp.com/attachments/1044204471049265185/1088729918432616538/The_Space_Market.png'/>
      <h8 className='admin1' > 
      Dashboard 
      </h8>
      <hr/>
      <ul className='SidebarList'>
      {SidebarData.map((val, key)=>{
      return (
        <li key={key}  

        className='row'
        id={window.location.pathname === val.Link ? "active" : "" }
        onClick={()=> {window.location.pathname= val.Link}}> 
        <div id='icon'>{val.icon}</div>
        <div id='title'>{val.title}</div>
        </li>

      )}
      )}
      </ul>
      <main></main>
      </div>
  )
}

export default Sidebar