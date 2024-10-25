import React from "react";
import banner from "../assets/assets/images/banner.png";

const HeroBanner = () => {
  return (
    <div className="container text-center py-5" style={{ marginTop: "50px" }}>
      <div className="row align-items-center flex-column-reverse flex-md-row">
        <div className="col-md-6 d-flex flex-column justify-content-center mb-4 mb-md-0">
          <h2
            className="text-primary-emphasis mb-3 mb-md-4"
            style={{ fontSize: "2.5rem", fontWeight: "bold" }}
          >
            Fitness Club
          </h2>
          <h4 className="h4 text-primary-emphasis mb-3 mb-md-4">
            Sweat, Smile, and Repeat
          </h4>
          <p
            className="lead mb-4 mb-md-5 text-primary-emphasis"
            style={{ fontSize: "1.25rem" }}
          >
            Check out the most effective exercises to reach your fitness goals.
          </p>
          <button
            className="btn btn-primary btn-lg"
            onClick={() => {
              window.scrollTo({ top: 900, left: 100, behavior: "smooth" });
            }}
          >
            Explore Exercises
          </button>
        </div>
        <div className="col-md-6">
          <img
            src={banner}
            className="img-fluid rounded-lg"
            alt="Banner Image"
          />
        </div>
      </div>
      <div className="exercises-box bg-light p-3 rounded d-flex align-items-center justify-content-center mt-5">
        <p
          className="exercises-banner display-1 text-primary m-0"
          style={{ fontSize: "3rem", fontWeight: 600, opacity: 0.3 }}
        >
          Exercises
        </p>
      </div>
    </div>
  );
};

export default HeroBanner;
