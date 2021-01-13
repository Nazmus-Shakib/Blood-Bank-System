import React, { useContext, useEffect } from "react";
import { Button } from "@material-ui/core";
import { UserContext } from "../../App";
import DonorDetails from "../DonorDetails/DonorDetails";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import SearchIcon from "@material-ui/icons/Search";

const AllDetails = () => {
  const [users, setUsers] = useContext(UserContext);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
      });
  });
  return (
    <div style={{ backgroundColor: "red" }} className="pt-5">
      <div>
        <div className="row pb-3">
          <div className="col-lg-5 col-md-5 col-sm-12 pl-5">
            <div className="residentNo d-flex">
              <h3>Total Donors: {users.length}</h3>
              <Button
                className="ml-3"
                size="small"
                variant="contained"
                color="default"
                href=""
                endIcon={<PersonAddIcon />}
              >
                Add Record
              </Button>
            </div>
          </div>

          <div className="col-lg-7 col-md-7 col-sm-12">
            <div className="form_container">
              {/* {isLeader === true && (
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="row d-flex align-items-center">
                    <div className="col-md-3">
                      <span>
                        <b>Search by: </b>
                      </span>
                      <select onChange={handleChange} name="name01">
                        <option value="name">Name</option>
                        <option value="blood">Blood</option>
                        <option value="salary">Salary</option>
                      </select>
                    </div>
                    <div className="col-md-4">
                      <input
                        style={{ width: "110%" }}
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
              )} */}
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
