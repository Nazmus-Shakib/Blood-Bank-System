import React, { useState } from "react";
import { Link } from "react-router-dom";
import SubmitDetails from "../SubmitDetails/SubmitDetails";

const DonateBlood = () => {
  const [discountCoupon, setDiscountCoupon] = useState();

  const couponGenerator = () => {
    for (let i = 100000; i <= 999999; i++) {
      let randomNumber = Math.random() * 1000000;
      let realNumber = Math.round(randomNumber);

      if (realNumber >= 100000 && realNumber <= 999999) {
        setDiscountCoupon(realNumber);
      }
    }
  };

  const currentDate = new Date().toLocaleDateString();
  const currentTime = new Date().toLocaleTimeString();

  return (
    <div className="pb-4" style={{ backgroundColor: "LavenderBlush" }}>
      <div className="pt-5 align-items-center text-center">
        <h1>Welcome Shakib</h1>
        <h3>Come Back after your donation is completed</h3>
        <button
          className="btn btn-success mr-3"
          onClick={() => couponGenerator()}
        >
          Donation Completed
        </button>
        <Link to="/allDetails">
          <button className="btn btn-danger">View Donors</button>
        </Link>
      </div>

      <div className="pt-5 align-items-center text-center">
        <h1>Congratulations Shakib!</h1>
        <h2>We Appreciate Your Contribution</h2>
        <h4>Thanks for joining this eminent cooperation.</h4>
        <h5>
          Here is your Giant Hyper Market 10% Discount Coupon Code :
          <span
            style={{
              fontSize: "30px",
              color: "blue",
              fontWeight: "bold",
              marginLeft: "10px",
            }}
          >
            {discountCoupon}
          </span>
        </h5>
        <h5>
          Donation Date & Time :
          <span style={{ color: "green", marginLeft: "10px" }}>
            {currentDate} - {currentTime}
          </span>
        </h5>
        <button className="btn btn-warning mr-3">Donate Again</button>
        <Link to="/allDetails">
          <button className="btn btn-danger">View Donors</button>
        </Link>
      </div>
    </div>
  );
};

export default DonateBlood;
