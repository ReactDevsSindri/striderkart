// import { DropdownMenuIcon } from "@radix-ui/react-icons";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { useState } from "react";
import CartProduct from "./CartProduct";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "../components/ui/drawer";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "../components/ui/sheet";
import { Checkbox } from "../components/ui/checkbox";
import { NavLink } from "react-router-dom";

export default function Checkout() {
  const [localAdd, setLocalAdd] = useState();
  const [add1, setAdd1] = useState();
  const [addState, setAddState] = useState();
  const [addDist, setaddDist] = useState();
  const [addPin, setAddPin] = useState();

  const handleSumbit = (event) => {
    event.preventDefault();
    console.log(localAdd, add1, addState, addDist, addPin);
    setAdd1("");
    setAddPin("");
    setAddState("");
    setLocalAdd("");
    setaddDist("");
  };
  return (
    <div>
      <div className="flex justify-center dark:text-white">
        <div className="mt-10 w-[400px] p-10">
          <form onSubmit={handleSumbit}>
            <h1 className="my-5">
              Address <span className="text-red">*</span>
            </h1>
            <div className="flex flex-col">
              <label htmlFor="locality">Locality</label>
              <Input
                placeholder="Enter Your Locality Address"
                type="text"
                id="locality"
                value={localAdd}
                onChange={(event) => setLocalAdd(event.target.value)}
                required
              />
              <label htmlFor="address1" className="my-2">
                Address1
              </label>
              <Input
                placeholder="Enter Your Address"
                type="text"
                value={add1}
                onChange={(event) => setAdd1(event.target.value)}
                required
              />
              <label htmlFor="state" className="my-2">
                State
              </label>

              <Input
                placeholder="Enter Your State"
                type="text"
                value={addState}
                onChange={(event) => setAddState(event.target.value)}
                required
              />
              <label htmlFor="district" className="my-2">
                District
              </label>
              <Input
                placeholder="Enter Your District"
                type="text"
                value={addDist}
                onChange={(event) => setaddDist(event.target.value)}
                required
              />
              <label htmlFor="pincode" className="my-2">
                Pin Code
              </label>
              <Input
                placeholder="Enter Your PIN"
                type="number"
                value={addPin}
                onChange={(event) => setAddPin(event.target.value)}
                required
              />
            </div>
            <Checkbox className="my-2" />
            <label className="mx-2">Cash On Delivery</label>

            <NavLink to="/orderplaced">
              <SheetClose>
                <Button type="submit" className="my-2">
                  Place Your Order
                </Button>
              </SheetClose>
            </NavLink>
          </form>
        </div>
      </div>
    </div>
  );
}
