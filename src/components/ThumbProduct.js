import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

const thumbProduct = ({ product }) => {
  return (
    <Router>
      <div className="single-product-wrapper p-3" id={product.id}>
        <div className="product-img">
          <img src={product.photo_thumb} alt={product.name} />

          <img className="hover-img" src={product.photo} alt={product.name} />

          <div className="product-favourite">
            <a href="#!" className="favme" title="Agregar a Mis Favoritos">
              <i className="far fa-heart"></i>
            </a>
          </div>
        </div>

        <div className="product-description">
          <span>{product.category}</span>
          <Link to="/product">
            <h6>{product.name}</h6>
          </Link>
          <p className="product-price">{`$ ${product.price}`}</p>

          <div className="hover-content">
            <div className="add-to-cart-btn">
              <a href="#!" className="btn essence-btn">
                Agregar al carrito
              </a>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default thumbProduct;
