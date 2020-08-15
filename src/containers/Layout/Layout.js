import React, { Component } from "react";
import Navbar from "../../components/Navbar/Nav";
import { Route, Switch } from "react-router-dom";
import Register from "../register/register";
class layout extends Component {
  render() {
    return (
      <div>
        <Navbar></Navbar>
        <Switch>
          <Route path="/" component={Register} />
          <Route path="/register" component={Register} />
        </Switch>
      </div>
    );
  }
}
export default layout;
