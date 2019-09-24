import React, { useState, useEffect } from "react";
import { Input, Select } from "../shared/Controls";

const Employee = ({ onFormSubmit, selectedEmployee = null }) => {
  const [employee, setEmployee] = useState(selectedEmployee);
  const onInputChange = (e) => {
    const { value, name } = e.target;
    setEmployee({ ...employee, [name]: value });
  };

  useEffect(() => {
    setEmployee(selectedEmployee);
  }, [selectedEmployee]);

  return (
    <div>
      {employee ? (
        <>
          <h3>
            {employee.id}: {`${employee.firstName} ${employee.lastName}`} ({employee.department})
          </h3>
          <form onSubmit={(e) => onFormSubmit(e, employee)}>
            <Input
              label="First name"
              name="firstName"
              value={employee.firstName}
              changeValue={onInputChange}
            />
            <Input
              label="Last name"
              name="lastName"
              value={employee.lastName}
              changeValue={onInputChange}
            />
            <Select
              label="Gender"
              name="gender"
              value={employee.gender}
              changeValue={onInputChange}
              options={["male", "female"]}
            />
            <Input label="Email" name="email" value={employee.email} changeValue={onInputChange} />
            <Input label="Phone" name="phone" value={employee.phone} changeValue={onInputChange} />
            <Input
              label="Mobile"
              name="mobile"
              value={employee.mobile}
              changeValue={onInputChange}
            />
            <Input label="Age" name="age" value={employee.age} changeValue={onInputChange} />
            <button type="submit" className="btn btn-primary float-sm-right">
              Submit
            </button>
          </form>
        </>
      ) : (
        <h3>Please select a user to view edit his data...</h3>
      )}
    </div>
  );
};

export default Employee;
