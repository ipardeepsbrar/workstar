import React from "react";
import { Link } from "react-router-dom";
import ButtonLogic from "./ButtonLogic";

import classes from "./JobItem.module.css";

const JobItem = (props) => {
  return (
    <li className={classes.li}>
      <div className={classes.information}>
        <h3>{props.title}</h3>
        <p>{props.description}</p>
      </div>
      <div className={classes.actions}>
        <ButtonLogic openedBy={props.openedBy} jobId={props.id} location={props.location} />
      </div>
    </li>
  );
};

export default JobItem;
