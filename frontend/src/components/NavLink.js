import React from "react";
import { Link, useNavigate } from "react-router-dom";

import classes from "./NavLink.module.css";
import { toggleMenuActions } from "../store/menuButtonSlice";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../store/authSlice";

const NavLink = (props) => {
    const loggedIn = useSelector(state => state.auth.loggedIn)
    const token = useSelector((state) => state.auth.token);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const logOutHandler = (e) => {
      e.preventDefault();
      dispatch(authActions.logOut());
      dispatch(toggleMenuActions.toggleMenu())
      navigate('/');
    }

  if(props.url === '/authenticate' && loggedIn && token){
    return <li className={classes.item}><Link onClick={logOutHandler}>Log Out</Link></li>
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
