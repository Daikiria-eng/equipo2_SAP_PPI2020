import React from 'react';
import ReactDOM from 'react-dom';
import './style.scss';
import './style.css';
import App from './pages/app';
import Who from './pages/we_are';
import ContactUs from './pages/contactus';
import SignUp from './pages/Signu';
import Products from './pages/products';
import Terms from './pages/terms';
import Buy from './pages/SingleProduct';
import SignUpLike from './pages/select';
import Log_in from './pages/iniciacion';
import Abarrote from './pages/abarrotes';
import Domiciliary from './pages/domiciliary';
import Guest from './pages/main_guest';
import Search from './pages/search';
import Search_gry from './pages/search_grocery';
import Search_dlry from './pages/search_domiciliary';
import Search_kart from './pages/search_kart';
import Account from './pages/account';
import {
  BrowserRouter as Router,
  Switch,
  Route,
}
  from "react-router-dom";
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
        <Route path="/domiciliario" component={Domiciliary} />
        <Route path="/Quienes" component={Who} />
        <Route path="/iniciar" component={Log_in} />
        <Route path="/Registrate" component={SignUp} />
        <Route path="/Contactanos" component={ContactUs} />
        <Route path="/Políticas" component={Terms} />
        <Route path="/productos" component={Products} />
        <Route path="/comprar" component={Buy} />
        <Route path="/segundo" component={SignUpLike} />
        <Route path="/abarrote" component={Abarrote} />
        <Route path="/Busqueda" component={Search} />
        <Route path="/principal" component={App} />
        <Route path="/perfil" component={Account} />
        <Route path="/buscar_domiciliario" component={Search_dlry} />
        <Route path="/buscar_carrito" component={Search_kart} />
        <Route path="/buscar_abarrote" component={Search_gry} />
        <Route exact path="/" component={Guest} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);