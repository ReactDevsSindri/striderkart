import assets from "../assets";
import React from "react";

const CartProduct = ({ product }) => {
  console.log("CartProduct" + product);
  return (
    <div
      style={{ padding: "10px", display: "flex", alignItems: "end" }}
      className="dark:text-white"
    >
      <img style={{ width: "100px" }} src={product?.images[0]} alt="product" />
      <div style={{ paddingLeft: "10px" }}>
        <p>{product?.productName}</p>
        <p>Qty:1</p>
        <p>
          Price : ₹
          {
            product?.sizes.find((sizeObj) => {
              return sizeObj.size == product?.sizeSlected;
            })?.offerPrice
          }
        </p>
      </div>
    </div>
  );
};

export default CartProduct;
