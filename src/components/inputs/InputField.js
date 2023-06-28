import React from "react";

const InputField = ({ label, value, onChange }) => {
  return (
    <div className="boxInput">
      <div className="label">
      <label>{label}</label>
      </div>
      <input type="text" value={value} onChange={onChange} />
    </div>
  );
};

export default InputField;