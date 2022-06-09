import React, { useState } from "react";
import "./App.css";
import Login from "./components/Login";
import ProductList from "./components/ProductList";
import Register from "./components/Register";

import { Routes, Route, NavLink } from "react-router-dom";
import Navbar from "./components/Navbar";
import MyAccount from "./components/MyAccount";
import { BiUser } from "react-icons/bi";

import UserInfo from "./components/UserInfo";
import MyCart from "./components/MyCart";
import MyFavorites from "./components/MyFavorites";

import Footer from "./components/Footer";
function App() {
  const [loginDisplay, setLoginDisplay] = useState(undefined);

  const checkUserData = () => {
    const userInfo = localStorage.getItem("user");
    if (userInfo) {
      setLoginDisplay(
        <NavLink
          className="nav-link "
          to="/myaccount"
          tabindex="-1"
          aria-disabled="true"
        >
          <BiUser className="user-account mr-1" color="red" to="myaccount" />
          My Account
        </NavLink>
      );
    } else {
      setLoginDisplay(
        <NavLink
          className="nav-link "
          to="/login"
          tabindex="-1"
          aria-disabled="true"
        >
          <BiUser className="user-account mr-1" color="red" to="myaccount" />
          Login
        </NavLink>
      );
    }
  };
  return (
    <div>
      <Navbar displayLoginHandler={checkUserData} displayLogin={loginDisplay} />
      <div className="App ">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="products"
            element={<ProductList displayLoginHandler={checkUserData} />}
          />
          <Route path="register" element={<Register />} />
          <Route path="/myaccount" element={<MyAccount />} />
          <Route path="/mycart" element={<MyCart />}></Route>
          <Route path="/myfavorites" element={<MyFavorites />}></Route>
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
