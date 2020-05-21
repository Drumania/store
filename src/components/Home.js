import React, { useState, useEffect } from "react";
import axios from "axios";

const GridProduct = () => {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const url = "../api/category_50___1.json";
      const productsByCategory = await axios.get(url);

      console.log(productsByCategory);
    };

    getProducts();
  }, []);

  return <div>

            <div class="single-product-wrapper">
              <!-- Product Image -->
              <div class="product-img">
                <img src="img/product-img/product-1.jpg" alt="">
                <!-- Hover Thumb -->
                <img class="hover-img" src="img/product-img/product-2.jpg" alt="">
                <!-- Favourite -->
                <div class="product-favourite">
                  <a href="#" class="favme fa fa-heart"></a>
                </div>
              </div>
              <!-- Product Description -->
              <div class="product-description">
                <span>topshop</span>
                <a href="single-product-details.html">
                  <h6>Knot Front Mini Dress</h6>
                </a>
                <p class="product-price">$80.00</p>

                <!-- Hover Content -->
                <div class="hover-content">
                  <!-- Add to Cart -->
                  <div class="add-to-cart-btn">
                    <a href="#" class="btn essence-btn">Add to Cart</a>
                  </div>
                </div>
              </div>
            </div>


  </div>;
};

export default GridProduct;
