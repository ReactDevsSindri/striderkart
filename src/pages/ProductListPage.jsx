import React, { useState, useEffect } from "react";
import Assets from "../assets/index";
import "./ProductListPage.css";
import ProductCard from "../component/ProductCard";

const ProductListPage = () => {
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
      <div className="flex p-5 flex-wrap justify-center">
        {Assets.productListData.map((product) => (
          <div className="mx-5">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductListPage;
