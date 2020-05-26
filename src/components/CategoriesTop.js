import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

const CategoriesTop = () => {
  const categories = ["Categorias", "Cuotas sin interés", "Ofertazas"];
  return (
    <Router>
      {categories.map((item) => (
        <Link
          to="/category"
          key={Object.keys(item)}
          href="#!"
          className="d-flex align-items-center justify-content-start
          pr-3"
        >
          {item}
        </Link>
      ))}
    </Router>
  );
};

export default CategoriesTop;
