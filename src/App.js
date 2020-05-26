import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./components/Home";
import Checkout from "./components/Checkout";
import MyAccount from "./components/MyAccount";
import Product from "./components/Product";
import Category from "./components/Category";
import Favorites from "./components/Favorites";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/product">
          <Product />
        </Route>
        <Route path="/category">
          <Category />
        </Route>
        <Route path="/favorites">
          <Favorites />
        </Route>
        <Route path="/MyAccount">
          <MyAccount />
        </Route>
        <Route path="/checkout">
          <Checkout />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
