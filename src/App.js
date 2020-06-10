import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
} from "react-router-dom";

import Header from "./components/Header";
import CustomRouter from "./components/CustomRouter";
import Home from "./components/Home";
import Checkout from "./components/Checkout";
import MyAccount from "./components/MyAccount";
import Product from "./components/Product";
import Category from "./components/Category";
import CuotasSinInteres from "./components/CuotasSinInteres";
import Favorites from "./components/Favorites";
import Footer from "./components/Footer";

export default function ParamsExample() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/product" component={Product} />
        <Route path="/category" component={Category} />
        <Route path="/cuotas-sin-interes" component={CuotasSinInteres} />
        <Route path="/favorites" component={Favorites} />
        <Route path="/MyAccount" component={MyAccount} />
        <Route path="/Checkout" component={Checkout} />
        <Route path="/:id" children={<Child />} />
        <Route path="/" component={Home} />
      </Switch>
      <Footer />
    </Router>
  );
}

function Child() {
  let { id } = useParams();
  return <CustomRouter slug={id} />;
}
