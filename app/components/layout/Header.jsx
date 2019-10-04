import React from "react";
import { Link } from "react-router-dom";
import {
  Row,
  Col,
  Navbar,
  Nav,
  Media,
  NavItem,
  NavbarToggler,
  Collapse
} from "reactstrap";
import { Image } from "../shared/Controls";
import { useAuth } from "../../hooks/useAuth";

export default function Header() {
  const { signOut, user } = useAuth();

  return (
    <Row>
      <Col xs={12}>
        <Navbar color="light" light expand="md">
          <Link className="navbar-brand" to="/home">
            Code.Hub Home
          </Link>
          <NavbarToggler />
          <Collapse navbar>
            <Nav className="ml-auto" navbar>
              <NavItem style={{ display: "flex" }}>
                <Link
                  style={{ flex: 0, alignSelf: "center" }}
                  className="nav-link"
                  to="/employees">
                  Employees
                </Link>
              </NavItem>
              {user && user.admin ? (
                <NavItem style={{ display: "flex" }}>
                  <Link
                    style={{ flex: 0, alignSelf: "center" }}
                    className="nav-link"
                    to="/admin">
                    Admin
                  </Link>
                </NavItem>
              ) : null}
              <NavItem style={{ display: "flex" }}>
                <Link
                  style={{ flex: 0, alignSelf: "center" }}
                  className="nav-link"
                  to="/about">
                  About
                </Link>
              </NavItem>
              <NavItem style={{ display: "flex", cursor: "pointer" }}>
                <a
                  style={{ flex: 0, alignSelf: "center" }}
                  className="nav-link"
                  onClick={signOut}>
                  Logout
                </a>
              </NavItem>
              {user && (
                <Media>
                  <Media left>
                    <Image
                      src={user.imgPath}
                      alt={user.name}
                      dims={{ width: 50, height: 50 }}
                      className="rounded-circle"
                    />
                  </Media>
                  <Media body className="user-text">
                    {user.username}
                  </Media>
                </Media>
              )}
            </Nav>
          </Collapse>
        </Navbar>
      </Col>
    </Row>
  );
}
