import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Button from 'react-bootstrap/Button';
import { Container, Row, Col } from 'react-bootstrap';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import Register from './Register';

function App() {
  return (
    <Router>
      <div className="App-header">
          <Container align="center">
            <Row>
              <Col><Header /></Col>
            </Row>
            <Row>
              <Col><br></br></Col>
            </Row>
            <Row>
              <Col><Link to="/register">Register a visitor</Link></Col>
            </Row>
        </Container>
      <Switch>
        <Route path="/register"><Register/></Route>
      </Switch>
      </div>
    </Router>
  );
}

export default App;
