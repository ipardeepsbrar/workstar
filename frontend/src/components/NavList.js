import React from 'react';

import classes from './NavList.module.css';
import NavLink from './NavLink';


const NavList = (props) => {

    return (
        <ul className={classes.navList}>
            {props.list.map(link => <NavLink {...link}/>)}
        </ul>
    )
};

export default NavList;