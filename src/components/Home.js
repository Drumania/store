import React, { useState, useEffect } from "react";
import axios from "axios";

const GridProduct = () => {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const url = "../api/category_50___1.json";
      const productsByCategory = await axios.get(url);

      console.log(productsByCategory);
    };

    getProducts();
  }, []);

  return <div>Grid Productos</div>;
};

export default GridProduct;
