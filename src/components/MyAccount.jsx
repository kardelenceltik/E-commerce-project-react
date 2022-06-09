import React, { useState } from "react";
import "../App.css";
import { RiUserSettingsLine } from "react-icons/ri";
import { HiOutlineTicket } from "react-icons/hi";
import { BsWallet2 } from "react-icons/bs";
import { FaRegAddressBook } from "react-icons/fa";
import { GiExitDoor } from "react-icons/gi";
import UserInfo from "./UserInfo";
import DiscountCouponsForMyAccount from "./DiscountCouponsForMyAccount";
import MyWalletForMyAccount from "./MyWalletForMyAccount";
import AddressesForMyAccount from "./AddressesForMyAccount";
import { useNavigate } from "react-router-dom";
const MyAccount = () => {
  const [currentSection, setCurrentSection] = useState("information");
  const [rightSideElement, setRightSideElement] = useState();
  const navigate = useNavigate();

  const rightSideElementDecisionHandler = () => {
    if (currentSection === "information") {
      setRightSideElement(<UserInfo />);
    } else if (currentSection === "discount-coupons") {
      setRightSideElement(<DiscountCouponsForMyAccount />);
    } else if (currentSection === "my-wallet") {
      setRightSideElement(<MyWalletForMyAccount />);
    } else if (currentSection === "addresses-component") {
      setRightSideElement(<AddressesForMyAccount />);
    }
  };
  const componentSelectionElements = document.querySelectorAll(
    "[data-component-name]"
  );
  componentSelectionElements.forEach((currentElement) => {
    currentElement.addEventListener("click", function () {
      let relatedComponentName = currentElement.getAttribute(
        "data-component-name"
      );
      setCurrentSection(relatedComponentName);
      rightSideElementDecisionHandler();
    });
  });
  const exitHandler = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div>
      <div className="container">
        <div className="row mt-3 ">
          <div className="col-md-3 ">
            <h3 className="myAccount-text text-center">My Account</h3>
            <ul className="my-account-sidebar list-group">
              <li className="list-group-item" data-component-name="information">
                <RiUserSettingsLine className=" my-account-icon category-icon-size" />{" "}
                User information
              </li>
              <li
                className="list-group-item"
                data-component-name="discount-coupons"
              >
                <HiOutlineTicket className="my-account-icon category-icon-size" />
                Discount coupons
              </li>
              <li className="list-group-item" data-component-name="my-wallet">
                <BsWallet2 className="my-account-icon category-icon-size" />
                My wallet
              </li>

              <li
                className="list-group-item"
                data-component-name="addresses-component"
              >
                <FaRegAddressBook className="my-account-icon category-icon-size" />
                Addresses
              </li>
              <li className="list-group-item" onClick={() => exitHandler()}>
                <GiExitDoor className="my-account-icon category-icon-size" />
                Exit
              </li>
            </ul>
          </div>
          <div className="col-md-9">{rightSideElement}</div>
        </div>
      </div>
    </div>
  );
};

export default MyAccount;
