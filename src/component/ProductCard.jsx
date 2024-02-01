import React from "react";

import Rayrunshoes from "../assets/img/rayrun-shoes.avif";
import { NavLink } from "react-router-dom";
import { Button } from "../components/ui/button";

const ProductCard = ({ product }) => {
  return (
    <div
      className="border product-list-thumbnail shadow "
      style={{ position: "relative" }}
    >
      <img src={product.imgSrc} />
      <p
        className="m-0 mt-2 ps-2"
        style={{ fontSize: "14px", fontWeight: "bold" }}
      >
        {product.name}
      </p>
      <p className="m-0 mb-2 ps-2" style={{ fontSize: "12px" }}>
        2 colors
      </p>
      <NavLink
        to={`/productpage/${product.productId}`}
        className="btn btn-success"
        style={{ position: "absolute", right: 5, bottom: 5 }}
      >
        <Button>Details</Button> {/* <img src={product.imgSrc} /> */}
      </NavLink>
    </div>
  );
};

export default ProductCard;
