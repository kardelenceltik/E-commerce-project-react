import React from "react";
import { AiOutlineHeart } from "react-icons/ai";

const EmptyStateForFavorite = () => {
  return (
    <div>
      <div className="container text-center mt-5">
        <AiOutlineHeart className="category-icon-size text-muted" />,
        <h6>You do not have a favorite product! </h6>
      </div>
    </div>
  );
};

export default EmptyStateForFavorite;
