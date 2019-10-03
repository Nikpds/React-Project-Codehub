import React from "react"
import { Switch } from 'react-router-dom'
import { Container } from "reactstrap"
import Footer from "./Footer";
import Header from "./Header";
import { BrowserRouter } from 'react-router-dom'
import * as routes from '../../services/routes'
import { useAuth } from '../../hooks/useAuth'

const Layout = () => {
  const { isAuthenticated } = useAuth()
  console.log(isAuthenticated)
  const routing = isAuthenticated ? routes.baseAccess : routes.unAuthorized

  return <Container className="h-100">
    <BrowserRouter>
      {isAuthenticated ? <Header /> : null}
      <Switch>
        {routing && routing.map(r => r)}
      </Switch>
      {isAuthenticated ? <Footer /> : null}
    </BrowserRouter>
  </Container>
};

export default Layout;
