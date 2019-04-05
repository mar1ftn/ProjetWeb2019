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
import Radial from './Components/radial'; 


import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import { Container, Row, Col } from 'reactstrap';




function Dashboard() {
  return (
    <div>
      <h1></h1>
      <Container>
      <Row>
          <Col sm="2"></Col>
          <Col xs="4" sm="4">
          <Heure/>
          <br></br><br></br>
          </Col>
          <Col xs="8" sm="4"><Weather/>
          <br></br><br></br></Col>
          <Col sm="2"></Col>
        </Row>

      
      <Row>
          <Col md="12" lg="6"><Camembert/><br></br><br></br></Col>
          <Col md="12" lg="6"><Chart/><br></br><br></br></Col>
        </Row>

        <Row>
      
          <Col sm="12" md="6"><Radial/><br></br><br></br></Col>
          <Col sm="12" md="6"><Line/><br></br><br></br></Col>
        </Row>
      
      
      </Container>
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
    <Container>
  <div>
        <Row>
          <Col xs="12" sm="6"> 
          <br></br>
          <h4>
            <Link to="/dashboard"> <div className="Select">Dashboard</div></Link>
          </h4>
          <br></br>
           </Col>
          <Col xs="12" sm="6">
          <br></br>
          <h4>
            <Link to="/formulaire"><div className="Select">Ajouter</div></Link>
          </h4>
          <br></br>
          </Col>
        </Row>
      
        {routes.map((route, i) => (
          <RouteWithSubRoutes key={i} {...route} />
        ))}
  </div>
  </Container>
  </Router>
        </header>
      </div>

    );
  }
}

export default App;
