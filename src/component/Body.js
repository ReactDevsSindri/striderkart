import "./Body.css";
import Images from "../assets/index";
import { NavLink } from "react-router-dom";
import { Button } from "../components/ui/button";
import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
const Body = () => {
  const themeData = useContext(ThemeContext);
  console.log("themedata" + themeData);
  const darkclass = themeData.themeValue.currentMode === "dark";
  return (
    <>
      <main
        className={`flex flex-col-reverse p-5  md:flex-row pt-28 pl-10  ${
          darkclass ? "bg-slate-800 text-white" : ""
        }`}
      >
        <div>
          <h1 className="text-6xl	font-mono ">YOUR FEET DESERVE THE BEST</h1>
          <p className="text-2xl mt-10">
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

        <div className="flex justify-center w-1/2">
          <NavLink to="/red-nike">
            <div className="">
              <img
                className="w-full  md:w-3/4"
                src={Images.HeroImg}
                alt="hero-image"
              />
            </div>
          </NavLink>
        </div>
      </main>
    </>
  );
};
export default Body;
