import React, { useState, useEffect, useContext } from "react";
import Images from "../assets/index";
import { NavLink, useParams } from "react-router-dom";
import assets from "../assets/index";
import { Button } from "../components/ui/button";
import { ToastAction } from "../components/ui/toast";
import { useToast } from "../components/ui/use-toast";
import AppContext from "../context/AppContext";
import CartContext from "../context/CartContext";

const ProductPage = () => {
  const appContext = useContext(AppContext);
  const cartContext = useContext(CartContext);
  let { productId } = useParams();
  let [img, setImg] = useState();
  let [productInCart, setProductInCart] = useState();
  let [product, setProduct] = useState();
  let [size, setSize] = useState();
  const { toast } = useToast();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://13.49.241.47:5000/products/${productId}`
        );
        const data = await response.json();
        setProduct(data);
        setSize(data.sizes[0].size);
        setImg(data.images[0]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  useEffect(() => {
    const inCart = cartContext.cartValue.find(
      (product) => product._id === productId
    );
    setProductInCart(inCart);
  }, [cartContext]);
  function addItemToCart() {
    if (!cartContext.cartValue.find((product) => product._id === productId)) {
      cartContext.setCartValue([
        ...cartContext.cartValue,
        { ...product, sizeSlected: size },
      ]);
      console.log("Toast calling");
      toast({
        title: "Yahooo Added to Cart",
        description: "Expected Delivery 30 Feb",
      });
      console.log("Toast called");
    }
  }
  function removeFromCart() {
    if (cartContext.cartValue.find((product) => product._id === productId)) {
      cartContext.setCartValue([
        ...cartContext.cartValue.filter((product) => product._id !== productId),
      ]);
      toast({
        title: "Removed From cart",
        description: "Please add another product",
      });
    }
  }

  return (
    <>
      <div className="h-screen flex flex-col md:grid md:grid-cols-4   dark:bg-slate-800 dark:text-white">
        <div className="md:col-span-3  flex flex-col justify-start items-center h-screen">
          <img className="w-full md:w-1/3 mb-5" src={img} alt="Nike Blue"></img>

          <div className="flex justify-center mt-5 ">
            {product?.images?.map((img) => (
              <img
                className="size-20 mx-2"
                src={img}
                alt="Nike Blue"
                onMouseOver={() => setImg(img)}
              ></img>
            ))}
          </div>
        </div>
        <div className="w-screen p-2">
          <h1 className="text-xl">{product?.productName}</h1>

          <div>
            <h4 className="text-lime-500">Special Price</h4>
            <h3>
              ₹
              {
                product?.sizes.find((sizeObj) => sizeObj.size === size)
                  ?.offerPrice
              }
              <span className="line-through mx-2 text-slate-400 ">
                ₹
                {product?.sizes.find((sizeObj) => sizeObj.size === size)?.price}
              </span>
              <span className="text-xs text-red-400">Offer Of the Year</span>
            </h3>
          </div>

          <div className="my-3">
            <h1 className="text-xs my-2">
              Size = <span>{size}</span>
            </h1>
            {product?.sizes.map((sizeObj) => {
              return (
                <Button
                  key={sizeObj.size}
                  variant={size == sizeObj.size ? "" : "outline"}
                  className="mx-1"
                  onClick={() => {
                    setSize(sizeObj.size);
                  }}
                >
                  {sizeObj.size}
                </Button>
              );
            })}
          </div>
          <div className="flex  w-full my-5">
            <Button
              className="mr-2 w-36"
              onClick={() => {
                !productInCart ? addItemToCart() : removeFromCart();
              }}
            >
              {!productInCart ? "Add to Cart" : "Remove from cart"}
              {/* {cart} */}
            </Button>
            {/* <Button onClick={() => removeFromCart()}>Remove From Cart</Button> */}

            <NavLink to="/checkout" className="w-2/3">
              <Button className="bg-slate-300 text-black hover:text-white ml-2 w-36">
                Buy Now
              </Button>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductPage;
