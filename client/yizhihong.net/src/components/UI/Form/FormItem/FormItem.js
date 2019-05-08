import React, { Fragment } from "react";

const errorStyle = { color: "red" };

const Input = ({ label, error, onChange, name, value }) => (
  <Fragment>
    <input
      name={name}
      type="text"
      value={value}
      placeholder={label}
      onChange={onChange}
    />
    {error && <span style={errorStyle}>{error}</span>}
  </Fragment>
);

const Textarea = ({ label, error, onChange, name, value }) => (
  <Fragment>
    <textarea
      name={name}
      value={value}
      placeholder={label}
      onChange={onChange}
    />
    {error && <span style={errorStyle}>{error}</span>}
  </Fragment>
);

const CheckBox = ({ label, error, onChange, name, value }) => (
  <label>
    {label}:
    <input name={name} type="checkbox" checked={value} onChange={onChange} />
    {error && <span style={errorStyle}>{error}</span>}
  </label>
);

export { Input, CheckBox, Textarea };
