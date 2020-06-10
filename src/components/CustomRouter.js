import React from "react";
import { BrowserRouter as Router, useParams } from "react-router-dom";
import { masterpage } from "../api/masterpage";

import Product from "./Product";
import Category from "./Category";
import NofoundPage from "./NofoundPage";

const CustomRouter = () => {
  let { id } = useParams();

  let idProduct = masterpage[0].products.filter((item) => item.name === id);
  let idCategory = masterpage[0].categories.filter((item) => item.name === id);

  //console.log(idProduct.length);
  //console.log(idCategory.length);

  return (
    <Router>
      {/* <h3>ID: {id}</h3> */}
      {idProduct.length > 0 ? <Product /> : " "}
      {idCategory.length > 0 ? <Category /> : " "}
      {idCategory.length === 0 ? <NofoundPage /> : " "}
    </Router>
  );
};

export default CustomRouter;
