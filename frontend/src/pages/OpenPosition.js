import React from "react";
import EmptyElement from "../components/EmptyElement";
import Header from "../components/Header";

const OpenPosition = (props) => {

    const submitHandler = () => {}

  return (
    <>
      <Header />
      <EmptyElement />
      <div className="openPositionForm">
        <form onSubmit={submitHandler}>
            <label htmlFor="title">Title</label>
            <input type='text' id="title" name="title" placeholder="Enter a title"/>
            
            <label htmlFor="description">Description</label>
            <input type='text' id="description" name="description" placeholder="Enter a description"/>

            <button type="submit">Post</button>
        </form>
      </div>
    </>
  );
};

export default OpenPosition;
