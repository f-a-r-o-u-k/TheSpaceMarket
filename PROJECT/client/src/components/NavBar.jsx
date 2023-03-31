import { useNavigate} from 'react-router-dom';
import React, { useState } from 'react'
import DayNightToggle from 'react-day-and-night-toggle'
import ToggleStyle from "./Style/ToggleStyle.css"

function NavBar({currentUser}) {
  const [isDarkMode, setIsDarkMode] = useState(localStorage.getItem('data-theme') === 'dark' ? true : false)

  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
    const newColorScheme = e.matches ? 'dark' : 'light'

    setIsDarkMode(newColorScheme === 'dark' ? true : false)
    localStorage.setItem('data-theme', newColorScheme)
    document.body.setAttribute('data-theme', localStorage.getItem('data-theme'))
  })

  const handleChangeTheme = () => {
    setIsDarkMode(!isDarkMode)
    if(!isDarkMode) {
      localStorage.setItem('data-theme', 'dark')
      document.body.setAttribute('data-theme', 'dark')
    } else {
      localStorage.setItem('data-theme', 'light')
      document.body.setAttribute('data-theme', 'light')
    }
  }
  const navigate = useNavigate;


//   const removeToken = (userToken) => {
//     localStorage.removeItem("token");
  
//     navigate('/');
// };

  return (
    <div className='navbar1'>
<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
        <img class="logo" src="https://cdn.discordapp.com/attachments/1016118253933838433/1087666993106276362/The_Space_Market.png" width="200" height="200"/>
    {/* <a class="navbar-brand">The Space Market</a> */}
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">

        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="/">Home</a>
        </li>

        <li class="nav-item">
          <a class="nav-link" href="/CreateProduct">Create My Product</a>
        </li>

        <li class="nav-item">
          <a class="nav-link" href="/giveaway">Giveaway</a>
        </li>
        
        <li class="nav-item">
          <a class="nav-link" href="/dashboard">Dashboard Admin</a>
        </li>
        
      </ul>

      <span class="nav-link">
        {/* {currentUser? */}
          <a class="login "href="/login">Login</a>
          {/* (): */}
        {/* ( <button class="login" onClick={removeToken}>Logout</button>)
        } */}
        
      </span>
      <DayNightToggle size={30} onChange={handleChangeTheme} checked={isDarkMode} />
    </div>
  </div>
</nav>
    </div>
  );
}

export default NavBar;