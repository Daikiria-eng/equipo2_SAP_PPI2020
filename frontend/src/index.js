import React from 'react';
import ReactDOM from 'react-dom';
import './styles.scss';
import './style.css';
import App from './pages/app';
import Who from './pages/we_are';
import ContactUs from './pages/contactus';
import SignUp from './pages/Signu';
import Products from './pages/products';
import Terms from './pages/terms';
import Buy from './pages/SingleProduct';
import SignUpLike from './pages/select';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
/*const BrowserRouter = require("react-router-dom").BrowserRouter;
const Route = require("react-router-dom").Route;
const Link = require("react-router-dom").Link;*/
/*
#########################################################################
    ____________       _______      ___       ___    ___     ___   __
   |   _____ _  \     /   _   \    |   \     |   |  |   |   /  /  |  |
   |  |       \  \   /   / \   \   |    \    |   |  |   |  /  /   |  |
   |  |        | |  /   /   \   \  |     \   |   |  |   | /  /    |  |
   |  |_______/  |  |   |    |  |  |      \  |   |  |   |/  /     |  |
   |    _    ___/   |   |____|  |  |       \ |   |  |      \      |  |
   |   | \   \      |           |  |   |\   \|   |  |   |\  \     |  | 
   |   |  \   \     |   ______  |  |   | \       |  |   | \  \    |__|
   |   |   \   \    |   |     | |  |   |  \      |  |   |  \  \    __
   |___|    |___|   |___|     |_|  |___|   \ ____|  |___|   \__\  |__|
##########################################################################
*/
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path="/Quienes" component={Who} />
        <Route exact path="/Registrate" component={SignUp} />
        <Route exact path="/Contactanos" component={ContactUs} />
        <Route exact path="/Políticas" component={Terms} />
        <Route exact path="/productos" component={Products} />
        <Route exact path="/comprar" component={Buy} />
        <Route exact path="/segundo" component={SignUpLike} />
        <Route exact path="/" component={App} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);