import React, { useState, useEffect, useContext } from "react";
import Assets from "../assets/index";
import "./ProductListPage.css";
import ProductCard from "../component/ProductCard";
import ThemeContext from "../context/ThemeContext";

const ProductListPage = () => {
  const themeData = useContext(ThemeContext);
  const darkclass = themeData.themeValue.currentMode === "dark";
  let [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://13.49.241.47:5000/products"
        ); // Replace '/path/to/products.json' with the actual path to your JSON file
        const data = await response.json();
        console.log(data);
        setProducts(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <>
      <div className="flex p-5 flex-wrap justify-center bg-slate-300 dark:bg-slate-800 ">
        {products.map((product) => (
          <div className="mx-5">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductListPage;
