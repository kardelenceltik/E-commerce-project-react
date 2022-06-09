import React from "react";

const DiscountCouponsForMyAccount = () => {
  return (
    <div className="row">
      <div className="col-md-4">
        <div className="card w-30 mt-4">
          <div className="card-body">
            <h5 className="card-title">Coupon 1</h5>
            <p className="card-text">
              100$ gift coupon for your 500$ or more purchases
            </p>
            <a href="#" className="btn btn-primary add-btn">
              Add
            </a>
          </div>
        </div>
      </div>

      <div className="col-md-4">
        <div className="card w-30 mt-4">
          <div className="card-body">
            <h5 className="card-title">Coupon 2</h5>
            <p className="card-text">
              $5 discount coupon valid for your gem purchases of $100 or more
            </p>
            <a href="#" className="btn btn-primary add-btn">
              Add
            </a>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card w-30 mt-4">
          <div className="card-body">
            <h5 className="card-title">Coupon 3</h5>
            <p className="card-text">
              1% of your purchase of $200 or more is on us
            </p>
            <a href="#" className="btn btn-primary add-btn">
              Add
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscountCouponsForMyAccount;
