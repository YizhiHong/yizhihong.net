import React, { Fragment, Component } from "react";

import Form from "../UI/Form/Form";
import Classes from "./ContactForm.css";
import { postContact } from "../../API/contactAPI";
import { Input, Textarea, Message } from "../UI/Form/FormItem/FormItem";
import { EMAIL_REGEX } from "../../config/config";
import { validateName, validateRegex } from "../../hoc/utils";
import Loader from "../UI/Loader/Loader";
import Recaptcha from "react-recaptcha";

const ERROR_MESSAGE = {
  name: "Your name is too long or too short.",
  email: "Please provide the correct email.",
  msg: "The message can't be empty or too long.",
  isVerify: "Google say you are a robot."
};

const MESSAGE = {
  success: "Thanks for reach me out! I hear your voice now!"
};

const validation = e => ({
  name: validateName(e.name) ? false : ERROR_MESSAGE.name,
  email: validateRegex(EMAIL_REGEX, e.email) ? false : ERROR_MESSAGE.email,
  msg: e.msg.length !== 0 || e.msg.length > 10000 ? false : ERROR_MESSAGE.msg,
  isVerify: e.isVerify ? false : ERROR_MESSAGE.isVerify
});

class contactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false,
      submitted: false
    };
  }
  // asyn validation
  validate = e => {
    this.setState(({ error }) => ({
      ...error
    }));
  };

  // here to post/mutate data
  update = (data, handleReset, updateState) => {
    let payload = {
      email: data.email,
      name: data.name,
      content: data.msg,
      date: new Date()
    };
    postContact(payload)
      .then(response => {
        this.setState({
          error: MESSAGE.success,
          submitted: true
        });
        handleReset();
        this.reset(6000)
      })
      .catch(error => {
        this.setState({
          error: String(error),
          submitted: false
        });
        handleReset();
        this.reset(6000)
      });
  };
  
  // clear the alert state
  reset(time){
    setTimeout(() => {
      this.setState({
        error: false,
        submitted: false
      })
    }, time) 
  }

  render() {
    const { error,submitted } = this.state;
    console.log('====================================');
    console.log(error,submitted );
    console.log('====================================');
    return (
      <Fragment>
        <div className={Classes.Contactform}>
          <h2>Reach out to me</h2>
          <Form
            intitialState={{
              values: {
                active: false,
                name: "",
                email: "",
                msg: "",
                isVerify: false
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
            asyncErrors={this.state.error}
            // asyncValidate={()=> this.setState(error)}
            onloadCallback={this.recaptchaOnload}
            render={({
              form,
              onChange,
              asyncErrors,
              asyncValidate,
              onSubmit,
              updateState,
              handleReset,
              onloadCallback
            }) => {
              const { values, changedFields, submitted } = form;
              const errors = validation(values);
              let recaptchaInstance;
              const hasErrors =
                errors.name || errors.email || errors.msg || errors.isVerify;

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
                  <Recaptcha
                    sitekey="6LcWU6IUAAAAAF7dUe847Vkm-wUWJvjoof1MEI9s"
                    render="explicit"
                    ref={e => (recaptchaInstance = e)}
                    verifyCallback={response => {
                      if (response)
                        updateState(state => ({
                          ...state,
                          values: { ...state.values, isVerify: true }
                        }));
                    }}
                    onloadCallback={() => {
                      console.log("reacptcha loaded!!");
                    }}
                  />
                  <br />
                  <input
                    type="button"
                    onClick={() => {
                      updateState(state => ({ ...state, submitted: true }));
                      onSubmit(values, handleReset);
                      recaptchaInstance.reset();
                    }}
                    disabled={hasErrors}
                    value="Submit"
                  />
                  <br />
                  {submitted ? <Loader /> : null}
                </form>
              );
            }}
          />
          {error === false ? null : { submitted } ? (
            <Message error={false} msg={error} />
          ) : (
            <Message error={true} msg={error} />
          )}
        </div>
      </Fragment>
    );
  }
}

export default contactForm;
