import React from "react";
import ListProducts from "./ListProducts";
import Breadcrumb from "./ProductPage/Breadcrumb";
import { categoria } from "../api/CategoryBase";

const Category = () => {
  //console.log(categoria[0].last);
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <Breadcrumb categorys={categoria[0].last} name={categoria[0].name} />
        </div>
      </div>
      <div className="container-white row rounded">
        <div className="col-12 col-lg-3 border-right">
          <ul className="mb-4">
            <li>36 resultados</li>
          </ul>

          <ul className="mb-4">
            <li>
              <h4>Tiendas </h4>
            </li>
            <li>
              <a href="#!">Makkax</a>
            </li>
            <li>
              <a href="#!">Harse</a>
            </li>
            <li>
              <a href="#!">Intex</a>
            </li>
          </ul>

          <ul className="mb-4">
            <li>
              <h4>Marcas</h4>
            </li>
            <li>
              <a href="#!">Samsung</a>
            </li>
            <li>
              <a href="#!">Philips</a>
            </li>
            <li>
              <a href="#!">Sanyo</a>
            </li>
          </ul>

          <ul className="mb-4">
            <li>
              <h4>Descuento</h4>
            </li>
            <li>
              <a href="#!">40 %</a>
            </li>
            <li>
              <a href="#!">27 %</a>
            </li>
            <li>
              <a href="#!">10 %</a>
            </li>
          </ul>

          <ul className="mb-4">
            <li>
              <h4>Precio</h4>
            </li>
            <li>
              <a href="#!">Hasta $ 20.000</a>
            </li>
            <li>
              <a href="#!">$20.000 a $60.000</a>
            </li>
            <li>
              <a href="#!">Más de $60.000</a>
            </li>
          </ul>

          <ul className="mb-4">
            <li>
              <h4>Productos Seleccionados</h4>
            </li>
            <li>
              <a href="#!">Tele 1</a>
            </li>
          </ul>
        </div>
        <div className="col-9">
          <ListProducts productsHome={categoria[0].products} />
        </div>
      </div>
    </div>
  );
};

export default Category;
