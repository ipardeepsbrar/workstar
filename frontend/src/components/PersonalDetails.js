import React, { useEffect, useState } from "react";
// import { Form, Field, Formik } from "formik";
// import * as Yup from "yup";
import ImagePicker from "./FilePicker";
// import classNames from "classnames";

import classes from "./PersonalDetails.module.css";
import useBackendRequester from "./shared/useBackendRequester";
// import { authActions } from "../store/authSlice";
// import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
// import { sendRequest } from "./shared/useBackendRequester";

const PersonalDetails = (props) => {
  const [edit, setEdit] = useState(false);
  const [changePswd, setChangePswd] = useState(false);
  const { sendRequest } = useBackendRequester();
  // const dispatch = useDispatch();
  // const navigate = useNavigate();
  const token = useSelector((state) => state.auth.token);
  const [details, setDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  useEffect(() => {
    if (token) {
      const details = async function () {
        const userDetails = await sendRequest(
          "http://localhost:8000/api/my-profile/details",
          "GET",
          { Authorization: `Bearer ${token}` }
        );
        setDetails(userDetails);
      };
      details();
    }
  }, [token, sendRequest]);

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

  const changeHandler = (e) => {
    details[e.target.name] = e.target.value;
  };

  const pswdHandler = (e) => {
    e.preventDefault();
    setChangePswd((prevState) => !prevState);
  };

  return (
    <section>
      <ImagePicker profile="profile" />
      <form className={classes.detailsForm} onSubmit={submitHandler}>
        <div className={classes.inputDiv}>
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            disabled={edit ? false : true}
            value={details.firstName}
            onChange={changeHandler}
          />
        </div>

        <div className={classes.inputDiv}>
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            disabled={edit ? false : true}
            value={details.lastName}
          />
        </div>
        <div className={classes.inputDiv}>
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            name="email"
            disabled
            value={details.email}
          />
        </div>
        {edit ? (
          <button type="submit">Save</button>
        ) : (
          <button onClick={editHandler}>Edit</button>
        )}
      </form>

      <form className={classes.detailsForm}>
        {changePswd && (
          <>
            <div className={classes.inputDiv}>
              <label htmlFor="cpswd">Current Password:</label>
              <input
                type="password"
                id="cpswd"
                name="cpassword"
                disabled={edit ? false : true}
              />
            </div>

            <div className={classes.inputDiv}>
              <label htmlFor="npswd">New Password:</label>
              <input
                type="password"
                id="npswd"
                name="npassword"
                disabled={edit ? false : true}
                value=''
              />
            </div>
          </>
        )}
        <div>
          {changePswd ? <><button type="submit">Save</button><button type="button" onClick={pswdHandler}>Cancel</button></> :
          <button type="button" onClick={pswdHandler}>
            Change Password
          </button>}
        </div>
      </form>
    </section>
  );
};

export default PersonalDetails;


  /* <Formik
      initialValues={{
        firstName: details.firstName,
        lastName: details.lastName,
        email: details.email,
        password: "",
      }}
      // validation schema
      validationSchema={Yup.object().shape({
        firstName: Yup.string("First Name not valid")
          .min(2, "Too Short!")
          .max(20, "Too Long!")
          .required("First Name is required"),
        lastName: Yup.string("Last Name not valid")
          .min(2, "Too Short!")
          .max(20, "Too Long!")
          .required("Last Name is required"),
        email: Yup.string()
          .email("Email not valid")
          .disabled,
        password: Yup.string()
          .min(8, "Password must be 8 characters or longer")
          .required("Password is required"),
      })}
      // submit handler
      onSubmit={async (values, actions) => {
        console.log(details);
        const {firstName, lastName, password} = values
        const body = JSON.stringify({firstName, lastName, password});
        const data = await sendRequest(
          // update route
          // `http://localhost:8000/api/auth/register`,
          "PATCH",
          { "Content-Type": "application/json" },
          body
        );
        // actions.resetForm();
      }}
    >
      // FORM BEGINS HERE 

      {(props) => (
        <Form className={classes.detailsForm}>
          <div className={classes.inputDiv}>
            <label htmlFor="firstName">First Name</label>
            <Field
              id="firstName"
              className={classNames({
                "form-control": true,
                "is-valid": props.touched.firstName && !props.errors.firstName,
                "is-invalid": props.touched.firstName && props.errors.firstName,
              })}
              type="text"
              name="firstName"
              placeholder={props.values.firstName}
              value={props.values.firstName}
              onChange={props.handleChange}
            />
          </div>
          {props.touched.firstName && props.errors.firstName && (
            <div className={classes.invalidFeedback}>
              {props.errors.firstName}
            </div>
          )}
          <div className={classes.inputDiv}>
            <label htmlFor="lastName">Last Name</label>
            <Field
              id="lastName"
              className={classNames({
                "form-control": true,
                "is-valid": props.touched.firstName && !props.errors.firstName,
                "is-invalid": props.touched.firstName && props.errors.firstName,
              })}
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={props.values.lastName}
              onChange={props.handleChange}
            />
          </div>
          {props.touched.lastName && props.errors.lastName && (
            <div className={classes.invalidFeedback}>
              {props.errors.lastName}
            </div>
          )}
          <div className={classes.inputDiv}>
            <label htmlFor="email">Email address</label>
            <Field
              id="email"
              className={classNames({
                "form-control": true,
                "is-valid": props.touched.email && !props.errors.email,
                "is-invalid": props.touched.email && props.errors.email,
              })}
              type="email"
              name="email"
              placeholder="Email"
              value={props.values.email}
              onChange={props.handleChange}
              disabled
            />
          </div>
          {props.touched.email && props.errors.email && (
            <div className={classes.invalidFeedback}>{props.errors.email}</div>
          )}
          <div className={classes.inputDiv}>
            <label htmlFor="passowrd">Password</label>
            <Field
              id="password"
              className={classNames({
                "form-control": true,
                "is-valid": props.touched.password && !props.errors.password,
                "is-invalid": props.touched.password && props.errors.password,
              })}
              type="password"
              name="password"
              placeholder="Password"
              value={props.values.password}
              onChange={props.handleChange}
            />
          </div>
          {props.touched.password && props.errors.password && (
            <div className={classes.invalidFeedback}>
              {props.errors.password}
            </div>
          )}
          <button
            type="submit"
            className={classes.btns}
            disabled={props.isSubmitting}
          >
            Submit
          </button>
        </Form>
      )}
    </Formik> */