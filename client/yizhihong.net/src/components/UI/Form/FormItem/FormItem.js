import React from "react";

const errorStyle = { color: "red" };

const Input = ({ label, error, onChange, name, value }) => (
  <label>
    {label}:
    <input name={name} type="text" value={value} placeholder={name} onChange={onChange} />
    {error && <span style={errorStyle}>{error}</span>}
  </label>
);

const CheckBox = ({ label, error, onChange, name, value }) => (
  <label>
    {label}:
    <input name={name} type="checkbox" checked={value} onChange={onChange} />
    {error && <span style={errorStyle}>{error}</span>}
  </label>
);

export { Input, CheckBox };
