import React from "react";
import { useParams } from "react-router-dom";
import EmptyElement from "../components/EmptyElement";
import Header from "../components/Header";

const Apply = (props) => {
  const applyId = useParams().applyId;
  // fetch data according to applyId

  const submitHandler = () => {};

  return (
    <>
      <Header />
      <EmptyElement />
      <section>
        <form onSubmit={submitHandler}>
          <h3>
            {/* title */}title id: {applyId}
          </h3>
          <p>description</p>
          <label htmlFor="resume">Upload Resume :</label>
          <input type="file" id="resume" name="resume" />
          <label htmlFor="experience">experience</label>
          <input
            type="text"
            id="experience"
            placeholder="Enter your experience"
          />
          <button type="submit">Apply</button>
        </form>
      </section>
    </>
  );
};

export default Apply;
