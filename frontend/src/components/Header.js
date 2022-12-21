import React, { useState } from "react";

import classes from "./Header.module.css";
import { FaBars } from "react-icons/fa";
import NavList from "./NavList";

const Header = (props) => {
  const [toggleMenu, setToggleMenu] = useState(true);

  const navLinks = [
    { title: "My Profile", url: "/my-profile" },
    { title: "Find Jobs", url: "/" },
    { title: "Provide Jobs", url: "/provide-jobs" },
    { title: "Log In / Register", url: "/auth-page" },
    { title: "About Us", url: "/about-us" }
];

  return (
    <header>
      <div className={classes.container1}>
        <div className={classes.title}>
          <h2>Workstar</h2>
        </div>
        <div className={classes.burgerDiv}>
          <button
            onClick={() => {
              setToggleMenu(!toggleMenu);
            }}
            className={classes.burgerIcon}
          >
            <FaBars className={classes.icon} />
          </button>
        </div>
      </div>
      <div>
        {toggleMenu && (
          <div className={classes.navList}>
            <NavList list={navLinks} />
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
