import React, { useState, useEffect, useContext } from "react";
import Assets from "../assets/index";
import "./ProductListPage.css";
import ProductCard from "../component/ProductCard";
import ThemeContext from "../context/ThemeContext";
import { createClient, imageUrlBuilder } from "@sanity/client";
import { SanityConfig } from "../env";

const ProductListPage = () => {
  const themeData = useContext(ThemeContext);
  const darkclass = themeData.themeValue.currentMode === "dark";
  let [products, setProducts] = useState([]);
  useEffect(() => {
    const client = createClient(SanityConfig);
    client
      .fetch('*[_type == "strider-product"]')
      .then((result) => {
        setProducts(result);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  return (
    <>
      <div className="flex p-5 flex-wrap justify-center  w-screen  dark:bg-slate-700  min-h-[calc(100vh-72px)]">
        {products.map((product) => (
          <>
            <div className="mx-5">
              <ProductCard product={product} />
            </div>
          </>
        ))}
      </div>
    </>
  );
};

export default ProductListPage;
