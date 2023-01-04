import React, { useState } from "react";
import Header from "../components/Header";
import EmptyElement from "../components//EmptyElement";
import { Form, Field, Formik, useFormikContext } from "formik";
import * as Yup from "yup";
import classNames from "classnames";

import classes from "./css/Authenticate.module.css";

const AuthPage = (props) => {
  const [logIn, setLogIn] = useState(true);

  let validationModel = Yup.object().shape({
    email: Yup.string().email("Email not valid").required("Email is required"),
    password: Yup.string()
      .min(9, "Password must be 9 characters or longer")
      .required("Password is required"),
  });

  if (!logIn) {
    validationModel = Yup.object().shape({
      firstName: Yup.string("First Name not valid")
        .min(2, "Too Short!")
        .max(50, "Too Long!")
        .required("First Name is required"),
      lastName: Yup.string("Last Name not valid")
        .min(2, "Too Short!")
        .max(50, "Too Long!")
        .required("Last Name is required"),
      email: Yup.string()
        .email("Email not valid")
        .required("Email is required"),
      password: Yup.string()
        .min(9, "Password must be 9 characters or longer")
        .required("Password is required"),
    });
  }

  const modeHandler = (e) => {
    e.preventDefault();
    setLogIn((prevMode) => !prevMode);
  };

  return (
    <>
      <Header />
      <EmptyElement />
      <Formik
        initialValues={
          logIn
            ? {
                email: "",
                password: "",
              }
            : {
                firstName: "",
                lastName: "",
                email: "",
                password: "",
              }
        }
        validationSchema={validationModel}
        onSubmit={(values, actions) => {
          console.log("in submit form");
          console.log(values);
          actions.resetForm();
          actions.setSubmitting(false);
        }}
      >
        {(props) => (
          <Form className={classes.detailsForm}>
            <h1 className={classes.title}>{logIn ? "Log-In" : "Sign-Up"}</h1>
            {logIn ? null : (
              <>
                <div className={classes.inputDiv}>
                  <label htmlFor="firstName">First Name</label>
                  <Field
                    id="firstName"
                    className={classNames({
                      "form-control": true,
                      "is-valid":
                        props.touched.firstName && !props.errors.firstName,
                      "is-invalid":
                        props.touched.firstName && props.errors.firstName,
                    })}
                    type="text"
                    name="firstName"
                    placeholder="First Name"
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
                      "is-valid":
                        props.touched.firstName && !props.errors.firstName,
                      "is-invalid":
                        props.touched.firstName && props.errors.firstName,
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
              </>
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
              />
            </div>
            {props.touched.email && props.errors.email && (
              <div className={classes.invalidFeedback}>
                {props.errors.email}
              </div>
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
            <button
              className={classes.btns}
              type="button"
              onClick={modeHandler}
              disabled={props.isSubmitting}
            >
              {logIn ? "Switch to Sign-Up" : "Switch to Log-In"}
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default AuthPage;
