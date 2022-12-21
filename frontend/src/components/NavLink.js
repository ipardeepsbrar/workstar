import React from 'react';
import { Link } from 'react-router-dom';

import classes from './NavLink.module.css';


const NavLink = (props) => {

    return (
        <li className={classes.item}>
            <Link to={props.url}>{props.title}</Link>
        </li>
    )
};

export default NavLink;