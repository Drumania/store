import React from "react";
import logo from "../assets/img/logostorenx.svg";
import SearchTop from "./SearchTop";
import CategoriesTop from "./CategoriesTop";

const Header = () => {
  return (
    <header className="header_area">
      <div className="row border-bottom">
        <div className="col-2 border-right">
          <img src={logo} className="img-fluid p-2" alt="StoreNX" />
        </div>
        <div className="col-4 border-right d-flex">
          <CategoriesTop />
        </div>
        <div className="col-3 border-right p-3">
          <SearchTop />
        </div>
        <a
          href="#!"
          className="col-1 border-right p-3 d-flex align-items-center justify-content-center"
          title="Ver Favoritos"
        >
          <i className="far fa-heart"></i>
        </a>
        <a
          href="#!"
          className="col-1 border-right p-3 d-flex align-items-center justify-content-center"
          title="Mi cuenta"
        >
          <i className="far fa-user"></i>
        </a>
        <a
          href="#!"
          className="col-1 p-3 d-flex align-items-center justify-content-center"
          title="Ver Carrito"
        >
          <i className="fas fa-cart-plus"></i>
        </a>
      </div>
    </header>
  );
};

export default Header;
