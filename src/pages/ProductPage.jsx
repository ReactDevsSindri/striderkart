import React, { useState, useEffect } from "react";
import Images from "../assets/index";
import { useParams } from "react-router-dom";
import assets from "../assets/index";
import { Button } from "../components/ui/button";

const ProductPage = () => {
  let { productId } = useParams();
  let [img, setImg] = useState(Images.Shoe1);
  let [cart, setCart] = useState(true);
  let [Products, setProducts] = useState([]);
  // const btnName =;
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
      <div className={true ? "" : "product-details-main shadow"}>
        <div className="row">
          <div className="col-8 p-3 d-flex flex-column align-items-center">
            <div className="shoe1 p-3  ">
              <img
                src={assets.productListData[productId - 1].imgSrc}
                alt="Nike Blue"
              ></img>
            </div>
            <div className="shoe mt-5  d-flex justify-content-center">
              <img
                className="product-thumbnail shadow "
                src={Images.Shoe1}
                alt="Nike Blue"
                onMouseOver={() => setImg(Images.Shoe1)}
              ></img>
              <img
                className="product-thumbnail shadow "
                src={Images.Shoe1a}
                alt="Nike Blue"
                onMouseOver={() => setImg(Images.Shoe1a)}
              ></img>
              <img
                className="product-thumbnail shadow "
                src={Images.Shoe1b}
                alt="Nike Blue"
                onMouseOver={() => setImg(Images.Shoe1b)}
              ></img>
            </div>
          </div>
          <div className="col-4 ">
            <h1>{assets.productListData[productId - 1].name}</h1>

            <p className="shoe-name">Revolution 6 Running Shoes For Men</p>
            <Button onClick={() => setCart(!cart)}>
              {cart ? "Add to Cart" : "Remove from cart"}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductPage;