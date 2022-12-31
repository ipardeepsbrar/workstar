import React, { useState } from "react";
import ImagePicker from "./ImagePicker";

import classes from "./PersonalDetails.module.css";

const PersonalDetails = (props) => {
  const [edit, setEdit] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    // some code to save details onto database
    setEdit(false);
  };

  const editHandler = (e) => {
    e.preventDefault();
    // some code to enable editing
    setEdit(true);
  };

  return (
    <section>
      <form className={classes.detailsForm} onSubmit={submitHandler}>
        <ImagePicker edit={edit}/>

        <div className={classes.inputDiv}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" disabled={edit ? false : true} />
        </div>

        <div className={classes.inputDiv}>
          <label htmlFor="email">Email:</label>
          <input type="text" id="email" name="email" disabled={edit ? false : true}/>
        </div>

        <div className={classes.inputDiv}>
          <label htmlFor="pswd">Password:</label>
          <input type="password" id="pswd" name="password" disabled={edit ? false : true}/>
        </div>

        <div className={classes.inputDiv}>
          <label htmlFor="tel">Telephone:</label>
          <input
            type="tel"
            id="tel"
            name="phone"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            disabled={edit ? false : true}
          />
        </div>
        <div className={classes.inputDiv}>
          <label htmlFor="address">Address:</label>
          <input type="text" id="address" name="address" disabled={edit ? false : true}/>
        </div>
        {edit ? (
          <button type="submit">Save</button>
        ) : (
          <button onClick={editHandler}>Edit</button>
        )}
      </form>
    </section>
  );
};

export default PersonalDetails;
