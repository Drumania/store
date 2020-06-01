import React, { useState } from "react";

const AddFavorites = () => {
  const [favorited, setfavorited] = useState(false);

  let handleClick = (e) => {
    favorited === true ? setfavorited(false) : setfavorited(true);
  };

  return (
    <a
      href="#!"
      onClick={() => handleClick()}
      className="text-black-50 text-center d-block"
    >
      {favorited === true ? (
        <>
          <i className="fas fa-heart mr-2 text-danger"></i>
          Agregado a favoritos
        </>
      ) : (
        <>
          <i className="far fa-heart mr-2"></i>
          Agregar a favoritos
        </>
      )}
    </a>
  );
};

export default AddFavorites;
