import React from "react";
import logo from "../assets/img/logostorenx.svg";
import SearchTop from "./SearchTop";
import CategoriesTop from "./CategoriesTop";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header_area">
      <div className="row border-bottom">
        <Link to="/" className="col-2 border-right">
          <img src={logo} className="logo img-fluid m-2" alt="StoreNX" />
        </Link>
        <div className="col-4 border-right d-flex">
          <CategoriesTop />
        </div>
        <div className="col-3 border-right p-3">
          <SearchTop />
        </div>
        <Link
          to="/favorites"
          href="#!"
          className="col-1 link-header border-right p-3 d-flex align-items-center justify-content-center"
          title="Ver Favoritos"
        >
          <i className="far fa-heart"></i>
        </Link>

        <Link
          to="/MyAccount"
          href="#!"
          className="col-1 link-header border-right p-3 d-flex align-items-center justify-content-center"
          title="Mi cuenta"
        >
          <i className="far fa-user"></i>
        </Link>

        <Link
          to="/checkout"
          className="col-1 p-3 link-header d-flex align-items-center justify-content-center"
          title="Ver Carrito"
        >
          <i className="fas fa-cart-plus"></i>
        </Link>
      </div>
    </header>
  );
};

export default Header;
