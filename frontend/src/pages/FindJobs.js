import React from "react";
import Header from "../components/Header";

// import styles from './findJobs.module.css';
import AvailableJobList from "../components/AvailableJobList";
import EmptyElement from "../components/EmptyElement";
import { useLocation } from "react-router-dom";

const FindJobs = (props) => {
  const location =  useLocation().pathname;
  const jobList = [
    {
      id: 1,
      title: "Web designer",
      description:
        "This is a web development position using frontend technologies.",
    },
    {
      id: 2,
      title: "Graphic designer",
      description:
        "This is a graphic designer position using frontend technologies.",
    },
    {
      id: 3,
      title: "Web designer",
      description:
        "This is a web development position using frontend technologies.",
    },
    {
      id: 4,
      title: "Graphic designer",
      description:
        "This is a graphic designer position using frontend technologies.",
    },
    {
      id: 5,
      title: "Web designer",
      description:
        "This is a web development position using frontend technologies.",
    },
    {
      id: 6,
      title: "Graphic designer",
      description:
        "This is a graphic designer position using frontend technologies.",
    },
  ];
  return (
    <>
      <Header />
      <EmptyElement/>
      {/* filter goes here */}
      <AvailableJobList list={jobList} location={location} />
    </>
  );
};

export default FindJobs;
