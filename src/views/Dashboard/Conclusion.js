import React, { Component } from "react";

export default class Conclusion extends Component {
  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };
  render() {
    const {
      name,
      surname,
      contactperson,

      phone,
      kind,
      email,
      introduction,
      newold,
      company,
      meeting_with_expert,
      later_email,
      task_note,
      task_deadline,
    } = this.props;
    return (
      <div>
        <h4>Here is the information you entered:</h4>
        Who will you call?:
        <br />
        <b>{newold}</b>
        <hr />
        <h5>Call Condition</h5>
        {newold === "new" && (
          <div>
            <p>What kind of call will you do?</p>

            <b>{kind}</b>
            <hr />
            <p>Please enter customer name:</p>

            <b>{name}</b>
            <hr />
            <p>Please enter customer family name:</p>

            <b>{surname}</b>
            <hr />
            <p>Please enter customer email address:</p>

            <b>{email}</b>
            <hr />
            <p>Please enter customer phone number:</p>

            <b>{phone}</b>
            <hr />
          </div>
        )}
        {newold === "old" && (
          <div>
            <p>Please choose the company?</p>

            <b>{company}</b>
            <hr />
            <p>What kind of call will you do?</p>

            <b>{kind}</b>
            <hr />
            <p>
              If you already know who you will call, please chose your contact
              person (if you don't have a specific contact person go next):
            </p>

            <b>{contactperson}</b>
            <hr />
          </div>
        )}
        <br />
        <h5>Intoduction</h5>
        We would like to become your additional IT partner, but only if it
        really makes sense for you. I only have a quick question about this, is
        that okay with you?
        <br />
        <b>{introduction}</b>
        <hr />
        {introduction === "yes" && (
          <div>
            <p>
              If you would like to learn more about this product and see if it
              is suitable for your company, we can fix a meeting with one of our
              experts / CEO / Managers.
            </p>
            <b>{meeting_with_expert}</b>
            <hr />
            {meeting_with_expert === "appointment" && (
              <div>
                <p>Write a task note (you can find in: Hubspot Task)</p>

                <b>{task_note}</b>
                <hr />
                <p>Write a task note (you can find in: Hubspot Task)</p>

                <b>{task_deadline}</b>
                <hr />
              </div>
            )}
            {meeting_with_expert === "more_info" && (
              <div>
                <p>Could you give me your e-mail please?</p>

                <b>{later_email}</b>
                <hr />
              </div>
            )}
          </div>
        )}
        {introduction === "later" && (
          <div>
            <p>Could you give me your e-mail please?</p>
            <b>{later_email}</b>
          </div>
        )}
        {introduction === "appointment" && (
          <div>
            <p>Write a task note (you can find in: Hubspot Task)</p>

            <b>{task_note}</b>
            <hr />
            <p>Write a task note (you can find in: Hubspot Task)</p>

            <b>{task_deadline}</b>
            <hr />
          </div>
        )}
        <button className="Back" onClick={this.back}>
          « Back
        </button>
      </div>
    );
  }
}
