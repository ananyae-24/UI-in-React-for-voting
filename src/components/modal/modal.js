import React, { Component } from "react";
import Backdrop from "../Backdrop/Backdrop";
import classes from "./modal.module.css";
class Modal extends Component {
  render() {
    return (
      <div>
        <Backdrop show={this.props.show} clicked={this.props.clicked} />
        <div
          className={classes.Modal}
          style={{
            transform: this.props.show ? "translateY(0)" : "translateY(-100vh)",
            opacity: this.props.show ? "1" : "0",
          }}
        >
          <div className={this.props.error ? classes.success : classes.error}>
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}
export default Modal;
