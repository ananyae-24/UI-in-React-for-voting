import React, { Component } from "react";
import classes from "./register.module.css";
import logo2 from "../../logos/logo2.png";
import Input from "../../components/Input/Input";
class Register extends Component {
  state = {
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
  };
  changevalue = (e, el) => {
    let value = e.target.value;
    this.validators(el, value);
  };
  validators(el, value) {
    let valid = true;
    let validators = { ...this.state[el].validators };
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
        [el]: {
          ...this.state[el],
          valid,
          touched: true,
          value,
        },
      };
    });
  }
  render() {
    let active_ = true;
    for (let key in this.state) {
      active_ = this.state[key].valid && this.state[key].touched && active_;
    }
    return (
      <div>
        <img src={logo2} className={classes.image}></img>
        <div className={classes.box}>
          <form className={classes.form} action="#">
            <Input
              place="Enter your name"
              value={this.state.name.value}
              clicked={(e) => this.changevalue(e, "name")}
              touched={this.state.name.touched}
              valid={this.state.name.valid}
            />
            <Input
              place="Enter your IITK Email"
              value={this.state.email.value}
              clicked={(e) => this.changevalue(e, "email")}
              touched={this.state.email.touched}
              valid={this.state.email.valid}
            />
            <p>Enter your Hall: </p>
            <select
              className={classes.input}
              value={this.state.hall.value}
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
  }
}
export default Register;
