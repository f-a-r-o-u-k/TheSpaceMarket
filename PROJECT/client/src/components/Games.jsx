import React from 'react'
import NavBar from './NavBar'
import AllProductStyle from "./Style/AllProductStyle.css"

function Games() {
  return (
    <div>
      <NavBar/>
      <div class="container mt-2">
        
  <div class="row">
    <div class="col-md-3 col-sm-6 item">
      <div class="card item-card card-block">
      <h4 class="card-title text-right"><i class="material-icons">Games</i></h4>
    <img src="https://media.discordapp.net/attachments/1044204471049265185/1090908386880663552/318391159_5715985345154780_1195718147676461592_n.jpg" alt="Photo of sunset"/>
        <h5 class="item-card-title mt-3 mb-3">FIFA 21 | ps4</h5>
        <button>Buy</button>
        <br/>
  </div>
    </div>
    <div class="col-md-3 col-sm-6 item">
      <div class="card item-card card-block">
      <h4 class="item-card-title text-right"><i class="material-icons">Games</i></h4>
    <img src="https://media.discordapp.net/attachments/1044204471049265185/1090908387312668712/332129023_6310862712309021_2724183742415417616_n.jpg" alt="Photo of sunset"/>
        <h5 class="card-title  mt-3 mb-3">Red Dead Redemption | ps4</h5>
        <button>Buy</button>
        <br/>
  </div>
    </div>
    <div class="col-md-3 col-sm-6 item">
      <div class="card item-card card-block">
      <h4 class="item-card-title text-right"><i class="material-icons">Games</i></h4>
    <img src="https://media.discordapp.net/attachments/1044204471049265185/1090908386343788636/317170184_5804190689648238_2421508054785029423_n.jpg?width=351&height=468" alt="Photo of sunset"/>
        <h5 class="card-title  mt-3 mb-3">Forza 6 | Xbox</h5>
        <button>Buy</button>
        <br/>
  </div>
    </div>
    <div class="col-md-3 col-sm-6 item">
      <div class="card item-card card-block">
      <h4 class="item-card-title text-right"><i class="material-icons">Games</i></h4>
    <img src="https://media.discordapp.net/attachments/1044204471049265185/1090961657066430484/328823295_8767995186605972_4577649834412401987_n.jpg?width=351&height=468" alt="Photo of sunset"/>
        <h5 class="card-title  mt-3 mb-3"> GTA5 | Xbox one</h5>
        <button>Buy</button>
        <br/>
  </div>
  </div>        
  <div class="col-md-3 col-sm-6 item">
      <div class="card item-card card-block">
      <h4 class="item-card-title text-right"><i class="material-icons">Games</i></h4>
    <img src="https://cf.shopee.com.my/file/27ec9f98b29b4239e4566edf81ecf8d8" alt="Photo of sunset"/>
        <h5 class="card-title  mt-3 mb-3">God of War | Ps4</h5>
        <button>Buy</button>
        <br/>
  </div>
  </div>        
  </div>
</div>

    </div>
  )
}

export default Games