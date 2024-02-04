import assets from "../assets";
import React from "react";

const CartProduct = ({ productId }) => {
  return (
    <div style={{ padding: "10px", display: "flex", alignItems: "end" }}>
      <img
        style={{ width: "100px" }}
        src={assets.productListData[productId - 1].imgSrc}
      />
      <div style={{ paddingLeft: "10px" }}>
        <p>{assets.productListData[productId - 1].name}</p>
        <p>Qty:1</p>
        <p>Price : ₹{assets.productListData[productId - 1].price}</p>
      </div>
    </div>
  );
};

export default CartProduct;
