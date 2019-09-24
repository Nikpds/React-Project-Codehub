import React from "react";
import { Container } from "reactstrap";
import HeadFootContainer from "./HeadFootContainer";
import EmployeeContainer from "../employee/EmployeeContainer";

const Layout = () => (
  <Container>
    <HeadFootContainer>
      <EmployeeContainer />
    </HeadFootContainer>
  </Container>
);

export default Layout;
