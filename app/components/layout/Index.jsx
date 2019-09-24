import React from "react";
import { Container } from "reactstrap";
import HeadFootContainer from "./HeadFootContainer";
import EmployeeContainer from "../employee/Index";

const Layout = () => (
  <Container>
    <HeadFootContainer>
      <EmployeeContainer />
    </HeadFootContainer>
  </Container>
);

export default Layout;
