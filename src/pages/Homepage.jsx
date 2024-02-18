import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { Button } from "../components/ui/button";
import Images from "../assets/index";

const Homepage = () => {
  return (
    <>
      <main
        className={` font-mono flex flex-col-reverse p-5  md:flex-row pt-28 pl-10 dark:bg-slate-700 dark:text-white h-screen`}
      >
        <div>
          <h1 className="text-6xl md:text-8xl max-[400px]:text-3xl">
            YOUR FEET DESERVE THE BEST
          </h1>
          <p className="text-xl md:text-3xl italic text-slate-400 mt-10  max-[600px]:text-lg">
            YOUR FEET DESERVE THE BEST AND
            <br /> WE’RE HERE TO HELP YOU WITH OUR SHOES.
            <br />
            YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
            SHOES.
          </p>

          <NavLink
            to={"/productlistpage"}
            className={"button"}
            style={{ textDecoration: "none" }}
          >
            <Button className="mt-10">Explore</Button>
          </NavLink>
        </div>

        <div className="flex justify-center md:w-1/2 pt-20">
          <img className="w-full" src={Images.HeroImg} alt="hero-image" />
        </div>
      </main>
    </>
  );
};

export default Homepage;
