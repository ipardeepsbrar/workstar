import React from "react";

import JobItem from "./JobItem";
import classes from './AvailableJobList.module.css';

const AvailableJobList = (props) => {
  
  return (
    <section>
      <h2>Available Jobs</h2>
      <ul>
        {props.list.map((job) => (
          <JobItem {...job} key={job._id} location={props.location}/>
        ))}
      </ul>
    </section>
  );
};

export default AvailableJobList;
