import React, { useState, useEffect } from "react";
import Assets from "../assets/index";
import { useParams } from "react-router-dom";
import "./ProductListPage.css";
import ProductCard from "../component/ProductCard";

const ProductListPage = () => {
  let { productId, color, storage } = useParams();
  let [img, setImg] = useState(Assets.Shoe1);
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
    <div className="row">
    {Assets.productListData.map(product=>
      <div className="col-3 d-flex justify-content-center">
      <ProductCard product={product}/>
      </div>)}
    </div>
    </>
  );
};

export default ProductListPage;
