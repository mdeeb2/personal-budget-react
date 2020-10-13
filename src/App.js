import React from 'react';

import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


import Menu from './Menu/Menu';
import Hero from './Hero/Hero';
import HomePage from './HomePage/HomePage';
import Footer from './Footer/Footer';
import AboutPage from './AboutPage/AboutPage';
import Login from './Login/Login';




function App() {
  return (
    <Router >
      <Menu/>
      <Hero/>

      <div className="mainContainer">

<Switch>
      <Route path = "/about">
        <AboutPage></AboutPage>
      </Route>
      <Route path = "/login">
        <Login></Login>
      </Route>
      <Route path = "/about">
        <AboutPage></AboutPage>
      </Route>
      



</Switch>

      </div>
      <HomePage/>
      <Footer/>
    </Router>
  );
}

export default App;
