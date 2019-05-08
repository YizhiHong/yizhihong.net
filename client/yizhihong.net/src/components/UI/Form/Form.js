import { Component } from "react";
/**
 * The High Order Component for Form
 */

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = props.intitialState;
  }

  onChange = event => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    this.update(name, value);
  };
  //update state
  update = (name, value) => {
    if (this.props.update) {
      this.setState(state => this.props.update(state, name, value));
    } else {
      this.setState(state => ({
        ...state,
        [name]: value
      }));
    }
  };
  //Call function
  updateState = fn => {
    this.setState(state => fn(state));
  };

  render() {
    console.log(this.state)
    return this.props.render({
      ...this.props,
      form: this.state,
      onChange: this.onChange,
      udpate: this.update,
      updateState: this.updateState
    });
  }
}

export default Form;
