import "./Navigation.css";
import Images from "../assets/img";
import { useState } from "react";
import Homepage from "../pages/Homepage";
const Home = () => {
  return <Homepage />;
};
const Navigation = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <nav className="container">
      <div className="logo">
        <img src={Images.BrandLogo} alt="logo" onClick={() => Home} />
      </div>

      <ul>
        <li href="#">Menu</li>
        <li href="#">Products</li>
        <li href="#">About</li>
        <li href="#">Contact</li>
      </ul>

      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? "Logout" : "Login"}
      </button>
      <img className="cart" src={Images.Cart}></img>
    </nav>
  );
};

export default Navigation;
