import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Register from './components/Register';
import Home from './components/Home';
import { Button } from 'react-bootstrap';

function App() {

  return (
    <Router>
      <div className="App-header">
        <Link to="/register"><Button>Register a visitor</Button></Link>
      
      <Switch>
        <Route exact path="/"><Home/></Route>
        <Route path="/register"><Register/></Route>
      </Switch>
      </div>
    </Router>
  );
}

export default App;
