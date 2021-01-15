import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";
import SubmitDetails from "../SubmitDetails/SubmitDetails";

const DonateBlood = () => {
  const [, , user] = useContext(UserContext);
  const [discountCoupon, setDiscountCoupon] = useState();
  const [donateBlood, setDonateBlood] = useState(false);

  let count = 0;
  const couponGenerator = () => {
    count++;

    if (count < 2) {
      for (let i = 100000; i <= 999999; i++) {
        let randomNumber = Math.random() * 1000000;
        let realNumber = Math.round(randomNumber);

        if (realNumber >= 100000 && realNumber <= 999999) {
          setDiscountCoupon(realNumber);
          setDonateBlood(true);
        }
      }
    }
  };

  const currentDate = new Date().toLocaleDateString();
  const currentTime = new Date().toLocaleTimeString();

  return (
    <div className="pb-4" style={{ backgroundColor: "LavenderBlush" }}>
      {!user.name ? (
        <>
          <SubmitDetails></SubmitDetails>
        </>
      ) : donateBlood === true ? (
        <div className="pt-5 align-items-center text-center">
          <h1>Congratulations {user.name}!</h1>
          <h2>We Appreciate Your Contribution</h2>
          <h4>Thanks for joining this eminent cooperation</h4> <br />
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
          <button
            onClick={() => {
              window.location.reload();
            }}
            className="btn btn-warning mr-3 mt-4"
          >
            New Donor
          </button>
        </div>
      ) : (
        <div className="pt-5 align-items-center text-center">
          <h1>Welcome, {user.name}</h1>
          <h2>
            Thanks for visiting <span style={{ color: "red" }}>Red Hope</span> -
            Blood Bank Management System
          </h2>
          <h3>Your Contribution is highly appreciated!!!</h3> <br />
          <h4>Come back after your donation is completed!</h4>
          <button
            className="btn btn-success mr-3 mt-4"
            onClick={() => couponGenerator()}
          >
            Donation Completed
          </button>
          <Link to="/allDetails">
            <button className="btn btn-danger mt-4">View Donors</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default DonateBlood;
