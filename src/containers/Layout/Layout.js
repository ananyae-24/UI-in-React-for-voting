import React, { Component } from "react";
import Navbar from "../../components/Navbar/Nav";
import { Route, Switch } from "react-router-dom";
import Register from "../register/register";
import classes from "./Layout.module.css";
import Voting from "../Voting/Voting";
class layout extends Component {
  render() {
    return (
      <div className={classes.bg}>
        <Navbar></Navbar>
        <Switch>
          <Route path="/register" component={Register} />
          <Route path="/vote" component={Voting} />
          <Route path="/" component={Register} />
        </Switch>
        <div className={classes.footer}>
          <p style={{ marginTop: "0" }}>Powered By</p>
          <h3 style={{ marginTop: "0" }}>EC</h3>
        </div>
      </div>
    );
  }
}
export default layout;
