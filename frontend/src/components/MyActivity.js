import React from "react"
import { useLocation } from "react-router-dom";

// import classes from './MyActivity.module.css';
import OpenedJobList from "./OpenedJobList";

const MyActivity = (props) => {
    const location = useLocation().pathname;
    // fetch opened positions from database
    // dont forget to give a property of openedBy to every job
  // dummy list of opened positions
  const openedJobs = [
    {
      id: 1,
      title: "Web designer",
      description:
        "This is a web development position using frontend technologies.",
        openedBy: 'me'
    },
    {
      id: 2,
      title: "Graphic designer",
      description:
        "This is a graphic designer position using frontend technologies.",
    }]
  return (
    <section>
        <OpenedJobList list={openedJobs} location={location}/>
    </section>
  )
};

export default MyActivity;
