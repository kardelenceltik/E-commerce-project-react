import axios from "axios";
import React, { useState, useEffect } from "react";
import { GiDress } from "react-icons/gi";
import { MdComputer } from "react-icons/md";
import { FaGem } from "react-icons/fa";
import { GiTShirt } from "react-icons/gi";

const CategoryScroller = () => {
  const [categories, setCategories] = useState([]);
  const [categoryIcon, setCateogryIcon] = useState([
    <MdComputer className="category-icon-size" />,
    <FaGem className="category-icon-size" />,
    <GiTShirt className="category-icon-size" />,
    <GiDress className="category-icon-size" />,
  ]);
  const getCategory = () => {
    axios
      .get("https://fakestoreapi.com/products/categories")
      .then((response) => {
        console.log(response);
        setCategories(response.data);
      });
  };
  useEffect(() => {
    getCategory();
  }, []);

  const productFilterByCategoryHandler = (category) => {
    let productElements = document.querySelectorAll("[data-category-name]");
    productElements.forEach((productElement) => {
      if (productElement.getAttribute("data-category-name") !== category) {
        productElement.classList.add("d-none");
      } else {
        productElement.classList.remove("d-none");
      }
    });
  };
  return (
    <div className="row d-flex flexible-menu">
      {categories.map((category, index) => {
        return (
          <div
            className="scroller"
            onClick={() => productFilterByCategoryHandler(category)}
            key={index}
          >
            <div className="scroller-item">{categoryIcon[index]}</div>
          </div>
        );
      })}
    </div>
  );
};

export default CategoryScroller;
