import React from "react"
import { useParams } from "react-router-dom";

const Candidates = (props) => {
    const jobId = useParams().jobId;
    // fetch candidates from database with help of jobId

  return (
    <div>
      candidates page
    </div>
  )
};

export default Candidates;
