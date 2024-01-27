import React from "react";
import { useParams } from "react-router-dom";

const ProductListPage = () => {
  let { productId, color, storage } = useParams();
  return (
    <div>
      ProductListPage
      <ul>
        <li>
          Your clicked Product {productId} with {color} color with {storage} GB
        </li>
      </ul>
    </div>
  );
};

export default ProductListPage;
