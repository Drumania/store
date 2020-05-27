import React, { useEffect } from "react";
import { postings } from "../api/product_11626.js";
import Breadcrumb from "./Breadcrumb";

const Product = () => {
  useEffect(() => {
    let products = postings;

    console.log(products);
  }, []);

  return (
    <div className="container-fluid">
      <Breadcrumb />
      <div className="container-white row">
        <div className="col-12 col-lg-6">fotos</div>
        <div className="col-12 col-lg-6">
          <h2>Cateogria</h2>
          <h1>Nombre de producto</h1>
          Stars
          <div>24999 $ 24.693 - 1%</div>
          <div>¡Envío gratis! en todo el país Se despacha 24 hs</div>
          <div>
            1 Año de garantia oficial 10 días para cambios y devoluciones
            Conocer mas
          </div>
          <button>comprar</button>
          Agregar a favoritos
        </div>

        <div className="col-12">
          <hr />
          <h3>Descripcion</h3>

          <hr />
          <h3>Caracteristicas</h3>

          <table className="table table-striped">
            <tbody>
              <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Jacob</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Larry</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
            </tbody>
          </table>
          <a href="#!">Ver más...</a>

          <hr />
          <h3>Preguntas</h3>
          <button
            type="button"
            className="btn btn-outline-secondary mr-2 rounded"
          >
            Medios de pago y promociones
          </button>
          <button
            type="button"
            className="btn btn-outline-secondary mr-2 rounded"
          >
            Garantía
          </button>
          <button type="button" className="btn btn-outline-secondary rounded">
            Quiero que me contacten
          </button>

          <form className="my-4">
            <div className="form-group mt-4">
              <label for="textareaAsk">
                Dejanos tu consulta, vamos a responder lo antes posible.
              </label>
              <textarea
                className="form-control"
                id="textareaAsk"
                rows="3"
              ></textarea>
            </div>
            <button type="submit" className="btn btn-secondary rounded">
              Preguntar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Product;
