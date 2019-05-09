import React, { Fragment } from "react";
import Classes from "./FormItem.css";

const Input = ({ label, error, onChange, name, value }) => (
  <Fragment>
    <input
      name={name}
      type="text"
      value={value}
      placeholder={label}
      onChange={onChange}
    />
    {error && <span className={Classes.msgError}>{error}</span>}
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
    {error && <span className={Classes.msgError}>{error}</span>}
  </Fragment>
);

const CheckBox = ({ label, error, onChange, name, value }) => (
  <label>
    {label}:
    <input name={name} type="checkbox" checked={value} onChange={onChange} />
    {error && <span className={Classes.msgError}>{error}</span>}
  </label>
);

const Message = ({ error, msg }) => {
  if (error)
    return <div className={[Classes.error, Classes.msg].join(" ")}>{msg}</div>;
  return <div className={[Classes.succeed, Classes.msg].join(" ")}>{msg}</div>;
};

export { Input, CheckBox, Textarea, Message };
