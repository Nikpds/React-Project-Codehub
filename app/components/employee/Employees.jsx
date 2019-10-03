import React from "react";
import { Image } from "../shared/Controls";

const Employees = ({ employees, isSelected, onSelectEmployee }) => (
  <ul>
    {employees &&
      employees.length &&
      employees.map((employee) => (
        <li key={employee.id} className={`${isSelected(employee.id)} employee-list-item`}>
          <a href="#" onClick={() => onSelectEmployee(employee)}>
            <Image
              src={employee.picture}
              alt={`${employee.firstName} ${employee.lastName} photo`}
            />
            <div className="info">
              <p className="name">{`${employee.firstName} ${employee.lastName}`}</p>
              <p className="email">{employee.email}</p>
            </div>
          </a>
        </li>
      ))}
  </ul>
);

export default Employees;
