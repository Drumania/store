import React from "react";
import ListProducts from "./ListProducts";
import Breadcrumb from "./ProductPage/Breadcrumb";
import { cuotasSinInterest } from "../api/CuotasSinInteres";

const CuotasSinInteres = () => {
  //console.log(cuotasSinInterest[0].last);
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <Breadcrumb
            categorys={cuotasSinInterest[0].last}
            name={cuotasSinInterest[0].name}
          />
        </div>
      </div>
      <div className="container-white row rounded">
        <div className="col-12 col-lg-3 border-right">sidebar</div>
        <div className="col-9">
          <ListProducts productsHome={cuotasSinInterest[0].products} />
        </div>
      </div>
    </div>
  );
};

export default CuotasSinInteres;
