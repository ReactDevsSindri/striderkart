import "./Navigation.css";
import Images from "../assets/img";
import { useState } from "react";
import Homepage from "../pages/Homepage";
import Login from "../pages/Login";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  // let { productId, color } = useParams();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <nav className="container">
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
        <button>
          {/* <NavLink
            to={"/LoginPage/"}
            // className={"button"}
            style={{ textDecoration: "none" }}
            onClick={() => setIsLoggedIn(!isLoggedIn)}
          >
            {isLoggedIn ? "Logout" : "Login"}
          </NavLink> */}
        </button>
        {/* {isLoggedIn && <Login />} */}
      </div>
      <img className="cart" src={Images.Cart}></img>
    </nav>
  );
};

export default Navigation;
