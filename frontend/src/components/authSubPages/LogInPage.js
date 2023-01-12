import React from "react";
import { Form, Field, Formik } from "formik";
import * as Yup from "yup";
import classNames from "classnames";

import classes from "./authSubPages.module.css";
import useBackendRequester from "../shared/useBackendRequester";
import { useDispatch } from "react-redux";
import { authActions } from "../../store/authSlice";
import { Link, useNavigate } from "react-router-dom";
import { alertActions } from "../../store/alertSlice";

const LogInPage = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { sendRequest } = useBackendRequester();

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      // validation schema
      validationSchema={Yup.object().shape({
        email: Yup.string()
          .email("Email not valid")
          .required("Email is required"),
        password: Yup.string().required("Password is required"),
      })}
      // submit handler
      onSubmit={async (values, actions) => {
        const body = JSON.stringify(values);
        try {
          const data = await sendRequest(
            `http://52.91.124.129:8000/api/auth/login`,
            "POST",
            { "Content-Type": "application/json" },
            body
          );
          //   console.log(data);
          actions.resetForm();
          dispatch(authActions.logIn({token: data.token}));
          navigate("/");
        } catch (error) {
          console.log("in login catch");
          dispatch(alertActions.setAlert(error.message));
          //   actions.resetForm();
          //   actions.setSubmitting(false);
        }
      }}
    >
      {/* FORM BEGINS HERE */}

      {(props) => (
        <Form className={classes.detailsForm}>
          <h1 className={classes.title}>{"Log In"}</h1>
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
            <Link to="/authenticate/register">Switch to Register</Link>
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default LogInPage;
