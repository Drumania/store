import React from "react";

const SearchTop = () => {
  return (
    <form className="row no-gutters">
      <div className="col-10">
        <input
          type="text"
          className="form-search"
          id="search-top"
          placeholder="Buscar..."
        />
      </div>
      <div className="col-2">
        <button type="submit" className="btn btn-secondary btn-block">
          <i className="fas fa-search"></i>
        </button>
      </div>
    </form>
  );
};

export default SearchTop;
