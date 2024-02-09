import React from "react";
import { NavLink } from "react-router-dom";
import { Button } from "../components/ui/button";

const ProductCard = ({ product }) => {
  return (
    <div
      className=" product-list-thumbnail shadow dark:shadow-none dark:bg-slate-600 "
      style={{ position: "relative" }}
    >
      <NavLink
        to={`/productpage/${product.productId}`}
        className=""
      >
        <img src={product.imgSrc} alt="Poduct" />
        <p
          className="m-0 mt-2 ps-2"
          style={{
            fontSize: "14px",
            fontWeight: "bold",
          }}
        >
          {product.name?.substring(0, 25)}
        </p>
        <p className="m-0 mb-2 ps-2" style={{ fontSize: "12px" }}>
          2 colors
        </p>
        <Button style={{ position: "absolute", right: 5, bottom: 5 }}>
          Details
        </Button>{" "}
        {/* <img src={product.imgSrc} /> */}
      </NavLink>
    </div>
  );
};

export default ProductCard;
