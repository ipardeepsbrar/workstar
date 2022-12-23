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
  // testing
  return (
    <section>
      <h2>Opened positions by you:</h2>
      <ul>
        {props.list.map((job) => {
            if (job.openedBy === "me") {
              return <JobItem {...job} key={job.id} location={props.location}/>;
            } else return null;
        })}
      </ul>
    </section>
  );
};

export default OpenedJobList;
