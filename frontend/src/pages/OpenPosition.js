import { Field, Form, Formik, useField } from "formik";
import React from "react";
// import { Link, useNavigate } from "react-router-dom";
import EmptyElement from "../components/EmptyElement";
import Header from "../components/Header";
import useBackendRequester from "../components/shared/useBackendRequester";
import classes from "./css/OpenPosition.module.css";
import classNames from "classnames";
import * as Yup from 'yup';
import { useDispatch, useSelector } from "react-redux";
import { alertActions } from "../store/alertSlice";

const MyTextArea = ({label, ...props}) => {
  const [field] = useField(props);
  return (
      <>
          <label htmlFor={props.id || props.name}>{label}</label>
          <textarea className="text-area" {...field} {...props} />
      </>
  );
};

const OpenPosition = (props) => {
  const {sendRequest} = useBackendRequester();
  const token = useSelector((state) => state.auth.token);
  // const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <>
      <Header />
      <EmptyElement />
      <Formik
      initialValues={{
        title: "",
        description: "",
      }}
      // validation schema
      validationSchema={Yup.object().shape({
        title: Yup.string()
          .min(3)
          .required("Title is required"),
        description: Yup.string().min(15).required("Description is required"),
      })}

      // submit handler
      onSubmit={async (values, actions) => {
        const body = JSON.stringify(values);
        try {
          const successMsg = await sendRequest(
            `http://52.91.124.129:8000/api/provide-jobs/opened-positions/open-position`,
            "PUT",
            { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
            body
          );

          actions.resetForm();
          dispatch(alertActions.setAlert(successMsg.msg));
          // navigate("../");
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
        <div className={classes.openPositionForm}>
        <Form>
          <h1>{"Open a Position"}</h1>
          <div>
            <label htmlFor="title">Title</label>
            <Field
              id="title"
              className={classNames({
                "form-control": true,
                "is-valid": props.touched.title && !props.errors.title,
                "is-invalid": props.touched.title && props.errors.title,
              })}
              type="text"
              name="title"
              placeholder="Title"
              value={props.values.title}
              onChange={props.handleChange}
            />
          </div>
          {props.touched.title && props.errors.title && (
            <div className={classes.invalidFeedback}>{props.errors.title}</div>
          )}
          <div>
            <MyTextArea
            className={classNames({
              "form-control": true,
              "is-valid": props.touched.description && !props.errors.description,
              "is-invalid": props.touched.description && props.errors.description,
            })}
            label="Description"
            name="description"
            rows="6"
            placeholder="Enter job description here..."
            value= {props.values.description}
            onChange={props.handleChange}
          />
          </div>
          {props.touched.description && props.errors.description && (
            <div className={classes.invalidFeedback}>
              {props.errors.description}
            </div>
          )}
          <button
            type="submit"
            className={classes.btns}
            disabled={props.isSubmitting}
          >
            Post
          </button>
        </Form>
        </div>
      )}
    </Formik>
    </>
  );
};

export default OpenPosition;