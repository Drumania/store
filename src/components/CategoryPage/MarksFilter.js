import React from "react";

const MarksFilter = ({ arrayFilter }) => {
  // filtro marcas
  let marksAux = arrayFilter.map((item) => {
    return item.mark;
  });
  const marksUnorder = marksAux.filter(
    (item, index) => marksAux.indexOf(item) === index
  );

  return (
    <ul className="mb-5">
      <li>
        <h4>Marcas</h4>
      </li>
      {marksUnorder.map((item) => (
        <li key={item}>
          <a href="#!" className="text-black-50">
            {item}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default MarksFilter;
