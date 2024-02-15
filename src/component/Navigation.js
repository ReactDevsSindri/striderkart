import "./Navigation.css";
import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetTrigger,
} from "../components/ui/sheet";
import { ScrollArea } from "../components/ui/scroll-area";
import { Separator } from "../components/ui/separator";
import { Switch } from "../components/ui/switch";
import { Button } from "../components/ui/button";
import { ShoppingBasket, LogOut, MoonStarIcon } from "lucide-react";
import { HamburgerMenuIcon, SunIcon } from "@radix-ui/react-icons";
import AppContext from "../context/AppContext";
import ThemeContext from "../context/ThemeContext";
// import Images from "../assets";
import assets from "../assets";
import CartProduct from "./CartProduct";
import CartContext from "../context/CartContext";
import * as lodash from "lodash";

const Navigation = () => {
  const appContext = useContext(AppContext);
  const themeData = useContext(ThemeContext);
  const cartContext = useContext(CartContext);

  function calculateTotal() {
    if (cartContext.cartValue.length === 0) return 0;
    console.log(cartContext.cartValue);
    const priceArrayOfItemsInCart = cartContext.cartValue.map((product) => {
      const selectedSizePrice = product.sizes.find(
        (sizeObj) => sizeObj.size === product.sizeSlected
      ).offerPrice;
      return selectedSizePrice;
    });
    return lodash.sum(priceArrayOfItemsInCart);
  }

  const handleThemeSwitch = (isChecked) => {
    themeData.setThemeValue({ currentMode: isChecked ? "dark" : "light" });
    const root = window.document.documentElement;
    isChecked ? root.classList.add("dark") : root.classList.remove("dark");
  };

  const menuItems = [
    { to: "/productlistpage", label: "Products" },
    { to: "/aboutus", label: "About Us" },
    { to: "/contactus", label: "Contact Us" },
    { to: "/addproduct", label: "Add Product" },
  ];

  return (
    <div
      className={`navbar z-10 flex justify-around bg-slate-300 dark:bg-slate-700`}
    >
      <div className="w-1/2 md:w-48 flex justify-start">
        <NavLink to="/" className="w-2/3">
          <img
            className={`dark:filter dark:invert`}
            src={assets.BrandLogo}
            alt="logo"
          />
        </NavLink>
      </div>

      <ul
        className="hidden md:flex justify-around ml-10 lg:ml-20 w-1/3 dark:text-white"
        style={{ fontSize: "18px", fontWeight: "bold" }}
      >
        {menuItems.map((menuItem) => (
          <li key={menuItem.to}>
            <NavLink to={menuItem.to} className={"w-28"}>
              {menuItem.label}
            </NavLink>
          </li>
        ))}
        {appContext.contextValues.userDetails.isLoggedIn ? (
          <Button
            onClick={() =>
              appContext.setContextValues({
                ...appContext.contextValues,
                userDetails: { isLoggedIn: false },
              })
            }
          >
            Logout <LogOut className="ml-1" />
          </Button>
        ) : (
          <NavLink to="/login">
            <Button>Login</Button>
          </NavLink>
        )}
      </ul>

      <div className="order-first md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button size="icon">
              <HamburgerMenuIcon className="h-4" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="dark:text-white">
            <ul className="space-y-5">
              {menuItems.map((menuItem) => (
                <li key={menuItem.to + "drawer"} className="my-3">
                  <NavLink to={menuItem.to}>
                    <SheetClose>{menuItem.label}</SheetClose>
                  </NavLink>
                  <Separator className="mt-3" />
                </li>
              ))}
              <li className="my-3">
                {appContext.contextValues.userDetails.isLoggedIn ? (
                  <Button
                    onClick={() =>
                      appContext.setContextValues({
                        ...appContext.contextValues,
                        userDetails: { isLoggedIn: false },
                      })
                    }
                  >
                    <SheetClose>Logout</SheetClose> <LogOut className="ml" />
                  </Button>
                ) : (
                  <NavLink to="/login">
                    <Button>
                      <SheetClose>Login</SheetClose>
                    </Button>
                  </NavLink>
                )}
              </li>
            </ul>
            <SheetFooter className="flex flex-row justify-center absolute bottom-3 left-0 w-full">
              <p>Copyright @ 2024</p>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>

      <Sheet>
        <SheetTrigger asChild>
          {appContext.contextValues.userDetails.isLoggedIn && (
            <Button size="icon">
              <ShoppingBasket className=" " />
              {cartContext.cartValue.length}
            </Button>
          )}
        </SheetTrigger>
        <SheetContent>
          <ScrollArea className="h-4/5">
            {cartContext.cartValue.map((product) => (
              <React.Fragment key={product}>
                <CartProduct product={product} />
                <Separator />
              </React.Fragment>
            ))}
          </ScrollArea>
          <SheetFooter>
            <SheetClose asChild>
              <div
                className="w-full mt-5 bg-slate-300 p-3 text-white"
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  alignItems: "center",
                  position: "absolute",
                  bottom: "0",
                  right: "0",
                }}
              >
                <p>Total :₹{calculateTotal()}</p>
                <Button>Checkout</Button>
              </div>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>

      <div className="flex items-center space-x-2 dark:text-white ">
        <SunIcon />
        <Switch
          className="dark:text-white"
          checked={themeData.themeValue.currentMode === "dark"}
          onCheckedChange={(isChecked) => handleThemeSwitch(isChecked)}
        />
        <MoonStarIcon />
      </div>
    </div>
  );
};

export default Navigation;
