import React, { useState, useEffect } from "react";
import Images from "../assets/index";
import { useParams } from "react-router-dom";
import assets from "../assets/index";
import { Button } from "../components/ui/button";
import { ToastAction } from "../components/ui/toast";
import { useToast } from "../components/ui/use-toast";

const ProductPage = () => {
  let { productId } = useParams();
  let [img, setImg] = useState(Images.Shoe1);
  let [cart, setCart] = useState(true);
  let [Products, setProducts] = useState([]);
  let [size, setSize] = useState(6);
  const { toast } = useToast();
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
      <div className="grid grid-cols-4">
        <div className="col-span-3 p-3">
          <img
            className="h-1/2"
            src={assets.productListData[productId - 1].imgSrc}
            alt="Nike Blue"
          ></img>
          <div className="shoe mt  d-flex justify-content-center">
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
        <div className="mt-32  ">
          <h1 className="text-xl">
            {assets.productListData[productId - 1].name}
          </h1>

          <p className="shoe-name text-xl ">
            Revolution 6 Running Shoes For Men
          </p>
          <div>
            <h4 className="text-lime-500">Special Price</h4>
            <h3>
              ₹{assets.productListData[productId - 1].price}
              <span className="line-through mx-2 text-slate-400">₹5000</span>
              <span>90% off</span>
            </h3>
          </div>
          <h1 className="text-xs">
            Size = <span>{size}</span>
          </h1>
          <div>
            <Button
              variant={size == 6 ? "" : "outline"}
              className="mx-1"
              onClick={() => {
                setSize(6);
              }}
            >
              6
            </Button>
            <Button
              variant={size == 7 ? "" : "outline"}
              className="mx-1"
              onClick={() => {
                setSize(7);
              }}
            >
              7
            </Button>
            <Button
              variant={size == 8 ? "" : "outline"}
              className="mx-1"
              onClick={() => {
                setSize(8);
              }}
            >
              8
            </Button>
            <Button
              variant={size == 9 ? "" : "outline"}
              onClick={() => {
                setSize(9);
              }}
            >
              9
            </Button>
          </div>
          <Button
            className="mt-5 mx-1"
            onClick={() => {
              toast({
                title: "Scheduled: Catch up ",
                description: "Friday, February 10, 2023 at 5:57 PM",
                action: (
                  <div style={{ zIndex: "100" }}>
                    <ToastAction altText="Goto schedule to undo">
                      Undo
                    </ToastAction>
                  </div>
                ),
              });
            }}
          >
            {/* {cart ? "Add to Cart" : "Remove from cart"} */}
            "Add to Cart"
          </Button>
          <Button className="bg-slate-300 text-black hover:text-white">
            Buy Now
          </Button>
        </div>
      </div>
    </>
  );
};

export default ProductPage;
