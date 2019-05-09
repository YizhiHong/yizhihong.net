import React, { Fragment } from "react";

const errorStyle = { color: "red" };
// const succeedStyle = { color: "green" };

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

const MsgStyle = {
  succeed: {
    fontSize: "16px",
    color: "green",
    textAlign: "center"
  },
  error: {
    fontSize: "16px",
    color: "red",
    textAlign: "center"
  }
};

const Message = ({ error, msg }) => {
  if (error) return <div style={MsgStyle.error}>{msg}</div>;
  return <div style={MsgStyle.succeed}>{msg}</div>;
};

export { Input, CheckBox, Textarea, Message };
