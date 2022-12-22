import React, { useState } from 'react';
import EmptyElement from '../components/EmptyElement';
import Header from '../components/Header';
import MyActivity from '../components/MyActivity';
import PersonalDetails from '../components/PersonalDetails';

import classes from './MyProfile.module.css';


const MyProfile = (props) => {
  const [details, setDetails] = useState(true);

  const clickHandler = (e) => {
    e.preventDefault();
    setDetails(!details)
  }

    return (
        <>
          <Header />
          <EmptyElement/>
          <div className={classes.topButtons}>
             <div className={details ? classes.active : classes.notactive} ><button onClick={clickHandler}>Personal Details</button></div>
             <div className={details ? classes.notactive : classes.active}><button onClick={clickHandler}>My Activity</button></div>
          </div>
          {details ? <PersonalDetails/> : <MyActivity/>}
        </>
      );
};

export default MyProfile;