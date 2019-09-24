import React from "react";

export const Select = ({ name, label, value, changeValue, options = [] }) => (
  <div className="form-group">
    <label htmlFor="gender">{label}:</label>
    <select
      id={name}
      name={name}
      value={value}
      className="form-control"
      onChange={(e) => changeValue({ target: { value: e.target.value, name: "gender" } })}
    >
      {options.map((o, i) => (
        <option key={i}>{o}</option>
      ))}
    </select>
  </div>
);

export const Input = ({ name, label, value, changeValue }) => (
  <div className="form-group">
    <label htmlFor={name}>{label}:</label>
    <input
      type="text"
      className="form-control"
      id={name}
      name={name}
      value={value}
      onChange={changeValue}
    />
  </div>
);

export const Image = ({ src, alt = "No Image", dims = { width: 70, height: 70 } }) => (
  <div className="img">
    <img width={dims.width} height={dims.height} 
    className="rounded-circle" src={src} alt={alt} />
  </div>
);
