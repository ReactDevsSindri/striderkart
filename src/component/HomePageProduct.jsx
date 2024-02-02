import React, { useState } from "react";
import Images from "../assets/index";

import Rayrunshoes from "../assets/img/rayrun-shoes.avif";
import { NavLink } from "react-router-dom";
import { Button } from "../components/ui/button";

export default function HomePageProduct() {
  let [img1, setImg1] = useState(Images.HeroImg);

  let ui1;
  return (
    <>
      <div className="size-5/12 items-center justify-center">
        <img src={img1}></img>
      </div>
      <div className="ml-10 size-20 flex">
        <img
          className="mx-5"
          src={Images.HeroImg}
          onClick={() => {
            setImg1(Images.HeroImg);
          }}
        ></img>
        <img
          className="mx-5"
          src={Images.RedNike1}
          onClick={() => {
            setImg1(Images.RedNike1);
          }}
        ></img>
        <img
          className="mx-5"
          src={Images.RedNike2}
          onClick={() => {
            setImg1(Images.RedNike2);
          }}
        ></img>
        <img
          src={Images.RedNike3}
          onClick={() => {
            setImg1(Images.RedNike3);
          }}
        ></img>
      </div>
      <Button className="ml-10">Add To Cart</Button>
    </>
  );
}
