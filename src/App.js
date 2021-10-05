import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './components/Home/Home';
import AboutUs from './components/AboutUs/AboutUs';
import Services from './components/Services/Services';
import Speciallity from './components/Speciallity/Speciallity';
import NotFound from './components/NotFound/NotFound';
import Homes from './components/Homes/Homes';
import Specialities from './components/Specialities/Specialities';

function App() {
  return (
    <div className="App">
      <h1 className="web-name">Binary Ict Care</h1>
      <Router>
        <Header></Header>
        <Switch>
          <Route path='/home'>
            <Homes></Homes>
          </Route>
          <Route path='/aboutUs'>
            <AboutUs></AboutUs>
          </Route>
          <Route path='/services'>
            <Services></Services>
          </Route>
          <Route path='/speciallity'>
            <Specialities></Specialities>
          </Route>
          <Route exact path='/'>
            <Homes></Homes>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>

      </Router>


    </div>
  );
}

export default App;
