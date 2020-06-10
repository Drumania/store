import React from "react";

const PriceFilter = ({ arrayFilter }) => {
  let pricesAux = arrayFilter.map((item) => {
    return item.price;
  });

  let pricesLowToHigh = pricesAux.sort((b, a) => b - a),
    pricesLowToHighAux = [...pricesLowToHigh],
    pricesHighToLow = pricesLowToHighAux.reverse();

  /*
  console.log("pricesLowToHigh: ");
  console.log(pricesLowToHigh);
  console.log("pricesHighToLow: ");
  console.log(pricesHighToLow);
  */

  const totalPrice = pricesHighToLow.reduce(function (a, b) {
    return parseInt(a) + parseInt(b);
  });

  let averagePrice = Math.trunc(totalPrice / pricesHighToLow.length);

  const formatPrecio = (num) => {
    let aux = new Intl.NumberFormat("de-DE").format(num);
    return aux.toLocaleString("de-DE");
  };

  return (
    <ul className="mb-5">
      <li>
        <h4>Precio</h4>
      </li>
      <li>
        <a href="#!" className="text-black-50">
          Menor precio
        </a>
      </li>
      <li>
        <a href="#!" className="text-black-50">
          Mayor precio
        </a>
      </li>
      <li>
        <br />
      </li>
      <li>
        <a href="#!" className="text-black-50">
          desde <strong>0</strong> hasta{" "}
          <strong>$ {formatPrecio(averagePrice)}</strong>
        </a>
      </li>
      <li>
        <a href="#!" className="text-black-50">
          desde <strong>$ {formatPrecio(averagePrice)}</strong> hasta{" "}
          <strong>$ {formatPrecio(pricesHighToLow[0])}</strong>
        </a>
      </li>
    </ul>
  );
};

export default PriceFilter;
