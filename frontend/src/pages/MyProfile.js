import React from 'react';
import { Route, Routes, Navigate, NavLink } from 'react-router-dom';
import EmptyElement from '../components/EmptyElement';
import Header from '../components/Header';
import MyActivity from '../components/MyActivity';
import PersonalDetails from '../components/PersonalDetails';

import classes from './css/MyProfile.module.css';


const MyProfile = (props) => {

    return (
        <>
          <Header />
          <EmptyElement/>
          <div className={classes.topButtons}>
             <div ><NavLink className={navData => navData.isActive ? classes.active: classes.notactive } to='details'>Personal Details</NavLink></div>
             <div ><NavLink className={navData => navData.isActive ? classes.active: classes.notactive} to='activity'>My Activity</NavLink></div>
          </div>
          <Routes>
            <Route path='/' element={<Navigate to='details'/>}/>
            <Route path='details' element={<PersonalDetails/>}/>
            <Route path='activity' element={<MyActivity/>}/>
          </Routes>
        </>
      );
};

export default MyProfile;