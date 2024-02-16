// import { DropdownMenuIcon } from "@radix-ui/react-icons";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { useState } from "react";
import CartProduct from "./CartProduct";

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
    <div className="flex justify-center ">
      <CartProduct />
      <div className="bg-slate-400 mt-10 w-[400px] p-10 border-black rounded-lg shadow-md">
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
          <Button type="submit" className="my-2">
            Proceed To Pay
          </Button>
        </form>
      </div>
    </div>
  );
}
