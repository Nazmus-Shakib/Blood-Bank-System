import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { UserContext } from "../../App";
import "./SubmitDetails.css";
import banner from "../../images/bg-image.jpg";
//import DatePicker from "react-datepicker";
//import "react-datepicker/dist/react-datepicker.css";

const SubmitDetails = () => {
  //const [loggedInUser] = useContext(UserContext);
  const { register, handleSubmit, errors } = useForm();
  //const [selectedDate, setSelectedDate] = useState(null);

  const onSubmit = (data) => {
    // data.DOB = selectedDate;
    // data.salary = `RM ${data.salary}`;
    // data.houseRent = `RM ${data.houseRent}`;
    // if (selectedDate) {
    //   fetch("https://resident-information-system.herokuapp.com/submitDetails", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(data),
    //   });
    //   alert("Your Details has been Posted Successfully");
    //   window.location.reload();
    // }
  };

  return (
    <div>
      <img style={{ width: "100%" }} src={banner} alt="" />
      <div className="align-items-center ">
        <form className="details-form " onSubmit={handleSubmit(onSubmit)}>
          <h1 style={{ color: "LightGray" }}>Submit Personal Details</h1>
          <p style={{ color: "white" }}>
            Please follow the placeholder format to submit Details
          </p>

          <div className="col-md-12 col-sm-12 col-xs-12 pl-5">
            <div>
              <input
                name="name"
                placeholder="Your Full Name (e.g: Nur Ain)"
                //defaultValue={loggedInUser.name}
                ref={register({
                  pattern: /^[a-zA-Z]{2,40}( [a-zA-Z]{2,40})+$/,
                })}
              />
              {errors.name && <span className="error">Name is required</span>}

              <input
                name="address"
                placeholder="Home Address"
                ref={register({ required: true })}
              />
              {errors.address && (
                <span className="error">Address is required</span>
              )}

              <input
                name="phone"
                placeholder="Phone Number: More than 09 digits"
                ref={register({ minLength: 10 })}
              />
              {errors.phone && <span className="error">Phone is required</span>}

              {/* <div style={{ width: "100px" }}>
                <DatePicker
                  selected={selectedDate}
                  onChange={(date) => setSelectedDate(date)}
                  //dateFormat="dd/MM/yyyy"
                  maxDate={new Date()}
                  isClearable
                  showYearDropdown
                  scrollableMonthYearDropdown
                  placeholderText="Date of Birth"
                />
              </div> */}

              <div className="d-flex pt-3">
                <h5 style={{ color: "lightgrey" }} className="pr-4">
                  <b>Gender :</b>
                </h5>
                <select style={{ height: "30px" }} name="gender" ref={register}>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>

              <div className="d-flex pt-3">
                <h5 style={{ color: "lightgrey" }} className="pr-4">
                  <b>Blood Group :</b>
                </h5>
                <select style={{ height: "30px" }} name="gender" ref={register}>
                  <option value="A+">A+</option>
                  <option value="A-">A-</option>
                  <option value="B+">B+</option>
                  <option value="B-">B-</option>
                  <option value="AB+">AB+</option>
                  <option value="AB-">AB-</option>
                  <option value="O+">O+</option>
                  <option value="O-">O-</option>
                </select>
              </div>

              <input
                name="blood"
                placeholder="Blood Group"
                ref={register({ required: true })}
              />
            </div>

            <div className="d-flex">
              <h5 style={{ color: "lightgrey" }} className="pr-3 pt-3">
                <b>Blood Group :</b>
              </h5>
              <div
                className="d-flex"
                style={{ width: "100px", height: "10px" }}
              >
                <input
                  type="radio"
                  name="orphan"
                  value="Yes"
                  ref={register({ required: true })}
                />
                <span style={{ color: "white" }}>Yes</span>
                <input
                  type="radio"
                  name="orphan"
                  value="No"
                  ref={register({ required: true })}
                />
                <span style={{ color: "white" }}>No</span>
              </div>
            </div>
          </div>

          <input
            className="ml-5"
            style={{ backgroundColor: "MediumSlateBlue" }}
            type="submit"
          />
        </form>
      </div>
    </div>
  );
};

export default SubmitDetails;
