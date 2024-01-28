import React, { useState, useEffect } from "react";
import Images from "../assets/img/index";
import { useParams } from "react-router-dom";
import "./ProductListPage.css";

const ProductListPage = () => {
  let { productId, color, storage } = useParams();
  let [img, setImg] = useState(Images.Shoe1);
  let [cart, setCart] = useState(true);
  let [Products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/pages/Data.json"); // Replace '/path/to/products.json' with the actual path to your JSON file
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  console.log(Products);
  return (
    <>
      <div>
        <h1>Products</h1>
        <ul>
          {Products.map((Product) => (
            <li key={Product.id}>
              <div>{Product.name}</div>
              <div>${Product.price.toFixed(2)}</div>
            </li>
          ))}
        </ul>
      </div>
      <div className="shoe1">
        <img className="shoe1" src={img} alt="Nike Blue"></img>
        <h1>Product Details</h1>

        <p className="shoe-name">Revolution 6 Running Shoes For Men {color}</p>
        <button onClick={() => setCart(!cart)}>
          {cart ? "Add to Cart" : "Remove from cart"}
        </button>
      </div>
      <div className="shoe">
        <img
          className="shoe"
          src={Images.Shoe1}
          alt="Nike Blue"
          onClick={() => setImg(Images.Shoe1)}
        ></img>
        <img
          src={Images.Shoe1a}
          alt="Nike Blue"
          onClick={() => setImg(Images.Shoe1a)}
        ></img>
        <img
          src={Images.Shoe1b}
          alt="Nike Blue"
          onClick={() => setImg(Images.Shoe1b)}
        ></img>
      </div>
    </>
  );
};

export default ProductListPage;
