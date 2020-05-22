import React from "react";
import BannerFull from "../assets/img/bannerstorenx.jpg";
import bannerGamming from "../assets/img/gaming.jpg";

var styleBannerFull = {
  backgroundImage: `url(${BannerFull})`,
};

var stylebannerGamming = {
  backgroundImage: `url(${bannerGamming})`,
};

const CategoriesHome = () => {
  return (
    <div className="categories-home-grid">
      <div className="div1" style={styleBannerFull}></div>
      <div className="div2" style={stylebannerGamming}>
        Gaming
      </div>
      <div className="div3">Decoracion</div>
      <div className="div4">Deportes</div>
      <div className="div5">Verano</div>
    </div>
  );
};

export default CategoriesHome;
