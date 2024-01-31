import "./Body.css";
import Images from "../assets/index";
import { NavLink } from "react-router-dom";
import { Toaster } from "../components/ui/toaster"
const Body = () => {
  return (
    <>
      <main className="flex h-screen">
        <div className="w-1/3">
          <h1 className="text-9xl">YOUR FEET DESERVE THE BEST</h1>
        <p>
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>
        
      <NavLink
            to={"/productlistpage"}
            className={"button"}
            style={{ textDecoration: "none" }}
          >
            Explore
          </NavLink>
          <NavLink
            to={"/productpage/2/grey/64"}
            className={"button"}
            style={{ textDecoration: "none" }}
          >
            Nike Grey
          </NavLink>
        </div>
        <div className="hero-image size-2/3">
          <img src={Images.HeroImg} alt="hero-image" className="m-auto w-3/4" />
      </div>
    </main>
      <Toaster />
    </>
  );
}
export default Body;
