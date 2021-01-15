import React from "react";
import { Button, Card } from "react-bootstrap";

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

  const deleteResident = (_id) => {
    fetch(`http://localhost:5000/deleteDonor/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((result) => {
        //alert("Resident deleted successfully");
      });
    alert("Donor deleted successfully");
    window.location.reload();
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

        <Button
          onClick={() => deleteResident(_id)} // to avoid multiple click at the same time
          className="ml-4"
          variant="warning"
        >
          Delete Resident
        </Button>
      </Card.Body>
    </Card>
  );
};

export default DonorDetails;
