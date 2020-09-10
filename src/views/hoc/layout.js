import React, { Component } from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import Footer from "./footer";
export default class Layout extends Component {
  logout() {
    sessionStorage.removeItem("token");
    window.location.href = "/login";
  }
  render() {
    return (
      <div>
        <header className="bck_b_light">
          <Navbar expand="lg" variant="light" bg="light">
            <Container>
              <Navbar.Brand href="#">QSales Telephone Guideline.</Navbar.Brand>
              {JSON.parse(sessionStorage.getItem("token")) && (
                <Nav.Link>
                  <Button variant="outline-danger" onClick={this.logout}>
                    Logut
                  </Button>
                </Nav.Link>
              )}
            </Container>
          </Navbar>
        </header>
        {this.props.children}
        <Footer />
      </div>
    );
  }
}
