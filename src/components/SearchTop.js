import React, { useState } from "react";
import { masterpage } from "../api/masterpage";

const SearchTop = () => {
  const [searchWord, setSearchWord] = useState("");

  const handleChange = (e) => {
    setSearchWord(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    window.location = `/${searchWord}`;
  };

  return (
    <form onSubmit={handleSubmit} className="row no-gutters">
      <div className="col-10">
        <input
          type="text"
          className="form-search"
          id="search-top"
          placeholder="Buscar..."
          list="autocomplete"
          onChange={handleChange}
        />
        <datalist id="autocomplete">
          {masterpage[0].categories.map((item) => (
            <option key={item.slug} data-value={item.slug}>
              {item.name}
            </option>
          ))}
          {masterpage[0].products.map((item) => (
            <option key={item.slug} data-value={item.slug}>
              {item.name}
            </option>
          ))}
        </datalist>
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
