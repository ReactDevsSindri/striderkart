import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Button } from "../components/ui/button";

const ProductCard = ({ product }) => {
  console.log(product);
  const [img, setImg] = useState(product.images[0]);
  return (
    <div
      className=" product-list-thumbnail shadow dark:shadow-none dark:bg-slate-800 rounded-xl "
      style={{ position: "relative" }}
    >
      <NavLink to={`/productpage/${product._id}`} className="">
        <div
          className="group relative"
          onMouseLeave={() => setImg(product.images[0])}
        >
          <img src={img} alt="Poduct" />
          <div className="flex absolute bottom-0 opacity-0  group-hover:opacity-100 transition-opacity">
            <img
              src={product.images[0]}
              className="size-16 bg-slate-500"
              onMouseOver={() => setImg(product.images[0])}
            />
            <img
              src={product.images[1]}
              className="size-16 bg-slate-500"
              onMouseOver={() => setImg(product.images[1])}
            />
            <img
              src={product.images[2]}
              className="size-16 bg-slate-500"
              onMouseOver={() => setImg(product.images[2])}
            />
            <img
              src={product.images[3]}
              className="size-16 bg-slate-500"
              onMouseOver={() => setImg(product.images[3])}
            />
          </div>
        </div>
        <p
          className="m-0 mt-2 ps-3"
          style={{
            fontSize: "14px",
            fontWeight: "bold",
          }}
        >
          {product.productName?.substring(0, 25)}
        </p>
        <p className="m-0 mb-2 ps-3" style={{ fontSize: "12px" }}>
          2 colors
        </p>

        <Button style={{ position: "absolute", right: 10, bottom: 10 }}>
          Details
        </Button>
        {/* <img src={product.imgSrc} /> */}
      </NavLink>
    </div>
  );
};

export default ProductCard;
