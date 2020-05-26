import React from "react";
import BannerFull from "../assets/img/bannerstorenx.jpg";
import bannerGamming from "../assets/img/gaming.jpg";
import bannerDecoracion from "../assets/img/decoracion.jpg";
import bannerDeportes from "../assets/img/deportes.jpg";
import bannerVerano from "../assets/img/verano.jpg";

var styleBannerFull = {
  backgroundImage: `url(${BannerFull})`,
};

var stylebannerGamming = {
  backgroundImage: `url(${bannerGamming})`,
};

var stylebannerDecoracion = {
  backgroundImage: `url(${bannerDecoracion})`,
};

var stylebannerVerano = {
  backgroundImage: `url(${bannerVerano})`,
};

var stylebannerDeportes = {
  backgroundImage: `url(${bannerDeportes})`,
};

const CategoriesHome = () => {
  return (
    <div className="categories-home-grid">
      <div className="div1" style={styleBannerFull}></div>
      <div className="div2" style={stylebannerGamming}>
        Gaming
      </div>
      <div className="div3" style={stylebannerDecoracion}>
        Decoracion
      </div>
      <div className="div4" style={stylebannerDeportes}>
        Deportes
      </div>
      <div className="div5" style={stylebannerVerano}>
        Verano
      </div>
    </div>
  );
};

export default CategoriesHome;
