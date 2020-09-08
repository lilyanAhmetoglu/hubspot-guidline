import React, { Component } from "react";

import Server from "../../services/server";
import CallCondition from "./CallCondition";
import CloseProcess from "./CloseProcess";
import Intorduction from "./Intorduction";
import Conclusion from "./Conclusion";

export default class Dashboard extends Component {
  state = {
    step: 1,

    // step 1
    firstName: "",
    lastName: "",
    email: "",

    // step 2
    jobTitle: "",
    jobCompany: "",
    jobLocation: "",
  };

  nextStep = () => {
    const { step } = this.state;

    this.setState({
      step: step + 1,
    });
  };

  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1,
    });
  };

  handleChange = (input) => (e) => {
    this.setState({ [input]: e.target.value });
  };

  showStep = () => {
    const {
      step,
      firstName,
      lastName,
      jobTitle,
      jobCompany,
      jobLocation,
    } = this.state;

    if (step === 1)
      return (
        <CallCondition
          nextStep={this.nextStep}
          handleChange={this.handleChange}
          firstName={firstName}
          lastName={lastName}
        />
      );
    if (step === 2)
      return (
        <Intorduction
          nextStep={this.nextStep}
          prevStep={this.prevStep}
          handleChange={this.handleChange}
          jobTitle={jobTitle}
          jobCompany={jobCompany}
          jobLocation={jobLocation}
        />
      );
    if (step === 3)
      return (
        <CloseProcess
          firstName={firstName}
          lastName={lastName}
          jobTitle={jobTitle}
          jobCompany={jobCompany}
          jobLocation={jobLocation}
          handleChange={this.handleChange}
          prevStep={this.prevStep}
          nextStep={this.nextStep}
        />
      );
    if (step === 4)
      return (
        <Conclusion
          firstName={firstName}
          lastName={lastName}
          jobTitle={jobTitle}
          jobCompany={jobCompany}
          jobLocation={jobLocation}
          prevStep={this.prevStep}
        />
      );
  };
  componentDidMount() {
    const query = new URLSearchParams(this.props.location.search);
    const code = query.get("code");
    console.log(code);
    Server.authcode(code).then((res) => {
      console.log(JSON.stringify(res.data.body));
    });
  }
  render() {
    const { step } = this.state;
    return (
      <div>
        <h2>Qsales Step {step} of 4.</h2>
        {this.showStep()}
      </div>
    );
  }
}
