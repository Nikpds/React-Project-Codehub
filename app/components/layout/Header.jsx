import React from "react";
import { Row, Col, Navbar, NavbarBrand, Nav, Media } from "reactstrap";

export default function Header({ user }) {
  return (
    <Row>
      <Col xs={12}>
        <Navbar color="light" light>
          <NavbarBrand href="#">Code.Hub Dashboard</NavbarBrand>
          <Nav className="ml-auto" navbar>
            {user && (
              <Media>
                <Media left>
                  <img
                    className="rounded-circle"
                    width="50"
                    height="50"
                    src={user.imgPath}
                    alt={user.name}
                  />
                </Media>
                <Media body className="user-text">
                  {user.username}
                </Media>
              </Media>
            )}
          </Nav>
        </Navbar>
      </Col>
    </Row>
  );
}
