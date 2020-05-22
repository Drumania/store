import React from "react";

const CategoriesTop = () => {
  const categories = ["Categorias", "Cuotas sin interés", "Ofertazas"];
  return (
    <>
      {categories.map((item) => (
        <a
          key={Object.keys(item)}
          href="#!"
          className="d-flex align-items-center justify-content-start pr-3"
        >
          {item}
        </a>
      ))}
    </>
  );
};

export default CategoriesTop;
