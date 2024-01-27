import "./Body.css";
import Images from "../assets/img/index";
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

        <div className="hero-btn">
          <NavLink
            to={`/productpage/${1}/black/128`}
            className={"button"}
            style={{ textDecoration: "none" }}
          >
            Nike Black
          </NavLink>
          <NavLink
            to={"/productpage/2/grey/64"}
            className={"button"}
            style={{ textDecoration: "none" }}
          >
            Nike Grey
          </NavLink>
        </div>

        <div className="shopping">
          <p>Also Available On</p>

          <div className="brand-icons">
            <img src={Images.AmazonImg} alt="amazon-logo" />
            <img src={Images.Flipkart} alt="flipkart-logo" />
          </div>
        </div>
      </div>
      <div className="hero-image">
        <img src={Images.HeroImg} alt="hero-image" />
      </div>
    </main>
  );
};
export default Body;
