import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./components/Home";
import Checkout from "./components/Checkout";
import MyAccount from "./components/MyAccount";
import Product from "./components/Product";
import Category from "./components/Category";
import CuotasSinInteres from "./components/CuotasSinInteres";
import Favorites from "./components/Favorites";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        {/* <Route path="/product:id" children={Product} /> */}
        <Route path="/product" component={Product} />
        <Route path="/category" component={Category} />
        <Route path="/cuotas-sin-interes" component={CuotasSinInteres} />
        <Route path="/favorites" component={Favorites} />
        <Route path="/MyAccount" component={MyAccount} />
        <Route path="/Checkout" component={Checkout} />
        <Route path="/" component={Home} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
