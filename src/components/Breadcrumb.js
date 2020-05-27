import React from "react";
import { Link } from "react-router-dom";

const Breadcrumbs = () => {
  return (
    <ol className="mt-4 breadcrumb">
      <li className="breadcrumb-item">
        <Link to="/">Home</Link>
      </li>
      <li className="breadcrumb-item">
        <Link to="/category">Category</Link>
      </li>
      <li className="breadcrumb-item active">Data</li>
    </ol>
  );
};

export default Breadcrumbs;
