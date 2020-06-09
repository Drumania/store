import React from "react";

const DiscountFilter = ({ arrayFilter }) => {
  // filtro descuentos
  let productsDiscount = arrayFilter.map((item) => {
    return item.discount;
  });

  const disconutAux = productsDiscount.filter(
    (item, index) => productsDiscount.indexOf(item) === index
  );

  const arrayUnorder = disconutAux.sort((b, a) => b - a),
    arrayOrderder = arrayUnorder.reverse();
  return (
    <ul className="mb-5">
      <li>
        <h4>Descuento</h4>
      </li>
      <li>
        <div className="filter-boxes">
          {arrayOrderder.map((item) => (
            <a href="#!" key={item} className="text-black-50">
              {item} %
            </a>
          ))}
          <div className="clear"></div>
        </div>
      </li>
    </ul>
  );
};

export default DiscountFilter;
