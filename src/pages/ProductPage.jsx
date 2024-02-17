import React, { useState, useEffect, useContext } from "react";
import Images from "../assets/index";
import { NavLink, useParams } from "react-router-dom";
import assets from "../assets/index";
import { Button } from "../components/ui/button";
import { ToastAction } from "../components/ui/toast";
import { useToast } from "../components/ui/use-toast";
import AppContext from "../context/AppContext";
import CartContext from "../context/CartContext";
// import { Progress } from "../components/ui/progress";
import { StarFilledIcon } from "@radix-ui/react-icons";
// import {Img, Img1, Img2, Img4} from "../assets/index";

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
        title: "Yohooo Added to Cart",
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

  const [rate,setRate] = useState(0);

  const reviews = {0:"Kindly rate us in 1 to 5 stars",1:"Oops! We will try to improve.",2:"Okay! We will try to improve.",3:"Thanks! We will try to improve.",4:"Thanks! Hope to see you again.",5:"Thanks! It means a lot."}
  // const review1= ("Oops! We will try to improve.");
  // const review2= ("Okay! We will try to improve.");
  // const review3= ("Thanks! We will try to improve.");
  // const review4= ("Thanks! Hope to see you again.");
  // const review5= ("Thanks! It means a lot.");
  //  const [review, setReview] = useState("Kindly rate us in 1 to 5 stars")

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
          <div >
            <h1 className="text-3xl" >
              Review and ratings
            </h1>
            <p className="flex flex-row">
            <p className="text-4xl">4.3</p> <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-9 h-9 stroke-orange-500">
  <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
</svg>
</span>
<p className="text-1xl" >
4,940 ratings and 234 reviews
</p>
 </p>
<div className="flex flex-row">

<span onClick={()=>{setRate(1);}}><StarFilledIcon className="text-orange-500 size-[20px]"/></span>
<span onClick={()=>{setRate(2);}}><StarFilledIcon className="text-orange-500 size-[20px]"/></span>
<span onClick={()=>{setRate(3);}}><StarFilledIcon className="text-orange-500 size-[20px]"/></span>
<span onClick={()=>{setRate(4);}}><StarFilledIcon className="text-orange-500 size-[20px]"/></span>
<span onClick={()=>{setRate(5);}}><StarFilledIcon className="text-orange-500 size-[20px]"/> </span>
<h1 className="text-1xl mx-2"> {reviews[rate]}</h1>
</div>
<div className="flex flex-row">
  <img className="size-20" src={assets.Img1} alt="error" />
  <img className="size-20" src={assets.Img2} alt="error" />
  <img className="size-20" src={assets.Img} alt="error" />
  <img className="size-20" src={assets.Img4} alt="error" />
</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductPage;
