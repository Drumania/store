import React, { useState, useEffect } from "react";
//import axios from "axios";
import Hero from "./Hero";
import { postings } from "../api/category_50___1.js";
import ListProducts from "./ListProducts";
import Brands from "./Brands";

const GridProduct = () => {
  const [productsHome, setProductsHome] = useState([]);

  useEffect(() => {
    let products = postings[0].products;

    //console.log(products);
    setProductsHome(products);
    /*
    const getProducts = async () => {
      const url = "store.com/api/category.php?=televisores&pageinit=21&pageend=40";
      const productsByCategory = await axios.get(url);

      setCategory(productsByCategory);
    };

    getProducts();
    */
  }, []);

  return (
    <div className="container-fluid">
      <Hero />
      <Brands />
      <h2 className="my-3 section-heading">Ofertas!</h2>
      <ListProducts productsHome={productsHome} />
    </div>
  );
};

export default GridProduct;
