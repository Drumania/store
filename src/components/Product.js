import React, { useEffect, useState } from "react";
import { postings } from "../api/product_11626.js";

import Breadcrumb from "./ProductPage/Breadcrumb";
import Tags from "./ProductPage/Tags";
import Gallery from "./ProductPage/Gallery";
import AddFavorites from "./ProductPage/AddFavorites";
import Description from "./ProductPage/Description";
import Features from "./ProductPage/Features";
import Asks from "./ProductPage/Asks";

const Product = () => {
  const [product, setproduct] = useState({});

  useEffect(() => {
    console.log(postings[0]);
    setproduct(postings[0]);
  }, []);

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 col-lg-6">
          <Breadcrumb categorys={postings[0].category} name={product.name} />
        </div>
        <div className="col-12 col-lg-6">
          <Tags tags={postings[0].tags} />
        </div>
      </div>

      <div className="container-white row rounded">
        <div className="col-12 col-lg-6">
          <Gallery />
        </div>
        <div className="col-12 col-lg-6">
          <div className="row">
            <div className="col-12">
              <h1>{product.name}</h1>
              <h2 className="text-secondary">{}</h2>
              Stars | <a href="#!">Ver Preguntas</a>
            </div>
            <div className="col-12 d-flex flex-row align-items-center">
              <span className="final-price">$ 24.693</span>
              {/* <span className="ribbon-discount">- 1%</span> */}
              <span className="old-price ml-3">$ 24.999</span>
            </div>

            <div className="col-12 border-top pt-4">
              ¡Envío gratis! en todo el país Se despacha 24 hs
              <br />1 Año de garantia oficial 10 días para cambios y
              devoluciones Conocer mas
            </div>

            <div className="col-12 border-top mt-4 pt-4 d-flex align-items-center ">
              <button className="btn btn-warning btn-lg col-6" type="submit">
                Comprar
              </button>
              <div className="col-6">
                <AddFavorites />
              </div>
            </div>
          </div>
        </div>

        <div className="col-12">
          <hr />
          <Description />

          <hr />
          <Features />

          <hr />
          <Asks />
        </div>
      </div>
    </div>
  );
};

export default Product;
