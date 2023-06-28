import React from "react";

const SelectField = ({ label, options, value, onChange }) => {
  return (
    <div className="select">
      <label>{label}</label>
      <select value={value} onChange={onChange}>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectField;