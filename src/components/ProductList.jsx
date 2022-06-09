import React, { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";
import Product from "./Product";
import CategoryScroller from "./CategoryScroller";
const ProductList = ({ displayLoginHandler }) => {
  const [products, setProducts] = useState([]);
  const [loaderClass, setLoaderClass] = useState("");
  const getProducts = () => {
    axios.get("https://fakestoreapi.com/products").then((response) => {
      setProducts(response.data);
      if (response.data.length > 0) {
        setLoaderClass("d-none");
      }
    });
  };

  useEffect(() => {
    getProducts();
    displayLoginHandler();
  }, []);

  return (
    <div className="container">
      <CategoryScroller />
      <div className={"page-loader " + loaderClass}>
        <div className="spinner-border text-secondary" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
      <div className="row">
        {products.map((data, index) => {
          return (
            <Product
              key={data.id}
              image={data.image}
              category={data.category}
              id={data.id}
              description={data.description}
              price={data.price}
              rating={data.rating}
              title={data.title}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProductList;
