import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Nav.module.css";
import logo1 from "../../logos/logo1.png";
const navbar = () => {
  return (
    <div>
      <img src={logo1} className={classes.image} />
      <nav className={classes.navbar}>
        <NavLink
          to="/register"
          className={classes.inactive}
          activeClassName={classes.active}
          exact
        >
          Register
        </NavLink>

        <NavLink
          to="/vote"
          className={classes.inactive}
          activeClassName={classes.active}
          exact
        >
          Vote
        </NavLink>

        <NavLink
          to="/submit"
          className={classes.inactive}
          activeClassName={classes.active}
          exact
        >
          Submit
        </NavLink>
      </nav>
    </div>
  );
};
export default navbar;
