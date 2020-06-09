import React, { useState, useEffect } from "react";
import ListProducts from "./ListProducts";
import Breadcrumb from "./ProductPage/Breadcrumb";
import { categoria } from "../api/CategoryBase";
import StoresFilter from "./CategoryPage/StoresFilter";
import MarksFilter from "./CategoryPage/MarksFilter";
import DiscountFilter from "./CategoryPage/DiscountFilter";
import PriceFilter from "./CategoryPage/PriceFilter";

const Category = () => {
  const [arrayFilter, setArrayFilter] = useState("");

  useEffect(() => {
    return () => {
      const setProductsInArray = () => {
        setArrayFilter(categoria[0]);
      };
      setProductsInArray();
    };
  }, []);

  console.log(arrayFilter);

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <Breadcrumb categorys={arrayFilter.last} name={arrayFilter.name} />
        </div>
      </div>
      <div className="container-white row rounded">
        <div className="col-12 col-lg-3 border-right">
          <ul className="mb-4">
            <li>30 resultados</li>
          </ul>
          <PriceFilter arrayFilter={categoria[0].products} />
          <DiscountFilter arrayFilter={categoria[0].products} />
          <StoresFilter arrayFilter={categoria[0].products} />
          <MarksFilter arrayFilter={categoria[0].products} />
        </div>
        <div className="col-9">
          <ListProducts productsHome={categoria[0].products} />
        </div>
      </div>
    </div>
  );
};

export default Category;
