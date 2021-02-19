import React, { useContext, useEffect, useState } from "react";
import { Button } from "@material-ui/core";
import { UserContext } from "../../App";
import DonorDetails from "../DonorDetails/DonorDetails";
import { useForm } from "react-hook-form";
import SearchIcon from "@material-ui/icons/Search";

const AllDetails = () => {
  const [users, setUsers] = useContext(UserContext);
  const [selectOption, setSelectedOption] = useState("name");
  const [customPlaceholder, setCustomerPlaceholder] = useState(
    "Type Full Name (e.g: Nur Ain)"
  );

  const handleDataLoad = () => {
    fetch("https://blood-bank-system-by-shakib.herokuapp.com/donors")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
      });
  };

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    if (selectOption === "name") {
      const matchedDataName = users.filter(
        (item) => item.name.toUpperCase() === data.name.toUpperCase()
      );
      setUsers(matchedDataName);
    }

    if (selectOption === "blood") {
      const matchedData = users.filter(
        (item) => item.blood.toUpperCase() === data.name.toUpperCase()
      );
      setUsers(matchedData);
    }
  };

  const handleChange = (e) => {
    setSelectedOption(e.target.value);

    if (e.target.value === "name") {
      setCustomerPlaceholder("Type Full Name (e.g: Nur Ain)");
      handleDataLoad();
    }

    if (e.target.value === "blood") {
      setCustomerPlaceholder("Type Blood Group (e.g: B+)");
      handleDataLoad();
    }
  };

  const handleOnChange = (e) => {
    if (e.target.value === "") {
      handleDataLoad();
    }
  };

  useEffect(() => {
    handleDataLoad();
  }, []);

  return (
    <div style={{ backgroundColor: "red" }} className="pt-5">
      <div className="pl-5">
        <div className="row pb-3">
          <div className="col-lg-5 col-md-5 col-sm-12 pl-5">
            <div className="residentNo d-flex">
              <h3>Total Donors: {users.length}</h3>
            </div>
          </div>

          <div className="col-lg-7 col-md-7 col-sm-12">
            <div className="form_container" style={{ paddingLeft: "130px" }}>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row d-flex align-items-center">
                  <div className="col-md-3">
                    <span>
                      <b>Search by: </b>
                    </span>
                    <select onChange={handleChange} name="name01">
                      <option value="name">Name</option>
                      <option value="blood">Blood</option>
                    </select>
                  </div>
                  <div className="col-md-4">
                    <input
                      style={{ width: "110%", height: "40px" }}
                      name="name"
                      placeholder={customPlaceholder}
                      onChange={handleOnChange}
                      ref={register({ required: true })}
                    />
                  </div>
                  <div className="col-md-2">
                    <Button
                      type="submit"
                      size="medium"
                      variant="contained"
                      color="primary"
                      endIcon={<SearchIcon />}
                    >
                      Search
                    </Button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="ml-4">
        {users.map((user) => (
          <DonorDetails user={user}></DonorDetails>
        ))}
      </div>
    </div>
  );
};

export default AllDetails;
