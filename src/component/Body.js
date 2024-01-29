import "./Body.css";
import Images from "../assets/index";
import { NavLink } from "react-router-dom";
const Body = () => {
  return (
    <main className="hero container">
      <div className="hero-content">
        <h1>YOUR FEET DESERVE THE BEST</h1>
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
      </div>
      <div className="hero-image">
        <img src={Images.HeroImg} alt="hero-image" />
      </div>
    </main>
    
  );
};
export default Body;
