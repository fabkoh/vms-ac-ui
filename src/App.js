import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Register from './components/Register';
import Home from './components/Home';
import Header from './components/Header';
import QrCodeDisplay from './components/QrCodeDisplay';
import RegisterSuccess from './components/RegisterSuccess';

function App() {

  return (
    <Router>
      <div className="Header">   
        <Header/>
      </div>
  
      <div className="App">
      <Switch>
          <Route exact path="/"><Home/></Route>
          <Route exact path="/visitor/register"><Register/></Route>
          <Route exact path="/visitor/qrcode"><QrCodeDisplay/></Route>
          <Route exact path="/visitor/registration-complete"><RegisterSuccess/></Route>
      </Switch>
      </div>
    </Router>
  );
}

export default App;
