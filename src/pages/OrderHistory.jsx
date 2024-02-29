import { Order } from "../component/Order";
import React, { useEffect, useState } from "react";
import { createClient, imageUrlBuilder } from "@sanity/client";
import moment from "moment";
import { SanityConfig } from "../env";

export const OrderHistory = () => {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    const client = createClient(SanityConfig);
    client
      .fetch(`*[_type == "order" && userId == "0123456789abcdef01234567"]`)
      .then((result) => {
        console.log(result);
        setOrders(result);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  return (
    <>
      {orders.map((order) => (
        <div className=" bg-slate-600 p-5">
          Ordered on : {moment(order._createdAt).format("Do MMM YYYY, h:mm A")}
          {order.products?.map((product) => (
            <Order product={product} />
          ))}
        </div>
      ))}
    </>
  );
};
