import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Chart from './Components/chart';
import Camembert from './Components/doughnut'; 
import Formu from './Components/formu'; 
import Scatter from './Components/points'; 
import Line from './Components/line'; 
import Weather from './Components/meteo'; 
import Heure from './Components/heure'; 

import {BrowserRouter as Router, Route, Link} from "react-router-dom";



function Dashboard() {
  return (
    <div>
      <h1></h1>
      <Camembert/>
      <Scatter/>
      <Line/>
      <Heure/>
      <Weather/>
      <Chart/>
    </div>
  );
}

function Formulaire() {
  return (
  <div>        <Formu/>
  </div>);
}



const routes = [
  {
    path: "/formulaire",
    component: Formulaire
  },
  {
    path: "/dashboard",
    component: Dashboard,
  }
];

// wrap <Route> and use this everywhere instead, then when
// sub routes are added to any route it'll work
function RouteWithSubRoutes(route) {
  return (
    <Route
      path={route.path}
      render={props => (
        // pass the sub-routes down to keep nesting
        <route.component {...props} routes={route.routes} />
      )}
    />
  );
}


class App extends Component {
  render() {
    return (
      <div>
        <header className="Font">
        <img src={logo} className="App-logo" alt="logo" />
  <Router>
  <div>
      
      <h4>
        <br/>
            <Link to="/dashboard"> <div className="Select">Dashboard</div></Link>
      </h4>


      <h4>
            <Link to="/formulaire"><div className="Select">Ajout Skiable</div></Link>
      </h4>
  

        {routes.map((route, i) => (
          <RouteWithSubRoutes key={i} {...route} />
        ))}
  </div>
  </Router>
        </header>
      </div>

    );
  }
}

export default App;
