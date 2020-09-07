import React from 'react';
import ReactDOM from 'react-dom';
import App from './pages/app';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
/*const BrowserRouter = require("react-router-dom").BrowserRouter;
const Route = require("react-router-dom").Route;
const Link = require("react-router-dom").Link;*/
//space
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route path="/">
          <App />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);