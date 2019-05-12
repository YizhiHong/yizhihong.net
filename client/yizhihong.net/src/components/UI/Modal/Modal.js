import React, { Component, Fragment } from "react";

import Classes from "./Modal.css";
import Backdrop from "../Backdrop/Backdrop";

class Modal extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return (
      nextProps.show !== this.props.show ||
      this.props.children !== nextProps.children
    );
  }

  render() {
    return (
      <Fragment>
        <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
        <div className={Classes.ModalContainer}>
          <div
            className={Classes.Modal}
            style={{
              transform: this.props.show
                ? "translateY(0)"
                : "translateY(-100vh)",
              opacity: this.props.show ? 1 : 0
            }}
          >
            {this.props.children}
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Modal;
