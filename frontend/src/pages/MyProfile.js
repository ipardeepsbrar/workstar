import React, { useState } from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import EmptyElement from '../components/EmptyElement';
import Header from '../components/Header';
import MyActivity from '../components/MyActivity';
import PersonalDetails from '../components/PersonalDetails';

import classes from './css/MyProfile.module.css';


const MyProfile = (props) => {
  const [details, setDetails] = useState(true);

  const detailsHandler = (e) => {
    e.preventDefault();
    setDetails(true)
  }
  const activityHandler = (e) => {
    e.preventDefault();
    setDetails(false)
  }

    return (
        <>
          <Header />
          <EmptyElement/>
          <div className={classes.topButtons}>
             <div className={details ? classes.active : classes.notactive} ><button onClick={detailsHandler}><Link to='details'>Personal Details</Link></button></div>
             <div className={details ? classes.notactive : classes.active}><button onClick={activityHandler}><Link to='activity'>My Activity</Link></button></div>
          </div>
          <Routes>
            <Route path='details' element={<PersonalDetails/>}/>
            <Route path='activity' element={<MyActivity/>}/>
          </Routes>
        </>
      );
};

export default MyProfile;