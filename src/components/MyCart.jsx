import React, { useState, useEffect } from "react";
import { FaCcMastercard } from "react-icons/fa";
import { FaCcVisa } from "react-icons/fa";
import Product from "./Product";
import EmptyStateForCart from "./EmptyStateForCart";
// ödeme kısmına toplam ürün sayısı ve total tutar ekle

const MyCart = () => {
  const [products, setProducts] = useState([]);
  const [totalProductCount, setTotalProductCount] = useState(0);
  const [totalOrderPrice, setTotalOrderPrice] = useState(0);

  const calculateMoneyForOrder = () => {
    let currentUserString = localStorage.getItem("user");
    let currentUser = JSON.parse(currentUserString);
    setTotalProductCount(0);
    setTotalOrderPrice(0);
    currentUser.cartProducts.forEach((product) => {
      setTotalProductCount((previousValue) => previousValue + product.stock);
      setTotalOrderPrice(
        (previousPrice) => previousPrice + product.price * product.stock
      );
    });
  };

  useEffect(() => {
    let currentUserString = localStorage.getItem("user");
    let currentUser = JSON.parse(currentUserString);
    setProducts(currentUser.cartProducts);
    calculateMoneyForOrder();
  }, []);

  const deleteProductFromCart = (productId) => {
    let currentUserString = localStorage.getItem("user");
    let currentUser = JSON.parse(currentUserString);

    let relatedProduct = currentUser.cartProducts.find(
      (product) => product.id === productId
    );

    relatedProduct.stock--;

    if (relatedProduct.stock === 0) {
      currentUser.cartProducts = currentUser.cartProducts.filter(
        (product) => product.id !== productId
      );
    }

    let jsonString = JSON.stringify(currentUser);
    localStorage.setItem("user", jsonString);

    setProducts(currentUser.cartProducts);
    calculateMoneyForOrder();
  };
  const addProductFromCart = (productId) => {
    let currentUserString = localStorage.getItem("user");
    let currentUser = JSON.parse(currentUserString);

    let relatedProduct = currentUser.cartProducts.find(
      (product) => product.id === productId
    );

    relatedProduct.stock++;

    let jsonString = JSON.stringify(currentUser);
    localStorage.setItem("user", jsonString);

    setProducts(currentUser.cartProducts);
    calculateMoneyForOrder();
  };

  return (
    <div className="container">
      <div className="row mt-4">
        <div className="col-md-8 ">
          {products.length === 0 ? (
            <EmptyStateForCart />
          ) : (
            products.map((product) => {
              return (
                <div className="card mb-3 ">
                  <div className="row">
                    <div className="col-md-4 ">
                      <img
                        src={product.image}
                        className="cart-image"
                        style={{
                          height: "180px",
                          width: "180px",
                        }}
                        alt=".."
                      />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h5 className="card-title">{product.title}</h5>

                        <p>{product.price}$</p>
                        <div className="stock-control mt-3">
                          <button
                            className="add-delete-btn"
                            onClick={() => deleteProductFromCart(product.id)}
                          >
                            -
                          </button>
                          <input
                            className="stock-input m-2"
                            type="text"
                            value={product.stock}
                          />
                          <button
                            className="add-delete-btn"
                            onClick={() => addProductFromCart(product.id)}
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
        <div className="card col-md-4 payment-panel">
          <div className="card-body ">
            <h2 className="text-center mb-4 justify-content-between">
              Card Details
            </h2>
            <p className="font-light">Select Card Type : </p>
            <div className="justify-content-between">
              <input type="radio" name="payment-selection" />
              <FaCcMastercard className="category-icon-size master-icon" />
              <input type="radio" name="payment-selection" />
              <FaCcVisa className="category-icon-size visa-icon" />
              <input
                type="text"
                className="form-control"
                placeholder="kart no"
                maxlength="12"
              />
              <div className="row mt-3">
                <div className="col-sm-8">
                  <select
                    class="form-select mr-2 form-control custom-select-for-payment"
                    aria-label="Default select example"
                  >
                    <option selected>Ay</option>
                    <option value="1">01</option>
                    <option value="2">02</option>
                    <option value="3">04</option>
                    <option value="3">05</option>
                    <option value="3">06</option>
                    <option value="3">07</option>
                    <option value="3">08</option>
                    <option value="3">09</option>
                    <option value="3">10</option>
                    <option value="3">11</option>
                    <option value="3">12</option>
                  </select>
                  <select
                    class="form-select form-control custom-select-for-payment"
                    aria-label="Default select example"
                    style={{ display: "inline" }}
                  >
                    <option selected>Yıl</option>
                    <option value="1">2020</option>
                    <option value="2">2021</option>
                    <option value="3">2022</option>
                    <option value="3">2023</option>
                    <option value="3">2024</option>
                    <option value="3">2025</option>
                    <option value="3">2026</option>
                  </select>
                </div>
                <div className="col-sm-4 ">
                  <input
                    type="number"
                    placeholder="CVV"
                    className="form-control"
                    maxlength="3"
                  />
                </div>
              </div>
            </div>
            <h6 className="card-title mt-4">Orders</h6>
            <p className="card-subtitle  m-2 ">
              Total number of products :
              <span className="float-right">{totalProductCount}</span>
            </p>
            <hr />
            <p className="card-text  m-2">
              Total : <span className="float-right">{totalOrderPrice}$</span>{" "}
            </p>
            <button className=" checkout-btn form-control">CHECKOUT</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyCart;
