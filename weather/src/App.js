import { Card, Button,Form } from "react-bootstrap";
import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <div className="cardBody">
      <Card>
        <Card.Body className="cardBody2">
          <Card.Title style={{ color: "white" }}>Todays Weather</Card.Title>
          <Card.Text style={{ color: "white" }}>
            Please insert the city to which you would like to check the weather for below.
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
  );
}

export default App;
