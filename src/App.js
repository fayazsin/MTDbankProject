import './App.css';
import React from "react";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import ScrollToTop from 'react-scroll-to-top';
import Home from "./home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Register from './register/Register';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route path="/register" component={Register} />
          <Route path="/" component={Home} />
        </Switch>
        <Footer />
        <ScrollToTop smooth color="red"
        />
      </div>
    </Router>
  );
}

export default App;
