import React, { useEffect, useState } from "react";
import {
  Link,
  Route,
  Routes,
  useLocation
} from "react-router-dom";
import EmptyElement from "../components/EmptyElement";
import Header from "../components/Header";
import OpenPosition from "./OpenPosition";
import OpenedJobList from "../components/OpenedJobList";

import classes from "./css/ProvideJobs.module.css";
import { useSelector } from "react-redux";
// import { alertActions } from "../store/alertSlice";
import useBackendRequester from "../components/shared/useBackendRequester";

const ProvideJobs = (props) => {
  const location = useLocation().pathname;
  // const dispatch = useDispatch();
  // const navigate = useNavigate();
  const token = useSelector((state) => state.auth.token);
  const [list, setList] = useState([]);
  const {sendRequest} = useBackendRequester();
  

  useEffect(()=>{
    if(token){
      async function requestList() {
          const list = await sendRequest('https://54.166.230.250:8000/api/provide-jobs/opened-positions', "GET",
          { "Content-Type": "application/json", Authorization: `Bearer ${token}`})
          setList(list);
        }
        requestList();
      }
  },[token, sendRequest])

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
