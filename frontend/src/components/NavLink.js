import React from 'react';
import { Link } from 'react-router-dom';

import classes from './NavLink.module.css';
import { toggleMenuActions } from '../store/menuButtonSlice';
import { useDispatch } from 'react-redux';


const NavLink = (props) => {
    const dispatch = useDispatch();

    return (
        <li className={classes.item}>
            <Link onClick={()=>dispatch(toggleMenuActions.toggleMenu())} to={props.url}>{props.title}</Link>
        </li>
    )
};

export default NavLink;