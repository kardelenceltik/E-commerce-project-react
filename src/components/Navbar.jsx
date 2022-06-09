import React, { useEffect } from "react";
import { BsCart3 } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router";

const Navbar = ({ displayLoginHandler, displayLogin }) => {
  const navigate = useNavigate();

  useEffect(() => {
    displayLoginHandler();
  }, []);

  const redirectHomePageHandler = () => {
    navigate("/products");
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <h1
            className="header-text "
            onClick={() => redirectHomePageHandler()}
          >
            Shopping
          </h1>

          <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
            <li className="nav-item mr-3">
              <span>{displayLogin}</span>
            </li>
            <li className="nav-item mr-3">
              <NavLink
                className="nav-link "
                to="/myfavorites"
                tabindex="-1"
                aria-disabled="true"
              >
                <AiOutlineHeart className="user-favorite mr-1" color="red" />
                My Favorites
              </NavLink>
            </li>
            <li className="nav-item mr-3">
              <NavLink
                className="nav-link "
                to="/mycart"
                tabindex="-1"
                aria-disabled="true"
              >
                <BsCart3 className="user-cart mr-1" color="red" />
                My Cart
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
