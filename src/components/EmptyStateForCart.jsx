import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";

const EmptyStateForCart = () => {
  return (
    <div className="container text-center mt-5">
      <AiOutlineShoppingCart className="category-icon-size text-muted" />,
      <h6>There are no products in your cart !</h6>
    </div>
  );
};

export default EmptyStateForCart;
