import React from "react";
import ThumbProduct from "./ThumbProduct";

const ListProducts = ({ productsHome }) => {
  return (
    <div className="wrap-thumbs-products">
      {productsHome.map((product) => (
        <ThumbProduct key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ListProducts;
