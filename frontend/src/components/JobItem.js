import React from "react"
import { Link } from "react-router-dom";

import classes from './JobItem.module.css';

const JobItem = (props) => {

  return (
    <li className={classes.li}>
      <div className={classes.information}>
        <h3>{props.title}</h3>
        <p>{props.description}</p>
      </div>
      <div className={classes.actions}>
        {props.location === '/' && <><button>Save</button>
        <button><Link className="removeBtnStyle" to={`/apply/${props.id}`}>Apply</Link></button></>}
        {props.location === '/provide-jobs' && <button>Candidates</button>}
      </div>
    </li>
  )
};

export default JobItem;
