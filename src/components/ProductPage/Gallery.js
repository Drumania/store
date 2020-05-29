import React from "react";

/*

          <picture>
            <source srcSet="${photo_thumb_webp}" alt="${name}" type="image/webp />
            <source srcSet="${photo_thumb}" alt="${name}" type="image/jpeg" />
            <img src="${photo_thumb}" alt="${name}" />
          </picture>

*/

const Gallery = ({ photo_thumb, photo_thumb_webp, media, name }) => {
  console.log(photo_thumb);
  console.log(photo_thumb_webp);

  return (
    <div className="custom-gallery">
      {media.length > 1 && (
        <div className="div1">
          <a href="#!">
            <picture className="img-fluid">
              <source
                srcSet={media[1].src_thumb}
                alt={name}
                className="img-fluid"
                type="image/webp"
              />
              <source
                srcSet={media[1].src_thumb_webp}
                alt={name}
                className="img-fluid"
                type="image/jpeg"
              />
              <img src={media[1].src_thumb} className="img-fluid" alt={name} />
            </picture>
          </a>
        </div>
      )}
      {media.length > 2 && (
        <div className="div2">
          <a href="#!">
            <picture className="img-fluid">
              <source
                srcSet={media[2].src_thumb}
                alt={name}
                className="img-fluid"
                type="image/webp"
              />
              <source
                srcSet={media[2].src_thumb_webp}
                alt={name}
                className="img-fluid"
                type="image/jpeg"
              />
              <img src={media[2].src_thumb} className="img-fluid" alt={name} />
            </picture>
          </a>
        </div>
      )}
      {media.length > 3 && (
        <a className="div3" href="#!">
          + {media.length - 2}
        </a>
      )}
      <div className="div4">
        <a href="#!">
          <picture className="img-fluid">
            <source
              srcSet={photo_thumb_webp}
              alt={name}
              className="img-fluid"
              type="image/webp"
            />
            <source
              srcSet={photo_thumb}
              alt={name}
              className="img-fluid"
              type="image/jpeg"
            />
            <img src={photo_thumb} className="img-fluid" alt={name} />
          </picture>
        </a>
      </div>
    </div>
  );
};

export default Gallery;
