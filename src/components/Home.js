import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import visitImg from '../assets/placeholder-1.jpg';

function Home() {
    return (
      <CardDeck>
        <Card className="Cards" style={{ width: '18rem' }} bg="dark">
          <Card.Img variant="top" src={visitImg}/>
          <Card.Body>
            <Card.Title style={{color: 'white'}}>Visitor Registration</Card.Title>
            <Card.Text style={{fontSize: 'small', color: 'white'}}>
              Register a visitor using their mobile and last four digits of their NRIC. More placeholder text here for illustration.
            </Card.Text>
            <Button variant="secondary" href="/visitor/register">Start</Button>
          </Card.Body>
        </Card>
        <Card className="Cards" style={{ width: '18rem' }} bg="dark" border="dark">
          <Card.Img variant="top" src={visitImg}/>
          <Card.Body>
            <Card.Title style={{color: 'white'}}>Visitor Registration</Card.Title>
            <Card.Text style={{fontSize: 'small', color: 'white'}}>
              Register a visitor using their mobile and last four digits of their NRIC. More placeholder text here for illustration.
            </Card.Text>
            <Button variant="secondary" href="/visitor/register">Start</Button>
          </Card.Body>
        </Card>
        <Card className="Cards" style={{ width: '18rem' }} bg="dark" border="dark">
          <Card.Img variant="top" src={visitImg}/>
          <Card.Body>
            <Card.Title style={{color: 'white'}}>Visitor Registration</Card.Title>
            <Card.Text style={{fontSize: 'small', color: 'white'}}>
              Register a visitor using their mobile and last four digits of their NRIC. More placeholder text here for illustration.
            </Card.Text>
            <Button variant="secondary" href="/visitor/register">Start</Button>
          </Card.Body>
        </Card>
      </CardDeck>
    )
}

export default Home
