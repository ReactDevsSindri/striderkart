import React, { useState } from "react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";

const CheckoutPage = () => {
  const [customerName, setCustomerName] = useState("");
  const [buildingNumber, setBuildingNumber] = useState("");
  const [streetNumber, setStreetNumber] = useState("");
  const [pincode, setPincode] = useState("");
  const [phone, setPhone] = useState("");
  const [street, setStreet] = useState("");
  const [district, setDistrict] = useState("");
  const [state, setState] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", {
      customerName,
      buildingNumber,
      streetNumber,
      pincode,
      phone,
      street,
      district,
      state,
    });
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-semibold mb-4">Checkout</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="customerName" className="block mb-1">
            Customer Name:
          </label>
          <Input
            id="customerName"
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
            placeholder="Enter customer name"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="buildingNumber" className="block mb-1">
            Building Number:
          </label>
          <Input
            id="buildingNumber"
            value={buildingNumber}
            onChange={(e) => setBuildingNumber(e.target.value)}
            placeholder="Enter building number"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="streetNumber" className="block mb-1">
            Street Number:
          </label>
          <Input
            id="streetNumber"
            value={streetNumber}
            onChange={(e) => setStreetNumber(e.target.value)}
            placeholder="Enter street number"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="pincode" className="block mb-1">
            Pincode:
          </label>
          <Input
            id="pincode"
            value={pincode}
            onChange={(e) => setPincode(e.target.value)}
            placeholder="Enter pincode"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="phone" className="block mb-1">
            Phone Number:
          </label>
          <Input
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Enter phone number"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="street" className="block mb-1">
            Street:
          </label>
          <Input
            id="street"
            value={street}
            onChange={(e) => setStreet(e.target.value)}
            placeholder="Enter street"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="district" className="block mb-1">
            District:
          </label>
          <Input
            id="district"
            value={district}
            onChange={(e) => setDistrict(e.target.value)}
            placeholder="Enter district"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="state" className="block mb-1">
            State:
          </label>
          <Input
            id="state"
            value={state}
            onChange={(e) => setState(e.target.value)}
            placeholder="Enter state"
          />
        </div>
        <p>Total:100</p>
        <p>Payment by Cash on Delivery</p>

        <Button type="submit" className=" px-4 py-2 rounded">
          Place Order
        </Button>
      </form>
    </div>
  );
};

export default CheckoutPage;
