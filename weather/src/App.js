import { Card, Button, Form, InputGroup } from "react-bootstrap";
import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";

function App() {
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  

  const handleSubmit = (event) => {
    event.preventDefault();
    const city = event.target.city.value;
    console.log(city);
    event.target.reset();
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setLat(position.coords.latitude);
      setLong(position.coords.longitude);
    });
    console.log("latitude is :", lat);
    console.log("longitude is :", long);
  });

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
            <Form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="City"
                className="frmclr"
                id="city"
              ></input>
              <Button type="submit" className="btnclr">
                Check The Weather
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default App;
