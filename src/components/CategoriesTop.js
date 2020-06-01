import React from "react";
import { Link } from "react-router-dom";

const CategoriesTop = () => {
  const categories = [
    { name: "Categorias", url: "/category" },
    { name: "Cuotas sin interes", url: "/cuotas-sin-interes" },
    { name: "Ofertas", url: "/category" },
  ];

  return (
    <>
      {categories.map((item) => (
        <Link
          to={item.url}
          key={item.name}
          className="d-flex align-items-center justify-content-start
          pr-3"
        >
          {item.name}
        </Link>
      ))}
    </>
  );
};

export default CategoriesTop;
