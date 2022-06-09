import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faComments, faStar } from "@fortawesome/free-solid-svg-icons";
// import { } from "@fortawesome/react-fontawesome"
import React, { useState, useEffect } from "react";
import "../App.css";
import alertify from "alertifyjs";
import "alertifyjs/build/css/alertify.css";
import axios from "axios";
const Product = ({
  image,
  title,
  description,
  category,
  price,
  rating,
  id,
}) => {
  const [iconColor, setIconColor] = useState("gray");
  const addToCartHandler = () => {
    alertify.set("notifier", "position", "top-right");
    alertify.success("Product added to cart !");

    let currentUserString = localStorage.getItem("user");

    let currentUser = JSON.parse(currentUserString);

    let stock = 0;

    let isExistProduct = currentUser.cartProducts.find(
      (ürün) => ürün.id === id
    );

    if (isExistProduct) {
      stock = isExistProduct.stock + 1;
      isExistProduct.stock = stock;
    } else {
      stock = 1;
      currentUser.cartProducts.push({
        image,
        title,
        price,
        id,
        stock,
      });
    }

    localStorage.setItem("user", JSON.stringify(currentUser));
  };
  const favoriteProductHandler = () => {
    const currentUserString = localStorage.getItem("user");
    const currentUser = JSON.parse(currentUserString);

    const productIsExist = currentUser.favoriteProducts.find(
      (product) => product.id === id
    );
    if (productIsExist) {
      currentUser.favoriteProducts = currentUser.favoriteProducts.filter(
        (product) => product.id !== id
      );
    } else {
      currentUser.favoriteProducts.push({
        image,
        title,
        price,
        id,
      });
    }
    localStorage.setItem("user", JSON.stringify(currentUser));
    productIsFavorite();
  };
  const productIsFavorite = () => {
    const currentUserString = localStorage.getItem("user");
    const currentUser = JSON.parse(currentUserString);
    const isExistFavoriteProduct = currentUser.favoriteProducts.find(
      (product) => product.id === id
    );
    if (isExistFavoriteProduct) {
      setIconColor("red");
    } else setIconColor("gray");
  };
  useEffect(() => {
    productIsFavorite();
  }, []);
  return (
    <div className="col-md-4 mt-3" data-category-name={category}>
      <div className="card shadow product-size-option p-3 mb-5 bg-white rounded">
        <div className="card-body product-body">
          <FontAwesomeIcon
            onClick={() => favoriteProductHandler()}
            icon={faHeart}
            className="favorite-icon"
            color={iconColor}
          ></FontAwesomeIcon>

          <img
            src={image}
            className="card-img-top product-img  m-3"
            alt="..."
          />

          <h5 className="card-title ">{title.substr(0, 20)}</h5>
          <p className="card-text font-weight-light">{category}</p>

          <p className="card-text description-area font-weight-light ">
            {description.substr(0, 90)}
          </p>
        </div>
        <div className="row">
          <div className="col-6">
            <p className="ml-4">
              <FontAwesomeIcon
                icon={faComments}
                className="comments-icon"
              ></FontAwesomeIcon>
              {rating.count}{" "}
            </p>
          </div>

          <div className="col-6 text-right">
            <p className="mr-4">
              <FontAwesomeIcon
                icon={faStar}
                className="star-icon "
              ></FontAwesomeIcon>
              {rating.rate}{" "}
            </p>
          </div>
        </div>

        <div className="card-body button-group">
          <div className="row">
            <div className="col-6">
              <p className=" font-weight-bold  pricing-area ">{price} $ </p>
            </div>
            <div className="col-6">
              <button
                className="btn btn-outline-success ml-4 form-control"
                onClick={() => addToCartHandler()}
              >
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
