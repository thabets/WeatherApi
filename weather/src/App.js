import { Card, Button, Form } from "react-bootstrap";
import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Search from "./search";

function App() {


  return (
    <div>
      <div className="cardBody">
        <Card>
          <Card.Body className="cardBody2">
            <Card.Title style={{ color: "white" }}>Todays Weather</Card.Title>
            <Card.Text style={{ color: "white" }}>
              Please insert the city to which you would like to check the
              weather for below.
            </Card.Text>
            <Form.Control
              type="text"
              placeholder="City"
              className="frmclr"
              id="city"
            ></Form.Control>
            <Button
              className="btnclr"
              onClick={Search }
            >
              Check The Weather
            </Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default App;
