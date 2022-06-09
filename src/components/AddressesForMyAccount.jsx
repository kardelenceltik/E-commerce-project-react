import React from "react";

const AddressesForMyAccount = () => {
  return (
    <div>
      <div className="row mt-4">
        <div className="col-sm-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Istanbul</h5>
              <p className="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
                quasi iusto molestiae praesentium tempore ipsa, cum sit iure
                rerum quas ex corporis minima aut, officiis pariatur atque
                molestias soluta. Veniam.
              </p>
              <a href="#" className="btn btn-primary edit-btn">
                Edit
              </a>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Sakarya</h5>
              <p className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Temporibus, amet deserunt. Sed repudiandae recusandae id libero
                dicta rem, quam cupiditate sit beatae explicabo quas facilis
                expedita amet corporis eaque saepe.
              </p>
              <a href="#" className="btn btn-primary edit-btn">
                Edit
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddressesForMyAccount;
