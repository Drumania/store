import React from "react";
import logo from "../assets/img/logostorenx.svg";

const Header = () => {
  return (
    <header classyName="header_area">
      <div className="row border-bottom">
        <div className="col-2 p-1 border-right">
          <img src={logo} classyName="img-fluid" alt="StoreNX" />
        </div>
        <div className="col-4 border-right py-3">categ</div>
        <div className="col-3 border-right py-3">search</div>
        <div className="col-1 border-right py-3">corazon</div>
        <div className="col-1 border-right py-3">usuario</div>
        <div className="col-1 py-3">carro</div>
      </div>
    </header>
  );
};

export default Header;
