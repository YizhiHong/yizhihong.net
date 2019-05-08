import React, { Fragment, Component } from "react";
import Form from "../UI/Form/Form";
import Classes from "./ContactForm.css";
import { Input } from "../UI/Form/FormItem/FormItem";
import { EMAIL_REGEX } from "../../config/config";
import { validateName, validateRegex } from "../../hoc/utils";

const validation = e => ({
  name: validateName(e.name) ? false : "Your name is too long or too short!",
  email: validateRegex(EMAIL_REGEX, e.email)
    ? false
    : "Email format is not right"
});

class contactForm extends Component {
  constructor(props) {
    super(props);
    this.state = { errors: { name: false } };
  }
  validate = e => {
    this.setState(({ errors }) => ({
      errors: {
        ...errors,
        name: true
      }
    }));
  };

  // validateEmail = e => {
  //   console.log(e.target)
  //   this.setState(({ errors }) => ({
  //     errors: {
  //       ...errors,
  //       email: validateRegex(EMAIL_REGEX, e.target.value)
  //     }
  //   }))
  // }

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
                content: ""
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
            validateEmail={this.validateEmail}
            render={({
              form,
              onChange,
              asyncErrors,
              asyncValidate,
              onSubmit,
              updateState
            }) => {
              const { values, changedFields, submitted } = form;
              const errors = validation(values);
              const hasErrors = errors.name || errors.email;
              // const showErrors = submitted && hasErrors;

              return (
                <form onSubmit={e => e.preventDefault()}>
                  <br />
                  <Input
                    label="name"
                    name="name"
                    type="text"
                    value={values.name}
                    onChange={onChange}
                    error={changedFields.name && errors.name}
                  />

                  <br />
                  <Input
                    label="email"
                    name="email"
                    type="email"
                    value={values.email}
                    onChange={onChange}
                    error={changedFields.email && errors.email}
                  />
                  <br />
                  <br />
                  <div>
                    Form has been Submitted already ? {submitted ? "Yes" : "No"}
                  </div>
                  <button
                    onClick={() => {
                      updateState(state => ({ ...state, submitted: true }));
                      onSubmit(values);
                    }}
                    disabled={hasErrors}
                  >
                    Submit
                  </button>
                  <br />
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
