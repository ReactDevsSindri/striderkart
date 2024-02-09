import React, { useState, useEffect, useContext } from "react";
import Images from "../assets/index";
import { useParams } from "react-router-dom";
import assets from "../assets/index";
import { Button } from "../components/ui/button";
import { ToastAction } from "../components/ui/toast";
import { useToast } from "../components/ui/use-toast";
import AppContext from "../context/AppContext";

const ProductPage = () => {
  const appContext = useContext(AppContext);
  let { productId } = useParams();
  let [img, setImg] = useState(Images.Shoe1);
  let [cart, setCart] = useState(true);
  let [Products, setProducts] = useState([]);
  let [size, setSize] = useState(6);
  const { toast } = useToast();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/pages/Data.json");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  function addItemToCart() {
    if (appContext.contextValues.cart.find((ci) => ci === productId)) {
      toast({
        title: "Removed From cart",
        description: "Please add another product",
      });
    } else {
      appContext.setContextValues({
        ...appContext.contextValues,
        cart: [...appContext.contextValues.cart, productId],
      });
    }
  }
  function removeFromCart() {
    appContext.setContextValues({
      ...appContext.contextValues,
      cart: appContext.contextValues.cart.filter((pi) => pi !== productId),
    });
  }

  return (
    <>
      <div className="h-screen flex flex-col md:grid md:grid-cols-4   dark:bg-slate-800 dark:text-white">
        <div className="md:col-span-3  flex flex-col justify-start items-center h-screen">
          <img
            className="w-full md:w-1/3 mb-5"
            src={assets.productListData[productId - 1].imgSrc}
            alt="Nike Blue"
          ></img>
          <div className="flex justify-center mt-5 ">
            <img
              className="size-20 mx-2 mx-2"
              src={Images.Shoe1}
              alt="Nike Blue"
              onMouseOver={() => setImg(Images.Shoe1)}
            ></img>
            <img
              className="size-20 mx-2"
              src={Images.Shoe1a}
              alt="Nike Blue"
              onMouseOver={() => setImg(Images.Shoe1a)}
            ></img>
            <img
              className="size-20 mx-2"
              src={Images.Shoe1b}
              alt="Nike Blue"
              onMouseOver={() => setImg(Images.Shoe1b)}
            ></img>
          </div>
        </div>
        <div className="w-screen p-2">
          <h1 className="text-xl">
            {assets.productListData[productId - 1].name}
          </h1>

          <div>
            <h4 className="text-lime-500">Special Price</h4>
            <h3>
              ₹{assets.productListData[productId - 1].price}
              <span className="line-through mx-2 text-slate-400 ">₹5000</span>
              <span className="text-xs text-red-400">Offer Of the Year</span>
            </h3>
          </div>

          <div className="my-3">
            <h1 className="text-xs my-2">
              Size = <span>{size}</span>
            </h1>
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
          <div className="flex  w-full my-5">
            <Button
              className="mr-2 w-36"
              onClick={() => {
                toast({
                  title: "Yahooo Added to Cart",
                  description: "Expected Delivery 30 Feb",
                });
                addItemToCart();
                setCart(!cart);
                if (!cart) {
                  removeFromCart();
                }
              }}
            >
              {cart ? "Add to Cart" : "Remove from cart"}
              {cart}
            </Button>
            {/* <Button onClick={() => removeFromCart()}>Remove From Cart</Button> */}
            <Button className="bg-slate-300 text-black hover:text-white ml-2 w-36">
              Buy Now
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductPage;
