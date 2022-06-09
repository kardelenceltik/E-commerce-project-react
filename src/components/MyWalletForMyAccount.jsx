import React from "react";
import { BsWallet2 } from "react-icons/bs";

const MyWalletForMyAccount = () => {
  return (
    <div>
      <div className="card w-100 mt-4">
        <div className="card-body">
          <h5 className="card-title mt-3">
            {" "}
            My Wallet
            <BsWallet2 className="my-account-icon category-icon-size" />
            40${" "}
          </h5>
          <p className="card-text">
            Please enter the amount you will load into your wallet.
          </p>
          <input type="number" className="form-control" />
          <div>
            <a href="#" className="btn btn-primary add-btn mt-3">
              Send Money
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyWalletForMyAccount;
