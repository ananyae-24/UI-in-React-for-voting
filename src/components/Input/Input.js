import React from "react";
import classes from "./Input.module.css";
const input = (props) => {
  let clas = classes.input;
  if (props.touched) {
    if (props.valid) {
      clas = classes.inputSuccess;
    } else {
      clas = classes.inputFail;
    }
  }
  return (
    <input
      className={clas}
      type="text"
      placeholder={props.place}
      value={props.value}
      onChange={props.clicked}
    />
  );
};
export default input;
