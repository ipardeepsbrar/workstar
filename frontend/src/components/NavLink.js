import React from "react";
import { Link, useNavigate } from "react-router-dom";

import classes from "./NavLink.module.css";
import { toggleMenuActions } from "../store/menuButtonSlice";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../store/authSlice";
import { alertActions } from "../store/alertSlice";

const NavLink = (props) => {
    const token = useSelector((state) => state.auth.token);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const logOutHandler = (e) => {
      e.preventDefault();
      dispatch(authActions.logOut());
      dispatch(toggleMenuActions.toggleMenu())
      navigate('/');
    }

    const authenticationHandler = (e) => {
      e.preventDefault();
      dispatch(alertActions.setAlert("Please Log-in to continue..."));
      dispatch(toggleMenuActions.toggleMenu())
      return navigate("/authenticate/login");
    }

  if(props.url === '/authenticate' && token){
    return <li className={classes.item}><Link onClick={logOutHandler}>Log Out</Link></li>
  }
  if(props.url === '/my-profile' && !token){
    return <li className={classes.item}><Link onClick={authenticationHandler}>My Profile</Link></li>
  }
  if(props.url === '/provide-jobs' && !token){
    return <li className={classes.item}><Link onClick={authenticationHandler}>Provide Jobs</Link></li>
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
