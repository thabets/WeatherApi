import { Card, Button, Form } from "react-bootstrap";
import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";

function App() {
  const [city, setCity] = useState(true);
  function buttonClick() {
    const [lat, setLat] = useState([]);
    const [long, setLong] = useState([]);
    const [data, setData] = useState([]);

    useEffect(() => {
      navigator.geolocation.getCurrentPosition(function (position) {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      });
      console.log("latitude is :", lat);
      console.log("longitude is :", long);
    });

    fetch(
      `${process.env.REACT_APP_API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`
    )
      .then((res) => res.json())
      .then((result) => {
        setData(result);
        console.log(result);
      });
  }
  return (
    <div>
      {city ? (
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
              <Button className="btnclr">Check The Weather</Button>
            </Card.Body>
          </Card>
        </div>
      ) : (
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
            <Button className="btnclr">Check The Weather</Button>
          </Card.Body>
        </Card>
      )}
    </div>
  );
}

export default App;
