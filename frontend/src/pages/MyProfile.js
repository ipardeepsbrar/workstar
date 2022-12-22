import React from 'react';
import EmptyElement from '../components/EmptyElement';
import Header from '../components/Header';

// import styles from './myProfile.module.css';


const MyProfile = (props) => {

    return (
        <>
          <Header />
          <EmptyElement/>
          <h2>my profile page</h2>
        </>
      );
};

export default MyProfile;