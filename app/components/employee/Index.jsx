import React, { useState, useReducer, useEffect } from "react";
import { Row, Col } from "reactstrap";
import Employee from "./Employee";
import Employees from "./Employees";
import useFetch from "../../services/hooks/useFetch";
import axios from "axios";
import { api } from "../../services/apiRoutes";

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
  const { data: initialState = [] } = useFetch(api.getEmployees, "GET");
  const [employees, dispatch] = useReducer(reducer, initialState);
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  const onSelectEmployee = (selectedEmployee) => {
    setSelectedEmployee(selectedEmployee);
  };

  const onFormSubmit = async (e, employee) => {
    e.preventDefault();
    const { id, ...rest } = employee;
    const response = await axios.put(`${api.updateEmployee}/${id}`, rest);
    if (response && response.status === 200) {
      dispatch({ type: "updateOne", value: response.data });
    }
  };

  const setColorOnSelected = (empId) => {
    if (selectedEmployee && empId === selectedEmployee.id) {
      return "selected";
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
              isSelected={setColorOnSelected}
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
