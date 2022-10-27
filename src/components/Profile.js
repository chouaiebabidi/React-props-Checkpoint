import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Card } from "react-bootstrap";
import im from "./noxy.jpg";

function Profile(props) {
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={im} />
        <Card.Body>
          <Card.Title>{props.name}</Card.Title>
          <Card.Text>
            {props.bio} And Im A {props.pro}
          </Card.Text>
          <Button
            variant="primary"
            onClick={() => props.HandleName(props.name)}
          >
            Click Me
          </Button>
        </Card.Body>
      </Card>
      {props.children}
    </>
  );
}

export default Profile;
