import React, { Component } from "react";

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
      <div>
        <h2>Close Process</h2>
        <label>
          <input
            type="text"
            name="jobTitle"
            value={jobTitle}
           // onChange={handleChange("jobTitle")}
            placeholder="Job Title"
          />
        </label>
        <label>
          <input
            type="text"
            name="jobCompany"
            value={jobCompany}
            //onChange={handleChange("jobCompany")}
            placeholder="Company"
          />
        </label>
        <label>
          <input
            type="text"
            name="jobCompany"
            value={jobLocation}
           // onChange={handleChange("jobLocation")}
            placeholder="Location"
          />
        </label>
        <button className="Back" onClick={this.back}>
          « Back
        </button>
        <button className="Next" onClick={this.continue}>
          Next »
        </button>
      </div>
    );
  }
}
