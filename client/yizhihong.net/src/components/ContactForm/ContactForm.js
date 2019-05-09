import React, { Fragment, Component } from "react";

import Form from "../UI/Form/Form";
import Classes from "./ContactForm.css";
import { postContact } from "../../API/contactAPI";
import { Input, Textarea, Message } from "../UI/Form/FormItem/FormItem";
import { EMAIL_REGEX } from "../../config/config";
import { validateName, validateRegex } from "../../hoc/utils";

const ERROR_MESSAGE = {
  name: "Your name is too long or too short.",
  email: "Please provide the correct email.",
  msg: "The message can't be empty or too long."
};

const MESSAGE = {
  success: "Thanks for reach me out! I hear your voice now!"
};

const validation = e => ({
  name: validateName(e.name) ? false : ERROR_MESSAGE.name,
  email: validateRegex(EMAIL_REGEX, e.email) ? false : ERROR_MESSAGE.email,
  msg: e.msg.length !== 0 || e.msg.length > 10000 ? false : ERROR_MESSAGE.msg
});

class contactForm extends Component {
  constructor(props) {
    super(props);
    this.state = { errors: { name: false }, errorMsg: null, submitted: false };
  }
  validate = e => {
    // asys validation
    this.setState(({ errors }) => ({
      errors: {
        ...errors
      }
    }));
  };

  update = (data, handleReset) => {
    // here to post/mutate data
    let payload = {
      email: data.email,
      name: data.name,
      content: data.msg,
      date: new Date()
    };
    postContact(payload)
      .then(response => {
        console.log(response);
        this.setState({
          errorMsg: MESSAGE.success,
          submitted: true
        });
        handleReset();
      })
      .catch(error => {
        console.log("An error occurred:", error);
        this.setState({
          errorMsg: error,
          submitted: false
        });
      });
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
            onSubmit={(data, resetfn) => this.update(data, resetfn)}
            asyncErrors={this.state.errorMsg}
            asyncValidate={this.validate}
            render={({
              form,
              onChange,
              asyncErrors,
              asyncValidate,
              onSubmit,
              updateState,
              handleReset
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
                      onSubmit(values, handleReset);
                    }}
                    disabled={hasErrors}
                    value="submit"
                  />
                  <br />
                </form>
              );
            }}
          />
        </div>
        {this.state.errorMsg !== null ? (
          <Message error={!this.state.submitted} msg={this.state.errorMsg} />
        ) : null}
      </Fragment>
    );
  }
}

export default contactForm;
