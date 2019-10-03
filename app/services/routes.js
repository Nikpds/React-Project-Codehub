import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import Login from '../components/login/LoginContainer'
import EmployeeContainer from '../components/employee'
import Dashboard from '../components/admin'
import About from '../components/About'
import Home from '../components/Home'

export const baseAccess = [
  <Route key={0} path="/" exact component={Home} />,
  <Route key={1} path="/employees" exact component={EmployeeContainer} />,
  <Route key={2} path="/about" exact component={About} />,
  <Redirect key={3} to="/" />,
]

export const adminAccess = [
  <Route key={4} path="/admin" exact component={Dashboard} />
]

export const unAuthorized = [
  <Route key={5} path="/login" exact component={Login} />,
  <Redirect key={6} to="/login" />
]