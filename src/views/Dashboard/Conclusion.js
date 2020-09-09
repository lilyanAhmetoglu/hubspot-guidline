import React, { Component } from "react";

export default class Conclusion extends Component {
  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };
  render() {
    const {
      firstName,
      lastName,
      jobTitle,
      jobCompany,
      jobLocation,
      introduction,
      newold,
    } = this.props;
    return (
      <div>
        <h2>Here is the information you entered:</h2>
        First Name: <b>{firstName}</b>
        <br />
        Last Name: <b>{lastName}</b>
        <br />
        Job: <b>{jobTitle}</b>
        <br />
        Company: <b>{jobCompany}</b>
        <br />
        Location: <b>{jobLocation}</b>
        <br />
        introduction:<b>{introduction}</b>
        <br />
        new old:<b>{newold}</b>
        <br />
        <button className="Back" onClick={this.back}>
          « Back
        </button>
      </div>
    );
  }
}
