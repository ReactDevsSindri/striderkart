import "./Navigation.css";
import Images from "../assets/img";
import { useState } from "react";
const Navigation = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <nav className="container">
      <div className="logo">
        <img src={Images.BrandLogo} alt="logo" />
      </div>
      <ul>
        <li href="#">Menu</li>
        <li href="#">Location</li>
        <li href="#">About</li>
        <li href="#">Contact</li>
      </ul>

      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? "Logout" : "Login"}
      </button>
    </nav>
  );
};

export default Navigation;
