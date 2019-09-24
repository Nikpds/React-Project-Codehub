import React from "react";
import { Image } from "../shared/Controls";
const EmployeesContainer = ({ employees, onSelectEmployee, id }) => {
  const setColorOnSelected = (empId) => {
    if (empId === id) {
      return "selected";
    }
  };
  return (
    <ul>
      {employees &&
        employees.length &&
        employees.map((employee) => (
          <li key={employee.id} className={`${setColorOnSelected(employee.id)} employee-list-item`}>
            <a href="#" onClick={() => onSelectEmployee(employee)}>
              <Image src={employee.picture} alt={`${employee.firstName} ${employee.lastName} photo`} />
              <div className="info">
                <p className="name">{`${employee.firstName} ${employee.lastName}`}</p>
                <p className="email">{employee.email}</p>
              </div>
            </a>
          </li>
        ))}
    </ul>
  );
};

export default EmployeesContainer;
