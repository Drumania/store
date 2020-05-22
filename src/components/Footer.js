import React from "react";
import logo from "../assets/img/logostorenx.svg";

const Footer = () => {
  return (
    <footer className="footer_area clearfix">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-md-6">
            <div className="single_widget_area d-flex mb-30">
              <div className="footer-logo mr-50">
                <a href="#!">
                  <img className="logo-img" src={logo} alt="StoreNX" />
                </a>
              </div>
              <div className="footer_menu">
                <ul>
                  <li>
                    <a href="shop.html">Shop</a>
                  </li>
                  <li>
                    <a href="blog.html">Blog</a>
                  </li>
                  <li>
                    <a href="contact.html">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="single_widget_area mb-30">
              <ul className="footer_widget_menu">
                <li>
                  <a href="#!">Order Status</a>
                </li>
                <li>
                  <a href="#!">Payment Options</a>
                </li>
                <li>
                  <a href="#!">Shipping and Delivery</a>
                </li>
                <li>
                  <a href="#!">Guides</a>
                </li>
                <li>
                  <a href="#!">Privacy Policy</a>
                </li>
                <li>
                  <a href="#!">Terms of Use</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="row align-items-end">
          <div className="col-12 col-md-6">
            <div className="single_widget_area">
              <div className="footer_heading mb-30">
                <h6>Subscribe</h6>
              </div>
              <div className="subscribtion_form">
                <form action="#" method="post">
                  <input
                    type="email"
                    name="mail"
                    className="mail"
                    placeholder="email"
                  />
                  <button type="submit" className="submit">
                    <i
                      className="fa fa-long-arrow-right"
                      aria-hidden="true"
                    ></i>
                  </button>
                </form>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6">
            <div className="single_widget_area">
              <div className="footer_social_area">
                <a
                  href="#!"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Whatsapp"
                >
                  <i className="fab fa-whatsapp"></i>
                </a>
                <a
                  href="#!"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Facebook"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a
                  href="#!"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Instagram"
                >
                  <i className="fab fa-instagram"></i>
                </a>
                <a
                  href="#!"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Youtube"
                >
                  <i className="fab fa-youtube"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-md-12 text-center">
            <p>Copyright &copy; StoreNX</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
