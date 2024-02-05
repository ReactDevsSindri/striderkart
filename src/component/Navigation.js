import "./Navigation.css";
import Images from "../assets";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { Button } from "../components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetTrigger,
} from "../components/ui/sheet";
import { ScrollArea } from "../components/ui/scroll-area";
import { Separator } from "../components/ui/separator";

import { ShoppingBasket, LogOut } from "lucide-react";
import CartProduct from "./CartProduct";
import AppContext from "../context/AppContext";
import assets from "../assets";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";

const Navigation = () => {
  const appContext = useContext(AppContext);
  console.log(appContext);
  function calculateTotal() {
    const priceArry = appContext.contextValues.cart.map(
      (productId) => assets.productListData[productId - 1].price
    );
    // [50,60,70]
    const Total = priceArry.reduce((a, b) => a + b, 0);
    return Total;
  }

  return (
    <div className="">
      <nav className="navbar flex w-full justify-around bg-slate-300">
        <NavLink to="/">
          <div className="logo">
            <img src={Images.BrandLogo} alt="logo" />
          </div>
        </NavLink>

        <ul
          className="hidden md:flex ml-10 lg:ml-20"
          style={{ fontSize: "18px", fontWeight: "bold" }}
        >
          <li href="#">Menu</li>
          <li href="#">Products</li>
          <li href="#">About</li>
          <li href="#">Contact</li>
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
          <Sheet>
            <SheetTrigger asChild>
              {appContext.contextValues.userDetails.isLoggedIn && (
                <Button size="icon">
                  <ShoppingBasket className="h-4 w-4" />
                  {appContext.contextValues.cart.length}
                </Button>
              )}
            </SheetTrigger>
            <SheetContent>
              <div className="p-2">
                {/* <SheetHeader>
          <SheetTitle>My Cart</SheetTitle>
          <SheetDescription>
          Items in your cart, proceed to Checkout
          </SheetDescription>
        </SheetHeader> */}
                {/* <Separator/> */}
              </div>
              <ScrollArea className="h-4/5">
                {appContext.contextValues.cart.map((ci) => (
                  <>
                    <CartProduct productId={ci} />
                    <Separator />
                  </>
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
        </ul>
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button size="icon">
              <HamburgerMenuIcon className="h-4 w-4" />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <ul>
              <li className="my-3">
                <NavLink to="/productlistpage">
                  <SheetClose>Products</SheetClose>
                </NavLink>
              </li>
              <Separator />
              <li className="my-3">
                <NavLink to="/">
                  <SheetClose>About Us</SheetClose>
                </NavLink>
              </li>
              <Separator />
              <li className="my-3">
                <NavLink to="/contactus">
                  <SheetClose>Contact Us</SheetClose>
                </NavLink>
              </li>
              <Separator />
              <li className="my-3">
                {appContext.contextValues.userDetails.isLoggedIn ? (
                  <Button
                    onClick={() => {
                      console.log("logout button onClick called");
                      appContext.setContextValues({
                        ...appContext.contextValues,
                        userDetails: { isLoggedIn: false },
                      });
                      localStorage.removeItem("isLoggedIn");
                    }}
                  >
                    <SheetClose>
                      Logout <LogOut className="ml-1" />{" "}
                    </SheetClose>
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
            <SheetFooter className="flex flex-row justify-center absolute bottom-3 left-0  w-full ">
              <p>Copyright @ 2024</p>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </nav>
    </div>
  );
};

export default Navigation;
