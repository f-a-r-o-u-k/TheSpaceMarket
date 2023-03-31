import Carousel from 'react-bootstrap/Carousel';

function Home() {
  return (
    <Carousel>
      <Carousel.Item interval={1200}>
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
      <Carousel.Item interval={1900}>
        <img
        id='img'
          className="d-block w-100"
          src="https://media.discordapp.net/attachments/990633062280876035/1087674356932558858/maxresdefault.jpg?width=832&height=468"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Pc</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1900}>
        <img id='img'
          className="d-block w-100"
          src="https://media.discordapp.net/attachments/990633062280876035/1087675183780859914/fb462cfc55c2fa522b65ee4c8a437164.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Games</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Home;