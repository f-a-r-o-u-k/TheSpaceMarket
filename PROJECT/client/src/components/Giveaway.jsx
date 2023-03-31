import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';

function Giveaway() {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <img
        id='img'
          className="d-block w-100"
          src="https://cdn.discordapp.com/attachments/1044204471049265185/1087644507480277002/Purple_Modern_Headphone_Giveaway_Instagram_Post.png"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Giveaway</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img id='img'
          className="d-block w-100"
          src="https://trackercdn.com/ghost/images/2023/1/261743_fortnite-february-crew-pack-sylvie.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Games</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
        id='img'
          className="d-block w-100"
          src="https://images.complex.com/complex/images/c_fill,dpr_auto,f_auto,q_90,w_1400/fl_lossy,pg_1/mj0qcikmxy9yedibdlqa/funko-pop"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Gaming Room Accessories</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}


export default Giveaway