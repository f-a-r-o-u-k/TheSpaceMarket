import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function Cards({currentUser}) {
  return (
    <div className='cards'>
      <div>
      <img className="top" src="https://media.discordapp.net/attachments/990633062280876035/1086649136339755140/images_1.jpg" />
      <Card.Body>
        <br/>
        <Card.Title>Pc</Card.Title>
        <br/>
        </Card.Body>
      {currentUser? (<Link to={"/product/pc"}><Button variant="primary">join</Button></Link>
      ) :null}
      </div> 

      <div>
      <img className="top" src="https://media.discordapp.net/attachments/990633062280876035/1086649136553676872/playstation-5-xbox-series-x-nintendo-switch-HD-scaled.jpg?width=702&height=468" />
      <Card.Body>
        <br/>
        <Card.Title>Console</Card.Title>
        <br/>
        <Link to={"/product/console"}><Button variant="primary">join</Button></Link>
      </Card.Body>
      </div>

      <div>
      <img className="top" src="https://media.discordapp.net/attachments/990633062280876035/1086649136109076621/data.jpeg" />
      <Card.Body>
      <br/>
        <Card.Title>Games</Card.Title>
        <br/>
        <Link to={"/product/games"}><Button variant="primary">join</Button></Link>
      </Card.Body>
      </div>
    </div>
  );
}

export default Cards;