import React, { useState, useEffect } from "react";
//import axios from "axios";
import { postings } from "../api/category_50___1.js";
import ThumbProduct from "./ThumbProduct";

const GridProduct = () => {
  const [productsHome, setProductsHome] = useState([]);

  useEffect(() => {
    let products = postings[0].products;

    //direction
    console.log(products);
    setProductsHome(products);

    /*
    const getProducts = async () => {
      const url = "../api/category_50___1.json";
      const productsByCategory = await axios.get(url);

      setCategory(productsByCategory);
    };

    getProducts();
    */
  }, []);

  return (
    <div className="container">
      <h1 className="my-3">Ofertas!</h1>
      <div className="wrap-thumbs-products">
        {productsHome.map((product) => (
          <ThumbProduct key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default GridProduct;
