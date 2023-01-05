import React from "react";
import { Link } from "react-router-dom";

import classes from "./NavLink.module.css";
import { toggleMenuActions } from "../store/menuButtonSlice";
import { useDispatch, useSelector } from "react-redux";

const NavLink = (props) => {
    const loggedIn = useSelector(state => state.auth.loggedIn)
  const dispatch = useDispatch();
  if (props.title === "Provide Jobs" && loggedIn === false) {
    return (
      <li className={classes.item}>
        <Link
          onClick={() => dispatch(toggleMenuActions.toggleMenu())}
          to={'/authenticate'}
        >
          {props.title}
        </Link>
      </li>
    );
  }

  return (
    <li className={classes.item}>
      <Link
        onClick={() => dispatch(toggleMenuActions.toggleMenu())}
        to={props.url}
      >
        {props.title}
      </Link>
    </li>
  );
};

export default NavLink;
