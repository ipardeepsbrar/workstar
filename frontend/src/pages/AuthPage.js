import React, { useState } from "react";
import Header from "../components/Header";
import EmptyElement from "../components//EmptyElement";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import classNames from "classnames";

import classes from "./css/Authenticate.module.css";

const MyForm = ({ values, errors, touched, isSubmitting, handleSubmit}) => {
  const [logIn, setLogIn] = useState(true);

  const modeHandler = (e) => {
    e.preventDefault();
    setLogIn(prevMode => !prevMode)
  }

  const firstAndLastName = (
    <>
      <div className={classes.inputDiv}>
        <label htmlFor="firstName">First Name</label>
        <Field
          id="firstName"
          className={classNames({
            "form-control": true,
            "is-valid": touched.firstName && !errors.firstName,
            "is-invalid": touched.firstName && errors.firstName,
          })}
          type="text"
          name="firstName"
          placeholder="First Name"
          value={values.firstName}
        />
      </div>
      {touched.firstName && errors.firstName && (
        <div className={classes.invalidFeedback}>{errors.firstName}</div>
      )}
      <div className={classes.inputDiv}>
        <label htmlFor="lastName">Last Name</label>
        <Field
          id="lastName"
          className={classNames({
            "form-control": true,
            "is-valid": touched.firstName && !errors.firstName,
            "is-invalid": touched.firstName && errors.firstName,
          })}
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={values.lastName}
        />
      </div>
      {touched.lastName && errors.lastName && (
        <div className={classes.invalidFeedback}>{errors.lastName}</div>
      )}
    </>
  );

  return (
    <Form className={classes.detailsForm}>
      <h1 className={classes.title}>{logIn ? 'Log-In' : 'Sign-Up'}</h1>
      {logIn ? null : firstAndLastName}
      <div className={classes.inputDiv}>
        <label htmlFor="email">Email address</label>
        <Field
          id="email"
          className={classNames({
            "form-control": true,
            "is-valid": touched.email && !errors.email,
            "is-invalid": touched.email && errors.email,
          })}
          type="email"
          name="email"
          placeholder="Email"
          value={values.email}
        />
      </div>
      {touched.email && errors.email && (
        <div className={classes.invalidFeedback}>{errors.email}</div>
      )}
      <div className={classes.inputDiv}>
        <label htmlFor="passowrd">Password</label>
        <Field
          id="password"
          className={classNames({
            "form-control": true,
            "is-valid": touched.password && !errors.password,
            "is-invalid": touched.password && errors.password,
          })}
          type="password"
          name="password"
          placeholder="Password"
          value={values.password}
        />
      </div>
      {touched.password && errors.password && (
        <div className={classes.invalidFeedback}>{errors.password}</div>
      )}
      <button type="submit" className={classes.btns} disabled={isSubmitting}>
        Submit
      </button>
      <button className={classes.btns} type="button" onClick={modeHandler} disabled={isSubmitting}>{logIn ? 'Switch to Sign-Up' : 'Switch to Log-In'}</button>
    </Form>
  );
};

const FormikForm = withFormik({
  mapPropsToValues({ firstName='', lastName='', email, password }) {
    return {
      firstName: firstName || "",
      lastName: lastName || "",
      email: email || "",
      password: password || "",
    };
  },
  validationSchema: Yup.object().shape({
    firstName: Yup.string("First Name not valid").required(
      "First Name is required"
    ),
    lastName: Yup.string("Last Name can only be string"),
    email: Yup.string().email("Email not valid").required("Email is required"),
    password: Yup.string()
      .min(9, "Password must be 9 characters or longer")
      .required("Password is required"),
  }),
  handleSubmit(values, { resetForm, setErrors, setSubmitting, handleSubmit}) {
    handleSubmit();
    console.log('hi');
    console.log(values);
    setTimeout(() => {
      if (values.email === "arnaud@test.io") {
        setErrors({ email: "That email is already taken" });
      } else {
        resetForm();
      }
      setSubmitting(false);
    }, 2000);
  }
})(MyForm);

const AuthPage = (props) => {
  return (
    <>
      <Header />
      <EmptyElement />
      <FormikForm />
    </>
  );
};

export default AuthPage;
