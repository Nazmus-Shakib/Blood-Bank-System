import React from "react";
import { Link } from "react-router-dom";
import SubmitDetails from "../SubmitDetails/SubmitDetails";

const DonateBlood = () => {
  return (
    <div className="pb-4" style={{ backgroundColor: "LavenderBlush" }}>
      <div className="pt-5 align-items-center text-center">
        <h1>Welcome Shakib</h1>
        <h3>Come Back after your donation is completed</h3>
        <button className="btn btn-success mr-3">Donation Completed</button>
        <Link to="/allDetails">
          <button className="btn btn-danger">View Donors</button>
        </Link>
      </div>
      <div className="pt-5 align-items-center text-center">
        <h1>Congratulations Shakib!</h1>
        <h2>We appreciate your contribution a lot.</h2>
        <h4>Thanks for joining this eminent cooperation.</h4>
        <h5>Here is your Giant Hyper Market 10% Discount Coupon</h5>
        <h5>Donation Date: </h5>
        <button className="btn btn-warning mr-3">Donate Again</button>
        <Link to="/allDetails">
          <button className="btn btn-danger">View Donors</button>
        </Link>
      </div>
    </div>
  );
};

export default DonateBlood;
