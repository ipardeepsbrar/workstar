import React from "react";

import classes from "./Header.module.css";
import { FaBars, FaTimes } from "react-icons/fa";
import NavList from "./NavList";
import { useSelector, useDispatch } from "react-redux";
import { toggleMenuActions } from "../store/menuButtonSlice";

const Header = (props) => {
  const menuOpen = useSelector(state => state.menuButton.menuOpen);
  const dispatch = useDispatch();

  const navLinks = [
    { title: "Find Jobs", url: "/" },
    { title: "Provide Jobs", url: "/provide-jobs" },
    { title: "My Profile", url: "/my-profile" },
    { title: "Log In / Register", url: "/auth-page" },
    { title: "About Us", url: "/about-us" }
];

  return (
    <header className={classes.header}>
      <div className={classes.container1}>
        <div className={classes.title}>
          <h2>Workstar</h2>
        </div>
        <div className={classes.burgerDiv}>
          <button
            onClick={() => {
              dispatch(toggleMenuActions.toggleMenu());
            }}
            className={classes.burgerIcon}
          >
            {menuOpen ? <FaTimes className={classes.icon}/> : <FaBars className={classes.icon} />}
          </button>
        </div>
      </div>
      <div>
        {menuOpen && (
          <div className={classes.navList}>
            <NavList list={navLinks} />
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
