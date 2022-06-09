import React from "react";
const UserInfo = () => {
  return (
    <div className="container rounded bg-white mt-1 mb-5">
      <div className="row">
        <div className="col-md-6 border-right">
          <div className=" py-5">
            <div className="d-flex justify-content-between align-items-center mb-1">
              <h4 className="text-right text-bold">Profile Settings</h4>
            </div>
            <div className="row ">
              <div className="col-md-6">
                <label className="labels">Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="first name"
                  value=""
                />
              </div>
              <div className="col-md-6">
                <label className="labels">Surname</label>
                <input
                  type="text"
                  className="form-control"
                  value=""
                  placeholder="surname"
                />
              </div>
            </div>

            <div className="row mt-1">
              <div className="col-md-12">
                <label className="labels">E-mail</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="enter phone number"
                />
              </div>
              <div className="col-md-12">
                <label className="labels">Mobile Number</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="enter phone number"
                />
              </div>
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <label className="labels">Date Of Birth</label>
                    <div className="row">
                      <div className="col-4">
                        <input
                          type="number"
                          className="form-control"
                          placeholder="day"
                        />
                      </div>
                      <div className="col-4">
                        <input
                          type="number"
                          className="form-control"
                          placeholder="mount"
                        />
                      </div>
                      <div className="col-4">
                        <input
                          type="number"
                          className="form-control"
                          placeholder="year"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-5 text-center">
              <button className="btn btn-primary profile-button" type="button">
                Save Profile
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="p-3 py-5">
            <div className="d-flex justify-content-between align-items-center experience">
              <h4 className="text-bold">Password Update</h4>
            </div>
            <div className="col-md-12">
              <label className="labels">current password</label>
              <input
                type="text"
                className="form-control"
                placeholder="enter your password"
                value=""
              />
            </div>
            <div className="col-md-12">
              <label className="labels">New Password</label>
              <input
                type="text"
                className="form-control"
                placeholder="enter your password"
                value=""
              />
            </div>
            <div className="col-md-12">
              <label className="labels">New Password (Again)</label>
              <input
                type="text"
                className="form-control"
                placeholder="enter your password"
                value=""
              />
            </div>
            <div className="mt-5 text-center">
              <button className="btn btn-primary profile-button" type="button">
                Update
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
