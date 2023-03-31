import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import ContactStyle from "./Style/ContactStyle.css"


function Contact() {
  return (
    <div className='Contact1'>
    <h1>Contact Us</h1>
    <div className='Contact'>
        <img class="avatar" src="https://cdn.discordapp.com/attachments/1016118253933838433/1087666993106276362/The_Space_Market.png" alt=""/>
        <a href="https://www.youtube.com" >
          <img class="icon1" src="https://img.icons8.com/nolan/256/youtube-play.png" alt="YouTube logo"/>
        </a>
        <a href="https://www.facebook.com" >
          <img class="icon1" src="https://img.icons8.com/nolan/256/facebook.png" alt="facebook logo"/>
        </a>
        <a href="https://www.linkedin.com" >
          <img class="icon1" src="https://img.icons8.com/nolan/256/linkedin.png" alt="linkedin logo"/>
        </a>
        <a href="https://github.com/f-a-r-o-u-k" >
          <img class="icon1" src="https://img.icons8.com/nolan/256/github.png" alt="github logo"/>
        </a>

        <a href="https://twitter.com" >
          <img class="icon1" src="https://img.icons8.com/nolan/256/twitter.png" alt="twitter logo"/>
        </a>
        <a href="https://discord.gg/77h7cVHAm2" >
          <img class="icon1" src="https://img.icons8.com/nolan/256/discord-logo.png" alt="discord logo"/>
        </a>
        <br/>
    </div>
    </div>
  )
}

export default Contact