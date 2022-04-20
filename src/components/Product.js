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

  const formatPrecio = (num) => {
    let aux = new Intl.NumberFormat("de-DE").format(num);
    return aux.toLocaleString("de-DE");
  };

  useEffect(() => {
    //console.log(postings[0]);

    setproduct(postings[0]);
  }, []);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <Breadcrumb categorys={postings[0].category} name={product.name} />
          </div>
        </div>

        <div className="container-white row rounded">
          <div className="col-12 col-lg-7 border-right">
            <Gallery
              photo_thumb={postings[0].photo_thumb}
              photo_thumb_webp={postings[0].photo_thumb_webp}
              media={postings[0].media}
              name={product.name}
            />
          </div>
          <div className="col-12 col-lg-5">
            <div className="row">
              <div className="col-12">
                <Tags tags={postings[0].tags} />
              </div>
              <div className="col-12 mt-4">
                <h6 className="text-black-50">
                  {postings[0].category[2].name}
                </h6>
                <h1 className="mb-4">{product.name}</h1>

                {/*  Stars | <a href="#!">Ver Preguntas</a>  */}
              </div>

              <div className="col-12 d-flex flex-row align-items-center">
                <span className="final-price text-success">
                  {`${postings[0].price[0].currency} ${formatPrecio(
                    postings[0].price[0].price
                  )}`}
                </span>
                {/* <span className="ribbon-discount">- 1%</span> */}
                <span className="old-price ml-3 text-black-50">
                  {postings[0].price[0].old_price !== "0" &&
                    `${postings[0].price[0].currency} ${formatPrecio(
                      postings[0].price[0].old_price
                    )}`}
                </span>
              </div>
              {
                // PRECIO EN USD
                /* 
            }
            {postings[0].price[1] && (
              <div className="col-12 d-flex flex-row align-items-center">
                <span className="final-price">
                  {`${postings[0].price[1].currency} ${formatPrecio(
                    postings[0].price[1].price
                  )}`}
                </span>

                <span className="old-price ml-3">
                  {`${postings[0].price[1].currency} ${formatPrecio(
                    postings[0].price[1].old_price
                  )}`}
                </span>
              </div>
            )}
            {
              */
              }
              <div className="col-12 border-top pt-4">
                ¡Envío gratis! en todo el país Se despacha 24 hs
                <br />1 Año de garantia oficial 10 días para cambios y
                devoluciones Conocer mas
              </div>

              <div className="col-12 border-top my-4 pt-4 d-flex align-items-center ">
                <button className="btn btn-warning btn-lg col-6" type="submit">
                  Comprar
                </button>
                <div className="col-6">
                  <AddFavorites />
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 border-top py-4">
            <Description description={postings[0].photo_desc} />
          </div>

          <div className="col-12 border-top py-4">
            <Features features={postings[0].features} />
          </div>

          <div className="col-12 border-top py-4">
            <Asks />
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
