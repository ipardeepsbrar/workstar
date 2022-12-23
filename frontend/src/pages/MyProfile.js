import React from 'react';
import EmptyElement from '../components/EmptyElement';
import Header from '../components/Header';
import PersonalDetails from '../components/PersonalDetails';

import classes from './css/MyProfile.module.css';


const MyProfile = (props) => {

    return (
        <>
          <Header />
          <EmptyElement/>
          <div className={classes.topButtons}>
             <div><button>Personal Details</button></div>
             <div><button>My Activity</button></div>
          </div>
          <PersonalDetails/>
          {/* <MyActivity/> */}
        </>
      );
};

export default MyProfile;