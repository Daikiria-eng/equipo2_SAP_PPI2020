import React from 'react';
import ReactDOM from 'react-dom';
import App from './pages/app';
import Who from './pages/we_are';
import ContactUs from './pages/contactus';
import SingUp from './pages/Signu';
import Products from './pages/products';
import Terms from './pages/terms';
import Buy from './pages/SingleProduct';
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
        <Route path="/Quienes">
          <Who />
        </Route>
        <Route path="/Registrate">
          <SingUp />
        </Route>
        <Route path="/Contactanos">
          <ContactUs />
        </Route>
        <Route exact path="/Políticas">
          <Terms />
        </Route>
        <Route path="/productos" component={Products} />
        <Route path="/comprar">
          <Buy />
        </Route>
        <Route exact path="/" component={App} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);