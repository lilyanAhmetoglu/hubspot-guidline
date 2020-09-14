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
    companyName:"",
    companyDiscription:"",
    name: "",
    surname: "",
    email: "",
    newold: "",
    kind: "",
    email: "",
    phone: "",
    company: "",
    contactperson: "",
    contacts: [],
    companies: [],
    // step 2

    introduction: "",
    meeting_with_expert: "",
    later_email: "",
    task_note: "",
    task_deadline: "",
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
    if(input==="company"){
      console.log("this is company")
      Server.getCompanyContacts( e.target.value).then((res) => {
        let respoo = JSON.parse(res.data.body);
        const contacts = respoo.contacts;
        this.setState({ contacts });
      });
    }
  };

  showStep = () => {
    const {
      step,
      companyName,
      companyDiscription,
      name,
      surname,
      newold,
      kind,
      email,
      phone,
      introduction,
      contactperson,
      company,
      meeting_with_expert,
      later_email,
      task_note,
      task_deadline,
      contacts,
      companies,
    } = this.state;

    if (step === 1)
      return (
        <CallCondition
          nextStep={this.nextStep}
          handleChange={this.handleChange}
          newold={newold}
          name={name}
          surname={surname}
          company={company}
          kind={kind}
          email={email}
          phone={phone}
          contactperson={contactperson}
          contacts={contacts}
          companies={companies}
          companyName={companyName}
          companyDiscription={companyDiscription}

        />
      );
    if (step === 2)
      return (
        <Intorduction
          nextStep={this.nextStep}
          prevStep={this.prevStep}
          handleChange={this.handleChange}
          introduction={introduction}
          contactperson={contactperson}
          meeting_with_expert={meeting_with_expert}
          later_email={later_email}
          task_note={task_note}
          task_deadline={task_deadline}
        />
      );
    if (step === 3)
      return (
        <CloseProcess
          handleChange={this.handleChange}
          prevStep={this.prevStep}
          nextStep={this.nextStep}
        />
      );
    if (step === 4)
      return (
        <Conclusion
          newold={newold}
          name={name}
          surname={surname}
          kind={kind}
          company={company}
          companyName={companyName}
          companyDiscription={companyDiscription}
          email={email}
          phone={phone}
          contactperson={contactperson}
          introduction={introduction}
          contactperson={contactperson}
          meeting_with_expert={meeting_with_expert}
          later_email={later_email}
          task_note={task_note}
          task_deadline={task_deadline}
          
          prevStep={this.prevStep}
        />
      );
  };
  componentDidMount() {
    // const query = new URLSearchParams(this.props.location.search);
    //onst code = query.get("code");
    //console.log("ee");
    Server.getCompanies().then((res) => {
      let respoo = JSON.parse(res.data.body);
      console.log(respoo);
      const companies = respoo.companies;
      this.setState({ companies });
    });
    Server.getContacts().then((res) => {
      let respoo = JSON.parse(res.data.body);
      const contacts = respoo.contacts;
      this.setState({ contacts });
    });
  }
  render() {
    const { step } = this.state;

    return (
      <div className="container">
        <div className="row ">
          <div className="col-md-12 ">
            <div className="theform">
              <h6> Step {step} of 4.</h6>

              {this.showStep()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
