import { StarFilledIcon } from "@radix-ui/react-icons";
import { Button } from "../components/ui/button";
import React, { useState } from "react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "../components/ui/popover";
import { Input } from "../components/ui/input";
import { createClient } from "@sanity/client";
import { SanityConfig } from "../env";
import { NavLink } from "react-router-dom";

export const Order = (props) => {
  const [review, setReview] = useState();
  const client = createClient(SanityConfig);
  //   console.log(props.product);
  function handleSubmit() {
    const reviewObj = {
      _type: "review",
      username: "JohnDoe",
      userId: "0123456789abcdef01234567",
      productId: props.product.productId,
      review: review,
      rating: 5,
    };
    console.log(reviewObj);
    client
      .create(reviewObj)
      .then((response) => {
        console.log("Data posted successfully:", response);
      })
      .catch((error) => {
        console.error("Error posting data:", error);
      });
  }
  return (
    <>
      <div className="relative bg-slate-300  justify-between align-middle p-3 m-2 rounded-md dark:bg-slate-700 hidden md:flex">
        <NavLink to={`/productpage/${props.product.productId}`}>
          <img
            src={props.product.productImg}
            alt="img"
            className=" size-28"
          ></img>
        </NavLink>
        <h1 className=" w-1/5 truncate ...">{props.product.productName}</h1>
        <h1> ₹{props.product.productPrice}</h1>
        <div className="">
          <h1>Shipped</h1>
          <div className="absolute bottom-1 right-1">
            <Popover>
              <PopoverTrigger>
                <Button
                  onClick={() => {
                    handleSubmit();
                  }}
                >
                  Add Review
                </Button>
              </PopoverTrigger>
              <PopoverContent>
                {" "}
                <div className="flex flex-row ">
                  <span onClick={() => {}}>
                    <StarFilledIcon className="text-orange-500 size-[20px]" />
                  </span>
                  <span onClick={() => {}}>
                    <StarFilledIcon className="text-orange-500 size-[20px]" />
                  </span>
                  <span onClick={() => {}}>
                    <StarFilledIcon className="text-orange-500 size-[20px]" />
                  </span>
                  <span onClick={() => {}}>
                    <StarFilledIcon className="text-orange-500 size-[20px]" />
                  </span>
                  <span onClick={() => {}}>
                    <StarFilledIcon className="text-orange-500 size-[20px]" />{" "}
                  </span>
                </div>
                <div>
                  <label htmlFor="name" className="">
                    Write Review Here :
                  </label>

                  <Input
                    className=""
                    placeholder="Review"
                    type="text"
                    id="review"
                    value={review}
                    onChange={(event) => setReview(event.target.value)}
                    required
                  />
                </div>
                <Button
                  onClick={() => {
                    handleSubmit();
                  }}
                  className="my-2"
                >
                  Submit
                </Button>
              </PopoverContent>
            </Popover>
          </div>
        </div>
      </div>
      <div className="relative md:hidden">
        <div className=" rounded-xl my-2 flex justify-between bg-slate-200 dark:bg-slate-700 ">
          <img
            src={props.product.productImg}
            alt="img"
            className=" rounded-xl size-28"
          ></img>
          <div className="my-2">
            <h1>Shipped</h1>
            <h1 className=" text-slate-100/50 text-xs w-32 truncate ...">
              {props.product.productName}
            </h1>
          </div>
          <h1 className="my-2 mx-2"> ₹{props.product.productPrice}</h1>
        </div>
        <div className="absolute bottom-1 right-1">
          <Popover>
            <PopoverTrigger>
              <Button>Add Review</Button>
            </PopoverTrigger>
            <PopoverContent>
              {" "}
              <div className="flex flex-row ">
                <span onClick={() => {}}>
                  <StarFilledIcon className="text-orange-500 size-[20px]" />
                </span>
                <span onClick={() => {}}>
                  <StarFilledIcon className="text-orange-500 size-[20px]" />
                </span>
                <span onClick={() => {}}>
                  <StarFilledIcon className="text-orange-500 size-[20px]" />
                </span>
                <span onClick={() => {}}>
                  <StarFilledIcon className="text-orange-500 size-[20px]" />
                </span>
                <span onClick={() => {}}>
                  <StarFilledIcon className="text-orange-500 size-[20px]" />{" "}
                </span>
              </div>
              <div>
                <label htmlFor="name" className="">
                  Write Review Here :
                </label>

                <Input
                  className=""
                  placeholder="Review"
                  type="text"
                  id="review"
                  value={review}
                  onChange={(event) => setReview(event.target.value)}
                  required
                />
              </div>
              <Button className="my-2">Submit</Button>
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </>
  );
};
