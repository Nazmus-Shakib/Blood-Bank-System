import React, { useContext } from "react";
import { Button, Card } from "react-bootstrap";
import { UserContext } from "../../App";

const DonorDetails = (props) => {
  const {
    _id,
    name,
    blood,
    age,
    address,
    gender,
    phone,
    donateDate,
  } = props.user;
  const [, , , , realAdmin] = useContext(UserContext);

  const deleteResident = (_id) => {
    fetch(
      `https://blood-bank-system-by-shakib.herokuapp.com/deleteDonor/${_id}`,
      {
        method: "DELETE",
      }
    )
      .then((res) => res.json())
      .then((result) => {
        //alert("Resident deleted successfully");
      });
    alert("Donor deleted successfully !!!");
  };

  return (
    <Card
      bg="danger"
      text="light"
      style={{
        width: "24rem",
        height: "18rem",
        display: "inline-block",
        margin: "20px 0 20px 55px",
        boxShadow: "5px 2px 5px black",
      }}
    >
      <Card.Header></Card.Header>
      <Card.Body>
        <Card.Title> Name : {name} </Card.Title>
        <Card.Text>
          Blood Group : <b>{blood}</b> <br />
          Age : <b>{age}</b> <br />
          Gender : <b>{gender}</b> <br />
          Address : <b>{address}</b> <br />
          Donation Date : <b>{donateDate}</b> <br />
          Phone : <b>{phone}</b>
        </Card.Text>

        {realAdmin === true && (
          <Button
            onClick={() => deleteResident(_id)}
            className="ml-4"
            variant="warning"
          >
            Delete Donor
          </Button>
        )}
      </Card.Body>
    </Card>
  );
};

export default DonorDetails;
