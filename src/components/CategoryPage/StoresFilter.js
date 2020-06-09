import React from "react";

const StoresFilter = ({ arrayFilter }) => {
  // filtro tiendas
  let companyAux = arrayFilter.map((item) => {
    return item.company.company_name;
  });

  const companyUnorder = companyAux.filter(
    (item, index) => companyAux.indexOf(item) === index
  );

  return (
    <ul className="mb-5">
      <li>
        <h4>Tiendas </h4>
      </li>
      {companyUnorder.map((item) => (
        <li key={item}>
          <a href="#!" className="text-black-50">
            {item}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default StoresFilter;
