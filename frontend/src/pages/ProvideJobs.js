import React from "react";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import EmptyElement from "../components/EmptyElement";
import Header from "../components/Header";
import OpenPosition from "./OpenPosition";
import OpenedJobList from "../components/OpenedJobList";

import classes from "./css/ProvideJobs.module.css";

const ProvideJobs = (props) => {
  const location = useLocation().pathname;
  // fetch opened positions from database

  // dummy list of opened positions
  const openedJobs = [
    {
      id: 1,
      title: "Web designer",
      description:
        "This is a web development position using frontend technologies.",
      openedBy: "me",
    },
    {
      id: 2,
      title: "Graphic designer",
      description:
        "This is a graphic designer position using frontend technologies.",
    },
  ];

  const currentPage = (
    <>
      <Header />
      <EmptyElement />
      <div className={classes.openPositionBtn}>
        <button>
          <Link className="removeBtnStyle" to="open-position">
            Open a position
          </Link>
        </button>
      </div>
      <OpenedJobList list={openedJobs} location={location} />
    </>
  );

  return (
    <Routes>
      <Route path="/" element={currentPage} />
      <Route path="open-position" element={<OpenPosition />} />
    </Routes>
  );
};

export default ProvideJobs;