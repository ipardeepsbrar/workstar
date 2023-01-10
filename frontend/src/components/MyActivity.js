import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import AppliedList from "./AppliedList";

// import classes from './MyActivity.module.css';
import OpenedJobList from "./OpenedJobList";
import useBackendRequester from "./shared/useBackendRequester";

const MyActivity = (props) => {
    const location = useLocation().pathname;
    const token = useSelector((state) => state.auth.token);
    const [list, setList] = useState([]);
    const {sendRequest} = useBackendRequester();
    
  
    useEffect(()=>{
      if(token){
        async function requestList() {
            const list = await sendRequest('http://localhost:8000/api/provide-jobs/opened-positions', "GET",
            { "Content-Type": "application/json", Authorization: `Bearer ${token}`})
            setList(list);
          }
          requestList();
        }
    },[token, sendRequest])
    // fetch opened positions from database
    // dont forget to give a property of openedBy to every job
  // dummy list of opened positions
  // const openedJobs = [
  //   {
  //     id: 1,
  //     title: "Web designer",
  //     description:
  //       "This is a web development position using frontend technologies.",
  //       openedBy: 'me'
  //   },
  //   {
  //     id: 2,
  //     title: "Graphic designer",
  //     description:
  //       "This is a graphic designer position using frontend technologies.",
  //   }]
  return (
    <section>
        <OpenedJobList list={list} location={location}/>
        <AppliedList/>
    </section>
  )
};

export default MyActivity;
