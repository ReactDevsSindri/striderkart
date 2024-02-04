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
    <nav className="navbar bg-slate-300">
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
                  <p>Total :{calculateTotal()}</p>
                  <Button>Checkout</Button>
                </div>
              </SheetClose>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </ul>
    </nav>
  );
};

export default Navigation;
