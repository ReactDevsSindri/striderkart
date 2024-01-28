import "./Navigation.css";
import Images from "../assets";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  // let { productId, color } = useParams();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <nav className="container navbar">
      <div className="logo">
        <img src={Images.BrandLogo} alt="logo" />
      </div>

      <ul>
        <li href="#">Menu</li>
        <li href="#">Products</li>
        <li href="#">About</li>
        <li href="#">Contact</li>
      </ul>
      <div>
      </div>
      {isLoggedIn?<img className="cart" src={Images.Cart}></img>:""}
    </nav>
  );
};

export default Navigation;
