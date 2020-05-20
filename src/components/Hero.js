import React from "react";
import bannerstorenx from "../assets/img/bannerstorenx.jpg";

var sectionStyle = {
  width: "100%",
  height: "400px",
  backgroundImage: `url(${bannerstorenx})`,
};

const Hero = () => {
  return (
    <section
      className="welcome_area bg-img background-overlay"
      style={sectionStyle}
    >
      <div className="container h-100">
        <div className="row h-100 align-items-center">
          <div className="col-12">
            <div className="hero-content">
              <a href="#!" className="btn essence-btn">
                Ver Novedades
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
