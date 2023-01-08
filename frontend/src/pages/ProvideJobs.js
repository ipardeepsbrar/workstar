import React, { useEffect, useState } from "react";
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
import useBackendRequester from "../components/shared/useBackendRequester";

const ProvideJobs = (props) => {
  const location = useLocation().pathname;
  // const dispatch = useDispatch();
  // const navigate = useNavigate();
  const token = useSelector((state) => state.auth.token);
  const [list, setList] = useState([]);
  const {sendRequest, loading} = useBackendRequester();
  

  useEffect(()=>{
    if(token){
      async function requestList() {
          const list = await sendRequest('http://localhost:8000/api/provide-jobs/opened-positions', "GET",
          { "Content-Type": "application/json", Authorization: `Bearer ${token}`})
          setList(list);
        }
        requestList();
      }
  },[token])
  // fetch opened positions from database

  // dummy list of opened positions
  // const openedJobs = [
  //   {
  //     id: 1,
  //     title: "Web designer",
  //     description:
  //       "This is a web development position using frontend technologies.",
  //     openedBy: "me",
  //   },
  //   {
  //     id: 2,
  //     title: "Graphic designer",
  //     description:
  //       "This is a graphic designer position using frontend technologies.",
  //   },
  // ];

  const currentPage = (
    <>
      <Header />
      <EmptyElement />
      <div className={classes.openPositionBtn}>
        <button>
          <Link to='open-position'>Open a position</Link>
        </button>
      </div>
      <OpenedJobList list={list} location={location} />
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
