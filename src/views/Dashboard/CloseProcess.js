import React, { Component } from "react";
import { Form, Container, Col, Row } from "react-bootstrap";
export default class CloseProcess extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };
  render() {
    const { jobTitle, jobCompany, jobLocation } = this.props;
    return (
      <Container>
        <h4>End call / Close process</h4>
        <p>
          Thanks for the friendly conversation! Goodbye and have a nice
          day/week/weekend.
        </p>
        <button className="Back" onClick={this.back}>
          « Back
        </button>
        <button className="Next" onClick={this.continue}>
          Next »
        </button>
      </Container>
    );
  }
}
