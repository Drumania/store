import React from "react";

const thumbProduct = ({ product }) => {
  return (
    <div className="single-product-wrapper p-3" id={product.id}>
      <div className="product-img">
        <img src={product.photo_thumb} alt={product.name} />

        <img className="hover-img" src={product.photo} alt={product.name} />

        <div className="product-favourite">
          <a href="#!" className="favme">
            <i className="far fa-heart"></i>
          </a>
        </div>
      </div>

      <div className="product-description">
        <span>{product.category}</span>
        <a href="#!">
          <h6>{product.name}</h6>
        </a>
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
  );
};

export default thumbProduct;
