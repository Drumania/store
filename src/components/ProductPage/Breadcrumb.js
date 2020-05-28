import React from "react";
import { Link } from "react-router-dom";

const Breadcrumbs = ({ categorys, name }) => {
  console.log(categorys);
  return (
    <ol className="mt-4 breadcrumb">
      {categorys.map((category) => (
        <li className="breadcrumb-item" key={Object.key}>
          <Link to={`/${category.url}`}>{category.name}</Link>
        </li>
      ))}
      <li className="breadcrumb-item active">{name}</li>
    </ol>
  );
};

export default Breadcrumbs;
