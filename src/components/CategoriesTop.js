import React from "react";
import { Link } from "react-router-dom";

const CategoriesTop = () => {
  const categories = [
    {
      name: "Categorias",
      url: "/category",
      subCateory: [
        { name: "Televisores", url: "/Televisores" },
        { name: "Piletas", url: "/Piletas" },
        { name: "Gaming", url: "/Gaming" },
      ],
    },
    { name: "Cuotas sin interes", url: "/cuotas-sin-interes" },
    { name: "Ofertas", url: "/Ofertas" },
  ];

  return (
    <ul className="d-flex flex-row align-items-center">
      {categories.map((item) => (
        <li key={item.name} className={item.subCateory && "hasSubCateory"}>
          <Link to={item.url} className="pr-3 ">
            {item.name}
          </Link>

          {item.subCateory && (
            <ul className="subCateory">
              {categories[0].subCateory.map((item) => (
                <li key={item.name}>
                  <Link to={item.url} className="pr-3">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
};

export default CategoriesTop;
