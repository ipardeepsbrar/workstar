import React from "react";
import EmptyElement from "../components/EmptyElement";
import Header from "../components/Header";
import classes from "./css/OpenPosition.module.css";

const OpenPosition = (props) => {
  const submitHandler = () => {};

  return (
    <>
      <Header />
      <EmptyElement />
      <div className={classes.openPositionForm}>
        <form onSubmit={submitHandler}>
          <div>
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              name="title"
              placeholder="Enter a title"
            />
          </div>

          <div>
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              name="description"
              placeholder="Enter a description"
              rows='10'
              columns='10'
            />
          </div>

          <button type="submit">Post</button>
        </form>
      </div>
    </>
  );
};

export default OpenPosition;
