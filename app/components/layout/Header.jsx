import React from "react";
import { Row, Col, Navbar, NavbarBrand, Nav, Media, NavItem, NavLink, NavbarToggler, Collapse } from "reactstrap";
import {}
import { Image } from '../shared/Controls'
import { useAuth } from '../../hooks/useAuth'
export default function Header({ user }) {
  const { signOut } = useAuth()
  return (
    <Row>
      <Col xs={12}>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Code.Hub Dashboard</NavbarBrand>
          <NavbarToggler />
          <Collapse navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/about/">About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink onClick={signOut}>Logout</NavLink>
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
