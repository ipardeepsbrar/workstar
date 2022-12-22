import React from "react";
import { Link } from "react-router-dom";
import EmptyElement from "../components/EmptyElement";
import Header from "../components/Header";
import OpenPosition from "./OpenPosition";

// import styles from './provideJobs.module.css';

const ProvideJobs = (props) => {
  return (
    <>
      <Header />
      <EmptyElement/>
      <Link to='/open-position' element={<OpenPosition/>}/>
      <OpendedJobList/>
    </>
  );
};

export default ProvideJobs;
