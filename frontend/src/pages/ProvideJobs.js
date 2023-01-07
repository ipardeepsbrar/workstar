import React from "react";
import {
  Link,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import EmptyElement from "../components/EmptyElement";
import Header from "../components/Header";
import OpenPosition from "./OpenPosition";
import OpenedJobList from "../components/OpenedJobList";

import classes from "./css/ProvideJobs.module.css";
import { useDispatch, useSelector } from "react-redux";
import { alertActions } from "../store/alertSlice";

const ProvideJobs = (props) => {
  const location = useLocation().pathname;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loggedIn = useSelector((state) => state.auth.loggedIn);
  const token = useSelector((state) => state.auth.token);
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

  const clickHandler = (e) => {
    e.preventDefault();
    if (!loggedIn || !token) {
      dispatch(alertActions.setAlert("Please Log-in to continue..."));
      return navigate("/authenticate/login");
    }
    navigate('open-position')
  };

  const currentPage = (
    <>
      <Header />
      <EmptyElement />
      <div className={classes.openPositionBtn}>
        <button onClick={clickHandler}>
            Open a position
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
