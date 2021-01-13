import React from "react";
import { Card } from "react-bootstrap";

const DonorDetails = (props) => {
  const { name } = props.user;

  return (
    <Card
      bg="danger"
      text="light"
      style={{
        width: "24rem",
        height: "15rem",
        display: "inline-block",
        margin: "20px 0 20px 55px",
        boxShadow: "5px 2px 5px black",
      }}
    >
      <Card.Header></Card.Header>
      <Card.Body>
        <Card.Title> Name: {name} </Card.Title>
        <Card.Text>
          Blood Group: <br />
          Address: <br />
          Amount of Donation: <br />
          Donation Date: <br />
          Phone:
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default DonorDetails;
