import React from 'react';
import './App.css';
import {BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom';
import Index from './component/Index';
import Contact from './component/Contact';
import About from './component/About';
import Services from './component/Services';
import Login from './component/Login';


function App() {
  return (

  <Router>
    <Switch>
      <Route exact path="/">
        <Index />
      </Route>
      <Route path="/Index">
        <Index />
      </Route>
      <Route path="/Contact">
        <Contact />
      </Route>
      <Route path="/About">
        <About />
      </Route>
      <Route path="/Services">
        <Services />
      </Route>
      <Route path="/Login">
        <Login />
      </Route>
    </Switch>
  </Router>
  );
}

export default App;
