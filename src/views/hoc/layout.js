import React, { Component } from "react";
import { Navbar, Container} from 'react-bootstrap';
export default class Layout extends Component {
  render() {
    return (
      <header className="bck_b_light">
        <Navbar expand="lg" variant="light" bg="light">
          <Container>
            <Navbar.Brand href="#">QSales Telephone Guideline.</Navbar.Brand>
          </Container>
        </Navbar>
        {this.props.children}
      </header>
    );
  }
}
