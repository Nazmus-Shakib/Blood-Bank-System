import React, { useContext, useEffect, useState } from "react";
import banner from "../../images/banner01.jpg";
import { useForm } from "react-hook-form";
import { UserContext } from "../../App";

const LogInAdmin = () => {
  const { register, handleSubmit, errors } = useForm();
  const [admin, setAdmin] = useState({});
  const [, , , , realAdmin, setRealAdmin] = useContext(UserContext);

  useEffect(() => {
    fetch("https://blood-bank-system-by-shakib.herokuapp.com/admin")
      .then((response) => response.json())
      .then((data) => {
        setAdmin(data[0]);
      });
  }, []);

  const onSubmit = (data) => {
    if (admin.email === data.email) {
      setRealAdmin(true);
      alert("Admin Logged In Successfully !!!");
    } else {
      alert("This Email is not an Admin Email !!! Please Insert Correct Email");
    }
  };
  console.log(realAdmin);

  return (
    <div>
      <img style={{ width: "100%" }} src={banner} alt="" />
      <div className="align-items-center">
        <form className="details-form" onSubmit={handleSubmit(onSubmit)}>
          <h1 style={{ color: "red" }}>Submit Verified Admin Email</h1>
          <h6 style={{ color: "red" }}>
            Please follow the placeholder format to submit Details
          </h6>

          <div className="col-md-12 col-sm-12 col-xs-12 pl-5 ml-5">
            <input
              name="email"
              placeholder="Email (e.g: example@gmail.com)"
              ref={register({ required: true })}
            />
          </div>
          {errors.email && <span className="error">Email is not valid</span>}

          <input
            className="mt-3"
            style={{ backgroundColor: "red", marginLeft: "100px" }}
            type="submit"
          />
        </form>
      </div>
    </div>
  );
};

export default LogInAdmin;
