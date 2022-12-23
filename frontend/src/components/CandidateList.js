import React from "react";

const CandidateList = (props) => {
  if (props.list.length < 1) {
   return  <section>
      <h3>There are no candidates for this job yet.</h3>
    </section>;
  }
  return (
    <section>
      <ul>
        {props.list.map((candidate) => {
          <li>{candidate.name}</li>;
        })}
      </ul>
    </section>
  );
};

export default CandidateList;
