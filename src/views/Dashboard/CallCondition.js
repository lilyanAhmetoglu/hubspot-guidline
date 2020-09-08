import React, { Component } from "react";
import { Form, Container, Col, Row } from "react-bootstrap";
export default class CallCondition extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };
  render() {
    const {
      firstName,
      lastName,
      handleChange,
      newold,
      kind,
      email,
      phone
    } = this.props;
    return (
      <Container>
        <h4>Call conditions</h4>

        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>Who will you call?</Form.Label>
          <Form.Control
            as="select"
            value={newold}
            onChange={handleChange("newold")}
          >
            <option>New Contact</option>
            <option>Existing Contact</option>
          </Form.Control>
        </Form.Group>
        <div classname="new">
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>What kind of call will you do?</Form.Label>
            <Form.Control
              as="select"
              value={kind}
              onChange={handleChange("kind")}
            >
              <option>Initial Call</option>
              <option>Follow up call</option>
              <option>Customer call</option>
            </Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Please enter customer name:</Form.Label>
            <Form.Control
              type="text"
              placeholder="customer name"
              value={firstName}
              placeholder="First Name"
              onChange={handleChange("firstName")}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Please enter customer family name:</Form.Label>
            <Form.Control
              type="text"
              placeholder="customer family name"
              value={lastName}
              placeholder="Last Name"
              onChange={handleChange("lastName")}
            />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Please enter customer email address:</Form.Label>
            <Form.Control
              type="email"
              placeholder="name@example.com"
              value={email}
              onChange={handleChange("email")}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Please enter customer phone number:</Form.Label>
            <Form.Control
              type="text"
              placeholder="customer phone number"
              value={phone}
              onChange={handleChange("phone")}
            />
          </Form.Group>
        </div>
        <div className="old"></div>
        <button className="Next" onClick={this.continue}>
          Next »
        </button>
      </Container>
    );
  }
}
