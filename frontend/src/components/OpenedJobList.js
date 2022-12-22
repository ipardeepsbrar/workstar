import React from "react";
import JobItem from "./JobItem";

const OpenedJobList = (props) => {
  if (props.list.length < 1) {
    return (
      <section>
        <h2>There are no opened positions by you.</h2>
      </section>
    );
  }
  return <section>
    <h2>Opened positions by you:</h2>
    <ul>
        {props.list.map(job => <JobItem {...job} key={job.id} location={props.location}/>)}
    </ul>
  </section>;
};

export default OpenedJobList;
