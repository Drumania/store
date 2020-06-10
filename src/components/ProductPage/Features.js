import React from "react";

const Features = ({ features }) => {
  //console.log(features);
  return (
    <>
      <h3>Caracteristicas</h3>
      <table className="table table-striped">
        <tbody>
          {features.map((item) => (
            <tr key={Object.getOwnPropertyNames(item)}>
              <td>{Object.getOwnPropertyNames(item)}</td>
              <td>{Object.values(item)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* <a href="#!">Ver más...</a> */}
    </>
  );
};

export default Features;
