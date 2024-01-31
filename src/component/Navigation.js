import "./Navigation.css";
import Images from "../assets";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input"
import { Label } from "../components/ui/label"
import {
Sheet,
SheetClose,
SheetContent,
SheetDescription,
SheetFooter,
SheetHeader,
SheetTitle,
SheetTrigger,
} from "../components/ui/sheet"
import { ScrollArea } from "../components/ui/scroll-area"
import { Separator } from "../components/ui/separator"
 

import { ShoppingBasket,LogIn, LogOut } from "lucide-react"
import ProductCard from "./ProductCard";
import CartProduct from "./CartProduct";

const tags = Array.from({ length: 50 }).map(
  (_, i, a) => `v1.2.0-beta.${a.length - i}`
)
const Navigation = () => {
  // let { productId, color } = useParams();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  console.log(localStorage.getItem('isLoggedIn')=='true')
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
          {localStorage.getItem('isLoggedIn')==='true'?<Button onClick={()=>localStorage.setItem('isLoggedIn',false)}>Logout  <LogOut className="ml-1"/></Button>
          :
          <NavLink to="/login">
          <Button >Login</Button>
          </NavLink>
          }
      <Sheet >
      <SheetTrigger asChild>
        {localStorage.getItem('isLoggedIn')==='true'&&<Button size="icon"><ShoppingBasket className="h-4 w-4" /></Button>}
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
          <CartProduct/>
          <Separator/>
          <CartProduct/>
          <Separator/>
          <CartProduct/>
          <Separator/>
          <CartProduct/>
          <Separator/>
          <CartProduct/>
          <Separator/>
          <CartProduct/>
    </ScrollArea>
        <SheetFooter>
          <SheetClose asChild>
            <div className="w-full mt-5 bg-slate-300 p-3 text-white" style={{display:'flex',justifyContent:'space-around',alignItems:'center', position:'absolute',bottom:'0',right:'0'}}>
            <p>Total:1000</p>
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
