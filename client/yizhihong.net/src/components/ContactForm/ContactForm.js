import React, { Fragment, Component } from "react";
import Form from "../UI/Form/Form";
import Classes from "./ContactForm.css";
import { Input, Textarea } from "../UI/Form/FormItem/FormItem";
import { EMAIL_REGEX } from "../../config/config";
import { validateName, validateRegex } from "../../hoc/utils";

const ERROR_MESSAGE = {
  name: "Your name is too long or too short.",
  email: "Please provide the correct email.",
  msg: "The message can't be empty or too long."
};

const validation = e => ({
  name: validateName(e.name) ? false : ERROR_MESSAGE.name,
  email: validateRegex(EMAIL_REGEX, e.email) ? false : ERROR_MESSAGE.email,
  msg: e.msg.length !== 0 || e.msg.length > 10000 ? false : ERROR_MESSAGE.msg
});

class contactForm extends Component {
  constructor(props) {
    super(props);
    this.state = { errors: { name: false } };
  }
  validate = e => {
    // asys validation
    this.setState(({ errors }) => ({
      errors: {
        ...errors
      }
    }));
  };

  update = data => {
    // here to post/mutate data
    console.log(data);
  };
  render() {
    return (
      <Fragment>
        <div className={Classes.Contactform}>
          <h2>Feel free to connect</h2>
          <Form
            intitialState={{
              values: {
                active: false,
                name: "",
                email: "",
                msg: ""
              },
              submitted: false,
              changedFields: {}
            }}
            update={(state, name, value) => {
              return {
                ...state,
                values: { ...state.values, [name]: value },
                changedFields: { ...state.changedFields, [name]: true }
              };
            }}
            onSubmit={data => this.update(data)}
            asyncErrors={this.state.errors}
            asyncValidate={this.validate}
            render={({
              form,
              onChange,
              asyncErrors,
              asyncValidate,
              onSubmit,
              updateState
            }) => {
              const { values, changedFields } = form;
              const errors = validation(values);
              const hasErrors = errors.name || errors.email || errors.msg;

              return (
                <form onSubmit={e => e.preventDefault()}>
                  <Input
                    label="Name"
                    name="name"
                    type="text"
                    value={values.name}
                    onChange={onChange}
                    error={changedFields.name && errors.name}
                  />
                  <br />
                  <Input
                    label="Email"
                    name="email"
                    type="email"
                    value={values.email}
                    onChange={onChange}
                    error={changedFields.email && errors.email}
                  />
                  <br />
                  <Textarea
                    label="Message"
                    name="msg"
                    type="text"
                    value={values.msg}
                    onChange={onChange}
                    error={changedFields.msg && errors.msg}
                  />
                  <br />
                  <br />
                  <input
                    type="button"
                    onClick={() => {
                      updateState(state => ({ ...state, submitted: true }));
                      onSubmit(values);
                    }}
                    disabled={hasErrors}
                    value="submit"
                  />
                </form>
              );
            }}
          />
        </div>
      </Fragment>
    );
  }
}

export default contactForm;
