import React, { useState, useReducer, useEffect } from "react";
import { Row, Col } from "reactstrap";
import Employee from "./Employee";
import Employees from "./Employees";
import useFetch from "../../services/hooks/useFetch";
import axios from "axios";

const url = "http://localhost:3001/employees";
const urlUpdate = "http://localhost:3001/employees";

const reducer = (state, action) => {
  switch (action.type) {
    case "update":
      return action.value;
    case "updateOne":
      const index = state.findIndex((x) => x.id === action.value.id);
      if (index > -1) {
        state[index] = action.value;
      }
      return [...state];
    default:
      throw new Error("Unexpected action");
  }
};

const EmployeeContainer = () => {
  const { data: initialState = [] } = useFetch(url, "GET");
  const [employees, dispatch] = useReducer(reducer, initialState);
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  const onSelectEmployee = (selectedEmployee) => {
    setSelectedEmployee(selectedEmployee);
  };

  const onFormSubmit = async (e, employee) => {
    e.preventDefault();
    const { id, ...rest } = employee;
    const response = await axios.put(`${urlUpdate}/${id}`, rest);
    if (response && response.status === 200) {
      dispatch({ type: "updateOne", value: response.data });
    }
  };

  useEffect(() => {
    dispatch({ type: "update", value: initialState });
  }, [initialState]);

  return (
    <Row>
      <Col xs={12}>
        <div className="employees-container">
          <div className="employees-list">
            <Employees
              id={selectedEmployee ? selectedEmployee.id : null}
              employees={employees}
              onSelectEmployee={onSelectEmployee}
            />
          </div>
          <div className="employee-details">
            <Employee selectedEmployee={selectedEmployee} onFormSubmit={onFormSubmit} />
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default EmployeeContainer;
