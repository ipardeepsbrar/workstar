import React, { useState } from "react";

import classes from "./PersonalDetails.module.css";

const PersonalDetails = (props) => {
  const [edit, setEdit] = useState(false);

  const submitHandler = () => {
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
      <div className={classes.imageDiv}>
        <img src="" alt="" />
      </div>
      {edit && (
        <div className={classes.imageEditBtn}>
          <input type="file" name="image" />
        </div>
      )}

      <form className={classes.detailsForm} onSubmit={submitHandler}>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" />
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <input type="text" id="email" name="email" />
        </div>

        <div>
          <label htmlFor="pswd">Password:</label>
          <input type="text" id="pswd" name="password" />
        </div>

        <div>
          <label htmlFor="tel">Telephone:</label>
          <input
            type="tel"
            id="tel"
            name="phone"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          />
        </div>
        <div>
          <label htmlFor="address">Address:</label>
          <input type="text" id="address" name="address" />
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
