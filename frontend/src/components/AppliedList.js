import React from "react"
import classes from './AppliedList.module.css'
import JobItem from "./JobItem";

const AppliedList = (props) => {
    // fetch list of applied jobs by a user

    // dummy list of applied jobs
    const appliedList = [{
        id: 2,
        title: "Graphic designer",
        description:
          "This is a graphic designer position using frontend technologies.",
      }]

  return (
    <>
    <h2>Applied jobs by you:</h2>
    <ul>
      {appliedList.map(job => <JobItem {...job} key={job.id}/>)}
    </ul>
    </>
  )
};

export default AppliedList;
