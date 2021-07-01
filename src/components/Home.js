import Header from './Header';
import Button from 'react-bootstrap/Button';
import { Container, Row, Col } from 'react-bootstrap';
import { BrowserRouter as Link } from 'react-router-dom';

function Home() {
    return (
        <div>
        <Container align="center">
            <Row>
              <Col><Header /></Col>
            </Row>
            <Row>
              <Col><br></br></Col>
            </Row>
            <Row>
              <Col><Link to="/register"><Button>Register a visitor</Button></Link></Col>
            </Row>
        </Container>
        </div>
    )
}

export default Home
