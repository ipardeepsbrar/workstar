import React, { useEffect, useState } from "react";
import Header from "../components/Header";

// import styles from './findJobs.module.css';
import AvailableJobList from "../components/AvailableJobList";
import EmptyElement from "../components/EmptyElement";
import { useLocation } from "react-router-dom";
import useBackendRequester from "../components/shared/useBackendRequester";
import LoadingCircle from "../components/shared/LoadingCircle";
import { useSelector } from "react-redux";

const FindJobs = (props) => {
  const location = useLocation().pathname;
  const token = useSelector((state) => state.auth.token);
  const [list, setList] = useState([]);
  const { sendRequest, loading } = useBackendRequester();

  useEffect(() => {
    if (token) {
      async function requestList() {
        const list = await sendRequest(
          'https://54.166.230.250:8000/api/all-jobs/user',
          "GET",
          {
            Authorization: `Bearer ${token}`,
          }
        );
        // BUG => sending correct list to setList function, but not rendering correctly on screen
        setList(list);
      }
      requestList();
    } 
    else {
      async function requestList() {
        const list = await sendRequest(
          "https://54.166.230.250:8000/api/all-jobs/");
        setList(list);
      }
      requestList();
    }
  }, [token, sendRequest]);

  return (
    <>
      <Header />
      <EmptyElement />
      {/* filter goes here */}
      {loading && <LoadingCircle />}
      <AvailableJobList list={list} location={location} />
    </>
  );
};

export default FindJobs;
