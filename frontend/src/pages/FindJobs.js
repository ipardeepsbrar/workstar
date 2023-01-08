import React, { useEffect, useState } from "react";
import Header from "../components/Header";

// import styles from './findJobs.module.css';
import AvailableJobList from "../components/AvailableJobList";
import EmptyElement from "../components/EmptyElement";
import { useLocation } from "react-router-dom";
import useBackendRequester from "../components/shared/useBackendRequester";
import LoadingCircle from '../components/shared/LoadingCircle'

const FindJobs = (props) => {
  const location =  useLocation().pathname;
  const [list, setList] = useState([]);
  const {sendRequest, loading} = useBackendRequester();
  

  useEffect(()=>{
    async function requestList() {
      const list = await sendRequest('http://localhost:8000/api/all-jobs/')
      setList(list);
    }
    requestList();
  },[])

  return (
    <>
      <Header />
      <EmptyElement/>
      {/* filter goes here */}
      {loading && <LoadingCircle/>}
      <AvailableJobList list={list} location={location} />
    </>
  );
};

export default FindJobs;
