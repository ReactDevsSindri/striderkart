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
import { NavLink, useNavigate } from "react-router-dom";
import { SanityConfig } from "../env";
import { createClient, imageUrlBuilder } from "@sanity/client";

export default function Checkout() {
  const [buildingNumber, setBuildingNumber] = useState();
  const [streetName, setStreetName] = useState();
  const [districtName, setDistrictName] = useState();
  const [stateName, setstateName] = useState();
  const [pinCode, setPinCode] = useState();
  const navigate = useNavigate();

  const handleSumbit = (event) => {
    console.log("handle Submit");
    event.preventDefault();
    // Initialize Sanity client
    const client = createClient(SanityConfig);
    // Prepare data
    const data = {
      _type: "order",
      username: "JohnDoe",
      userId: "0123456789abcdef01234567",
      products: [
        {
          productId: "p123",
          productName: "Product 1",
          productSize: "L",
          productPrice: 10.99,
          productQty: 2,
        },
        {
          productId: "p456",
          productName: "Product 2",
          productSize: "M",
          productPrice: 15.99,
          productQty: 1,
        },
      ],
      phoneNumber: "1234567890",
      shippingAddress: {
        buildingNumber: buildingNumber,
        street: streetName,
        district: districtName,
        state: stateName,
        pinCode: pinCode,
      },
    };
    console.log(data);

    // Post data
    client
      .create(data)
      .then((response) => {
        console.log("Data posted successfully:", response);
      })
      .catch((error) => {
        console.error("Error posting data:", error);
      });

    navigate("/orderplaced");
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
              <label htmlFor="Building No.">Building No.</label>
              <Input
                placeholder="Building Number"
                type="text"
                id="Building No."
                value={buildingNumber}
                onChange={(event) => setBuildingNumber(event.target.value)}
                required
              />
              <label htmlFor="Street" className="my-2">
                "Street
              </label>
              <Input
                placeholder="Street"
                type="text"
                value={streetName}
                onChange={(event) => setStreetName(event.target.value)}
                required
              />
              <label htmlFor="state" className="my-2">
                State
              </label>

              <Input
                placeholder="State"
                type="text"
                value={stateName}
                onChange={(event) => setstateName(event.target.value)}
                required
              />
              <label htmlFor="district" className="my-2">
                District
              </label>
              <Input
                placeholder="District"
                type="text"
                value={districtName}
                onChange={(event) => setDistrictName(event.target.value)}
                required
              />
              <label htmlFor="pincode" className="my-2">
                Pin Code
              </label>
              <Input
                placeholder="Pincode"
                type="number"
                value={pinCode}
                onChange={(event) => setPinCode(event.target.value)}
                required
              />
            </div>
            <Checkbox className="my-2" />
            <label className="mx-2">Cash On Delivery</label>

            <SheetClose>
              <Button type="submit" className="my-2">
                Place Your Order
              </Button>
            </SheetClose>
          </form>
        </div>
      </div>
    </div>
  );
}
