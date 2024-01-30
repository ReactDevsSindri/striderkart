import "./Navigation.css";
import Images from "../assets";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Button } from "../components/ui/button";


const Navigation = () => {
  // let { productId, color } = useParams();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <nav className="container navbar">
      <div className="logo">
        <img  src={Images.BrandLogo} alt="logo" />
      </div>

      <ul style={{fontSize:'18px',fontWeight:'bold'}}>
        <li href="#">Menu</li>
        <li href="#">Products</li>
        <li href="#">About</li>
        <li href="#">Contact</li>
      </ul>
      <div>
        <Button>Login</Button>
        </div>
      {isLoggedIn??<img className="cart" src={Images.Cart}></img>}
    </nav>
  );
};

export default Navigation;
