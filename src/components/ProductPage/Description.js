import React, { Fragment } from "react";

const Description = ({ description }) => {
  //console.log(longDescription);
  let fullUrl = "https://www.necxus.com.ar";
  return (
    <div className="pp-detalles">
      {description.map((item) => (
        <Fragment key={item.title}>
          <img
            className="img-fluid"
            src={fullUrl + item.big_img}
            alt={item.title}
          />
          <div className="detail-content">
            <h4>{item.title}</h4>
            <br />
            {item.desc}
          </div>
        </Fragment>
      ))}
    </div>
  );
};

export default Description;
