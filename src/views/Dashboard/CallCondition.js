import React, { Component } from "react";
import { Form, Container, Col, Row } from "react-bootstrap";
export default class CallCondition extends Component {
  constructor(props) {
    super(props);
    this.state = { newold: "new" };
  }
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };
  handleChanges = (event) => {
    let { name, value } = event.target;
    this.setState({
      [name]: value,
    });
    console.log(value)
  };
  render() {
    const {
      name,
      surname,
      lastName,
      handleChange,
      newold,
      kind,
      email,
      phone,
      company,
      contactperson,
      meeting_with_expert,
      later_email,
      task_note,
      task_deadline,
    } = this.props;
    
    return (
      <Container>
        <h4>Call conditions</h4>

        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>Who will you call?</Form.Label>
          <Form.Control
            as="select"
            name="newold"
            value={newold}
            onChange={handleChange("newold")}
          >
           <option value="">Choose</option>
            <option value="new">New Contact</option>
            <option value="old">Existing Contact</option>
          </Form.Control>
        </Form.Group>
        {this.props.newold === "new" && (
          <div className="new">
            <Form.Group controlId="exampleForm.ControlSelect1">
              <Form.Label>What kind of call will you do?</Form.Label>
              <Form.Control
                as="select"
                value={kind}
                onChange={handleChange("kind")}
              >
                <option value="">Choose</option>
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
                value={name}
                placeholder="First Name"
                onChange={handleChange("name")}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Please enter customer family name:</Form.Label>
              <Form.Control
                type="text"
                placeholder="customer family name"
                value={surname}
                placeholder="Last Name"
                onChange={handleChange("surname")}
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
        )}
        {this.props.newold === "old" && (
          <div className="old">
            <Form.Group controlId="exampleForm.ControlSelect1">
              <Form.Label>Please choose the company?</Form.Label>
              <Form.Control
                as="select"
                value={company}
                onChange={handleChange("company")}
              >
                <option value="">Choose</option>
                <option>company1</option>
                <option>company2</option>
                <option>company3</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlSelect1">
              <Form.Label>What kind of call will you do?</Form.Label>
              <Form.Control
                as="select"
                value={kind}
                onChange={handleChange("kind")}
              >
                <option value="">Choose</option>
                <option>Initial Call</option>
                <option>Follow up call</option>
                <option>Customer call</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlSelect1">
              <Form.Label>If you already know who you will call, please chose your contact person (if you don't have a specific contact person go next):</Form.Label>
              <Form.Control
                as="select"
                value={contactperson}
                onChange={handleChange("contactperson")}
              >
                <option value="">Choose</option>
                <option>laura</option>
                <option>Miray</option>
                <option>melek</option>
              </Form.Control>
            </Form.Group>
          </div>
        )}
        <button className="Next" onClick={this.continue}>
          Next »
        </button>
      </Container>
    );
  }
}
