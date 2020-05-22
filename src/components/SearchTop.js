import React, { useState } from "react";

const SearchTop = () => {
  const [searchWord, setSearchWord] = useState("");

  const handleChange = (e) => {
    setSearchWord(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(searchWord);
  };

  return (
    <form onSubmit={handleSubmit} className="row no-gutters">
      <div className="col-10">
        <input
          type="text"
          className="form-search"
          id="search-top"
          placeholder="Buscar..."
          onChange={handleChange}
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
