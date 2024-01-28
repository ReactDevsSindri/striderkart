import React, { useState } from "react";
import Images from "../assets/img/index";
import { useParams } from "react-router-dom";
import "./ProductListPage.css";

const ProductListPage = () => {
  let { productId, color, storage } = useParams();
  let [img, setImg] = useState(Images.Shoe1);
  return (
    <>
      {/* <div>
        ProductListPage
        <ul>
          <li>
            Your clicked Product {productId} with {color} color with {storage}{" "}
            GB
          </li>
        </ul>
      </div> */}
      <div className="shoe1">
        <img className="shoe1" src={img} alt="Nike Blue"></img>
        <p className="shoe-name">Revolution 6 Running Shoes For Men {color}</p>
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
