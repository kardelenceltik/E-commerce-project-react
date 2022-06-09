import React, { useState } from "react";
import users from "../constants/users.json";
import { useNavigate } from "react-router";

import { FaUserCircle } from "react-icons/fa";

const Login = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const loginHandler = () => {
    var user = users.find(
      (user) => user.username === userName && user.password === password
    );
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
      navigate("/products");
    } else {
      alert("Password or Username incorrect");
    }
  };

  return (
    <div className="">
      <div className="content">
        <div className="container">
          <div className="row mt-5 ">
            <div className="col-md-6 mt-5 mb-5">
              <img
                src="https://img.freepik.com/free-vector/ecommerce-web-page-concept-illustration_114360-8204.jpg?t=st=1654261117~exp=1654261717~hmac=d9f082c9ccf5733c024b3df17a5039f70854cee4a184527987ce78d2d6f599e7&w=200px"
                alt="Image"
                className="img-fluid"
              />
            </div>
            <div className="col-md-6 mt-5 mb-5 contents">
              <div className="row justify-content-center">
                <div className=" col-md-8">
                  <div className="mb-2 text-center">
                    <FaUserCircle className="category-icon-size  login-icon" />
                  </div>

                  <div className=" form-group first">
                    <label for="username">Username</label>
                    <input
                      type="text"
                      onChange={(e) => setUserName(e.target.value)}
                      className="form-control"
                      id="username"
                    />
                  </div>
                  <div className="form-group last mb-4">
                    <label for="password">Password</label>
                    <input
                      type="password"
                      onChange={(e) => setPassword(e.target.value)}
                      className="form-control"
                      id="password"
                    />
                  </div>

                  <div className="d-flex mb-3 align-items-center">
                    <span className="ml-auto">
                      <a href="#" className="forgot-pass ">
                        Register
                      </a>
                    </span>
                  </div>

                  <input
                    type="submit"
                    value="Log In"
                    className="btn btn-block btn-danger"
                    onClick={loginHandler}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
