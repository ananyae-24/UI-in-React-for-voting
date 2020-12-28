import React, { Component } from "react";
import classes from "./register.module.css";
import Input from "../../components/Input/Input";
import Spinner from "../../components/Spinner/Spinner";
import Modal from "../../components/modal/modal";
class Register extends Component {
  state = {
    elements: {
      name: {
        value: "",
        validators: { required: true, minL: true },
        valid: false,
        touched: false,
      },
      email: {
        value: "",
        validators: { required: true, iitk: true },
        valid: false,
        touched: false,
      },
      hall: { value: "", touched: true, valid: true },
    },
    loading: false,
    error: false,
  };
  changevalue = (e, el) => {
    let value = e.target.value;
    this.validators(el, value);
  };
  validators(el, value) {
    let valid = true;
    let validators = { ...this.state.elements[el].validators };
    if (validators.required) {
      valid = value != "" && valid;
    }
    if (validators.iitk) {
      valid = valid && value.substring(value.indexOf("@") + 1) === "iitk.ac.in";
    }
    if (validators.minL) {
      valid = valid && value.length >= 4;
    }
    this.setState((prevState, props) => {
      return {
        elements: {
          ...this.state.elements,
          [el]: { ...this.state.elements[el], valid, touched: true, value },
        },
      };
    });
  }
  getdata = (e) => {
    e.preventDefault();
    this.setState((prevState, props) => {
      return { loading: !prevState.loading };
    });
    window.setTimeout(() => {
      this.props.history.push("/vote");
    }, 2000);
  };
  closemodal = () => {
    this.setState((prevState, props) => {
      return { error: !prevState.error };
    });
  };
  render() {
    let active_ = true;
    for (let key in this.state.elements) {
      active_ =
        this.state.elements[key].valid &&
        this.state.elements[key].touched &&
        active_;
    }
    let temp = (
      <div style={{ textAlign: "center" }}>
        <div className={classes.box}>
          <form className={classes.form} onSubmit={this.getdata}>
            <Input
              place="Enter your name"
              value={this.state.elements.name.value}
              clicked={(e) => this.changevalue(e, "name")}
              touched={this.state.elements.name.touched}
              valid={this.state.elements.name.valid}
            />
            <Input
              place="Enter your IITK Email"
              value={this.state.elements.email.value}
              clicked={(e) => this.changevalue(e, "email")}
              touched={this.state.elements.email.touched}
              valid={this.state.elements.email.valid}
            />
            <p>Enter your Hall: </p>
            <select
              className={classes.input}
              value={this.state.elements.hall.value}
              onChange={(e) => this.changevalue(e, "hall")}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
            <button
              type="submit"
              className={active_ ? classes.button : classes.btndisabled}
              disabled={!active_}
              value="Register"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    );
    if (this.state.loading) {
      temp = (
        <div className={classes.spinner}>
          <div className={classes.temp}>
            <Spinner />
          </div>
          <div className={classes.message}>
            Please wait till we
            <br /> verify your Account
          </div>
        </div>
      );
    }

    return (
      <div>
        <Modal show={this.state.error} error clicked={this.closemodal}>
          This is a error
        </Modal>
        {temp}
      </div>
    );
  }
}
export default Register;
