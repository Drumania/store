import React from "react";
import { CategoryBase } from "../api/CategoryBase.js";
import ListProducts from "./ListProducts";
import Breadcrumb from "./ProductPage/Breadcrumb";
import StoresFilter from "./CategoryPage/StoresFilter";
import MarksFilter from "./CategoryPage/MarksFilter";
import DiscountFilter from "./CategoryPage/DiscountFilter";
import PriceFilter from "./CategoryPage/PriceFilter";

const Category = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <Breadcrumb
            categorys={CategoryBase[0].last}
            name={CategoryBase[0].name}
          />
        </div>
      </div>
      <div className="container-white row rounded">
        <div className="col-12 col-lg-3 border-right">
          <ul className="mb-4">
            <li>30 resultados</li>
          </ul>
          <PriceFilter arrayFilter={CategoryBase[0].products} />
          <DiscountFilter arrayFilter={CategoryBase[0].products} />
          <StoresFilter arrayFilter={CategoryBase[0].products} />
          <MarksFilter arrayFilter={CategoryBase[0].products} />
        </div>
        <div className="col-9">
          <ListProducts productsHome={CategoryBase[0].products} />
        </div>
      </div>
    </div>
  );
};

export default Category;
