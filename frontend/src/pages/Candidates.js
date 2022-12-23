import React from "react"
import { useLocation, useParams } from "react-router-dom";
import EmptyElement from "../components/EmptyElement";
import JobItem from "../components/JobItem";
import Header from "../components/Header";
import CandidateList from "../components/CandidateList";

const Candidates = (props) => {
    const location = useLocation().pathname
    const jobId = useParams().jobId;
    // fetch job from database with jobId
    // fetch candidates from database with help of jobId
      const candidates = [];
    // dummy job
    const job = 
        {
          id: 1,
          title: "Web designer",
          description:
            "This is a web development position using frontend technologies.",
            openedBy: 'me'
        }

  return (
    <>
        <Header/>
        <EmptyElement/>
        <ul>
        <JobItem {...job} location={location}/>
        <CandidateList list={candidates}/>
        </ul>
    </>
  )
};

export default Candidates;
