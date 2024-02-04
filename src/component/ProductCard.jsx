import React from "react";
import { ToastAction } from "../components/ui/toast";
import { useToast } from "../components/ui/use-toast";
import Rayrunshoes from "../assets/img/rayrun-shoes.avif";
import { NavLink } from "react-router-dom";
import { Button } from "../components/ui/button";

const ProductCard = ({ product }) => {
  const { toast } = useToast();
  return (
    <div
      className="border product-list-thumbnail shadow "
      style={{ position: "relative" }}
    >
      <NavLink
        to={`/productpage/${product.productId}`}
        className="btn btn-success"
      >
        <img src={product.imgSrc} />
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
