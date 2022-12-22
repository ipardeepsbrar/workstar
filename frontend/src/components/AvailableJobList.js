import React from "react";

import JobItem from "./JobItem";
import classes from './AvailableJobList.module.css';

const AvailableJobList = (props) => {
  if (props.list.length < 1) {
    return (
      <section>
        <h2>Sorry, there are no jobs available right now.</h2>
      </section>
    );
  }
  return (
    <section>
      <h2>Available Jobs</h2>
      <ul>
        {props.list.map((job) => (
          <JobItem {...job} key={job.id} location={props.location}/>
        ))}
      </ul>
    </section>
  );
};

export default AvailableJobList;
