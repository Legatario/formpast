import React from "react";

const RadioField = ({ label, options, value, onChange }) => {
  return (
    <div>
      <label>{label}</label>
      {options.map((option, index) => (
        <div key={index}>
          <input type="radio" id={option} name={label} value={option} checked={value === option} onChange={onChange} />
          <label htmlFor={option}>{option}</label>
        </div>
      ))}
    </div>
  );
};

export default RadioField;