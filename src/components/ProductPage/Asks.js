import React from "react";

const Asks = () => {
  return (
    <>
      <h3>Preguntas</h3>
      <button type="button" className="btn btn-outline-secondary mr-2 rounded">
        Medios de pago y promociones
      </button>
      <button type="button" className="btn btn-outline-secondary mr-2 rounded">
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
    </>
  );
};

export default Asks;
