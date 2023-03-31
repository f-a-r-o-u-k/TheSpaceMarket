import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


function CardsGive() {
  return (
    <div className='cards'>
    <div>
    <img className="top" src="https://cdn.discordapp.com/attachments/1044204471049265185/1088090418354335844/1649148659217.jpg" />
    <Card.Body>
      <br/>
      <Card.Title> Gaming Room Accessories</Card.Title>
      <br/>
      </Card.Body>
    </div> 

    <div>
    <img className="top" src="https://cdn.discordapp.com/attachments/1044204471049265185/1088090578568359966/bigstock-Montreal-Canada-April-360285913-768x531.jpg" />
    <Card.Body>
      <br/>
      <Card.Title>GIFT CARD</Card.Title>
      <br/>
      <Button variant="primary"><Link className='join' to="/form/giveaway" > join</Link> </Button>
    </Card.Body>
    </div>

    <div>
    <img className="top" src="https://cdn.discordapp.com/attachments/1044204471049265185/1088091260100812861/images_2.jpg" />
    <Card.Body>
    <br/>
      <Card.Title>SKINS | CASH</Card.Title>
      <br/>
    </Card.Body>
    </div>
  </div>
  )
}

export default CardsGive