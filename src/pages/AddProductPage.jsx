import { Button } from "../components/ui/button";
import React, { useState } from "react";

const AddProductPage = () => {
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productSizeAndPrice, setproductSizeAndPrice] = useState([]);
  const [productImages, setProductImages] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("Product Added:", {
      productName,
      productDescription,
      productSizeAndPrice,
      productImages,
    });
    // Clear the form fields after submission
    setProductName("");
    setProductDescription("");
    setproductSizeAndPrice([{ size: "", OfferPrice: "", actualPrice: "" }]);
    setProductImages([""]);
  };

  return (
    <div className="flex bg-slate-600 text-white justify-center">
      <div className="w-[400px] mx-5">
        <h2 className="text-2xl mb-10">Add New Product</h2>

        <form className="flex flex-col" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="productName" className="my-1 ">
              Product Name :{" "}
            </label>
            <input
              type="text"
              id="productName"
              value={productName}
              className=" text-black"
              onChange={(e) => setProductName(e.target.value)}
              required
            />
          </div>
          <div className="my-1">
            <label htmlFor="productDescription">Product Description:</label>
            <textarea
              id="productDescription"
              value={productDescription}
              className=" text-black"
              onChange={(e) => setProductDescription(e.target.value)}
              required
            />
          </div>
          <label htmlFor="productPrice">Product Price & size:</label>
          <div className="flex my-1">
            <input
              type="number"
              id="size"
              className=" text-black"
              value={productSizeAndPrice[0]?.size}
              onChange={(e) =>
                setproductSizeAndPrice([
                  { ...productSizeAndPrice[0], size: e.target.value },
                ])
              }
              required
            />
            <input
              type="number"
              id="productPrice"
              className=" text-black"
              value={productSizeAndPrice[0]?.actualPrice}
              onChange={(e) =>
                setproductSizeAndPrice([
                  { ...productSizeAndPrice[0], actualPrice: e.target.value },
                ])
              }
              required
            />
            <input
              type="number"
              id="offerprice"
              className=" text-black"
              value={productSizeAndPrice[0]?.OfferPrice}
              onChange={(e) =>
                setproductSizeAndPrice([
                  { ...productSizeAndPrice[0], OfferPrice: e.target.value },
                ])
              }
              required
            />
          </div>
          <div className="my-1">
            <label htmlFor="productImage">Product Image URL:</label>
            <input
              type="text"
              id="productImage"
              className=" text-black"
              value={productImages[0]}
              onChange={(e) => setProductImages([e.target.value])}
              required
            />
          </div>
          {/* <button type="submit">Add Product</button> */}
          <Button type="submit">Add Product</Button>
        </form>
      </div>
    </div>
  );
};

export default AddProductPage;
