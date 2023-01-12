import React from "react";
import { Form, Field, Formik } from "formik";
import * as Yup from "yup";
import classNames from "classnames";
import { useDispatch } from "react-redux";

import classes from "./authSubPages.module.css";
import useBackendRequester from "../shared/useBackendRequester";
import { authActions } from "../../store/authSlice";
import { Link, useNavigate } from "react-router-dom";

const RegisterPage = (props) => {
  const { sendRequest } = useBackendRequester();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
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
          .required("Email is required"),
        password: Yup.string()
          .min(8, "Password must be 8 characters or longer")
          .required("Password is required"),
      })}
      // submit handler
      onSubmit={async (values, actions) => {
        const body = JSON.stringify(values);
        const data = await sendRequest(
          `http://52.91.124.129:8000/api/auth/register`,
          "PUT",
          { "Content-Type": "application/json" },
          body
        );
        actions.resetForm();
        dispatch(authActions.register({token: data.token}));
        navigate("/");
      }}
    >
      {/* FORM BEGINS HERE */}

      {(props) => (
        <Form className={classes.detailsForm}>
          <h1 className={classes.title}>{"Register"}</h1>
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
          <button
            className={classes.btns}
            type="button"
            disabled={props.isSubmitting}
          >
            <Link to="/authenticate/login">Switch to Log In</Link>
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default RegisterPage;
