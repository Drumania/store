import React from "react";
import brand1 from "../assets/img/brand1.png";
import brand2 from "../assets/img/brand2.png";
import brand3 from "../assets/img/brand3.png";
import brand4 from "../assets/img/brand4.png";
import brand5 from "../assets/img/brand5.png";
import brand6 from "../assets/img/brand6.png";

const Brands = () => {
  return (
    <ul className="brand-list d-flex justify-content-around align-items-center">
      <li>
        <img src={brand1} alt="logo" />
      </li>
      <li>
        <img src={brand2} alt="logo" />
      </li>
      <li>
        <img src={brand3} alt="logo" />
      </li>
      <li>
        <img src={brand4} alt="logo" />
      </li>
      <li>
        <img src={brand5} alt="logo" />
      </li>
      <li>
        <img src={brand6} alt="logo" />
      </li>
    </ul>
  );
};

export default Brands;
