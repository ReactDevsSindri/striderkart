import { createPortal } from "react-dom";
import "./Navigation.css";
import Images from "../assets";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Button } from "../components/ui/button";

const Navigation = () => {
  // let { productId, color } = useParams();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <nav className="navbar">
      <NavLink to="/">
        <div className="logo">
          <img src={Images.BrandLogo} alt="logo" />
        </div>
      </NavLink>

      <ul style={{ fontSize: "18px", fontWeight: "bold" }}>
        <li href="#">Menu</li>
        <li href="#">Products</li>
        <li href="#">About</li>
        <li href="#">Contact</li>
        <Button>Login</Button>
      </ul>

      {isLoggedIn ?? <img className="cart" src={Images.Cart}></img>}
    </nav>
  );
};

createPortal(<Navigation />, document.getElementById("navbar"));
export default Navigation;
