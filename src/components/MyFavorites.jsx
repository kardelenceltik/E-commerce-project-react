import React from "react";
import "../App.css";
import { AiFillHeart } from "react-icons/ai";

const MyFavorites = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <div className="card favorite-page">
            <AiFillHeart className="category-icon-size  favorite-icon" />
            <img
              src="https://www.largeformatreview.com/images/new_stories/hardware/industrial/hp-surface-print-lfr.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card favorite-page">
            <AiFillHeart className="category-icon-size  favorite-icon" />
            <img
              src="https://www.largeformatreview.com/images/new_stories/hardware/industrial/hp-surface-print-lfr.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card favorite-page">
            <AiFillHeart className="category-icon-size  favorite-icon" />
            <img
              src="https://www.largeformatreview.com/images/new_stories/hardware/industrial/hp-surface-print-lfr.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyFavorites;
