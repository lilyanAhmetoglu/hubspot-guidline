import React, { Component } from "react";
import { Form, Container, Col, Row } from "react-bootstrap";
export default class Intorduction extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const {
      introduction,
      handleChange,
      firstName,
      lastName,
      contactperson,
      meeting_with_expert,
      later_email,
      task_note,
      task_deadline,
    } = this.props;
    return (
      <Container>
        <h4>Intorduction</h4>
        <p>
          Hello Mr./Mrs.
          <b>
            {firstName} {lastName}
          </b>
          , my Name is <b>{contactperson}</b>. Hello. [wait for answer]
          <br />
          (Tell me, Mr./Mrs.{" "}
          <b>
            {firstName} {lastName}
          </b>{" "}
          I'd like you to connect me, please. Thank you.) Mr./Mrs. Name, can I
          get right to the point? [wait for 'yes']
        </p>
        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>
            {" "}
            We would like to become your additional IT partner, but only if it
            really makes sense for you. I only have a quick question about this,
            is that okay with you?
          </Form.Label>
          <Form.Control
            as="select"
            name="introduction"
            value={introduction}
            onChange={handleChange("introduction")}
          >
            <option value="">Choose</option>
            <option value="yes">Yes</option>
            <option value="later">Maybe later</option>
            <option value="no">No</option>
            <option value="appointment">Appointment</option>
          </Form.Control>
        </Form.Group>
        {this.props.introduction === "yes" && (
          <div className="yes">
            <p>
              Formulation of a concise question that makes the need for the
              product visible to the customer. Explanation of the service
              Consulting / the corresponding product. Presentation of product
              which could be intresting for Costumer
            </p>
            <Form.Group controlId="exampleForm.ControlSelect1">
              <Form.Label>
                If you would like to learn more about this product and see if it
                is suitable for your company, we can fix a meeting with one of
                our experts / CEO / Managers.
              </Form.Label>
              <Form.Control
                as="select"
                name="meeting_with_expert"
                value={meeting_with_expert}
                onChange={handleChange("meeting_with_expert")}
              >
                <option value="">Choose</option>
                <option value="appointment">Appointment</option>
                <option value="more_info">More information</option>
                <option value="no">No</option>
              </Form.Control>
            </Form.Group>
            {this.props.meeting_with_expert === "appointment" && (
              <div className="yes_appointment">
                <p>
                  We're looking forward to having an appointment soon. How
                  should the appointment take place and when is it convenient
                  for you?
                </p>
                <Form.Group>
                  <Form.Label>
                    Write a task note (you can find in: Hubspot Task)
                  </Form.Label>
                  <Form.Control
                    type="text"
                    value={task_note}
                    placeholder="Task Note"
                    onChange={handleChange("task_note")}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>
                    Write a task note (you can find in: Hubspot Task)
                  </Form.Label>
                  <Form.Control
                    type="date"
                    value={task_deadline}
                    placeholder=""
                    onChange={handleChange("task_deadline")}
                  />
                </Form.Group>
              </div>
            )}
            {this.props.meeting_with_expert === "more_info" && (
              <div className="yes_more_info">
                <p>
                  Text depending on previous question: I can send you our online
                  brochure which contains more information about our products?
                </p>
                <Form.Group>
                  <Form.Label>Could you give me your e-mail please?</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="name@example.com"
                    value={later_email}
                    onChange={handleChange("later_email")}
                  />
                </Form.Group>
              </div>
            )}
            {this.props.meeting_with_expert === "no" && (
              <div className="yes_no">
                <p>
                  Text depending on previous question: May I send you our online
                  brochure in case the need arises in the future?
                </p>
              </div>
            )}
          </div>
        )}
        {this.props.introduction === "later" && (
          <div className="later">
            <p>
              Text depending on previous question: May I send you our online
              brochure in case the need arises in the future?
            </p>
            <Form.Group>
              <Form.Label>Could you give me your e-mail please?</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                value={later_email}
                onChange={handleChange("later_email")}
              />
            </Form.Group>
          </div>
        )}
        {this.props.introduction === "no" && (
          <div className="no">
            <p>
              Text depending on previous question: May I send you our online
              brochure in case the need arises in the future?
            </p>
          </div>
        )}
        {this.props.introduction === "appointment" && (
          <div className="appointment">
            <p>
              We're looking forward to having an appointment soon. How should
              the appointment take place and when is it convenient for you?
            </p>
            <Form.Group>
              <Form.Label>
                Write a task note (you can find in: Hubspot Task)
              </Form.Label>
              <Form.Control
                type="text"
                value={task_note}
                placeholder="Task Note"
                onChange={handleChange("task_note")}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>
                Write a task note (you can find in: Hubspot Task)
              </Form.Label>
              <Form.Control
                type="date"
                value={task_deadline}
                placeholder=""
                onChange={handleChange("task_deadline")}
              />
            </Form.Group>
          </div>
        )}
        <button type="button" className="btn btn-warning"onClick={this.back}>
          « Back
        </button>
        <button type="button" className="btn btn-success" onClick={this.continue}>
          Next »
        </button>
      </Container>
    );
  }
}
