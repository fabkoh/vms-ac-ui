import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Register from './components/Register';
import Home from './components/Home';
import Header from './components/Header';

function App() {

  return (
    <Router>
      <div className="Header">   
        <Header/>
      </div>
  
      <div className="App">
      <Switch>
          <Route exact path="/"><Home/></Route>
          <Route path="/visitor/register"><Register/></Route>
      </Switch>
      </div>
    </Router>
  );
}

export default App;
