import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { alertActions } from "../store/alertSlice";

const ButtonLogic = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loggedIn = useSelector((state) => state.auth.loggedIn);
  const token = useSelector((state) => state.auth.token);
  const location = props.location;
  let buttons;

  const btnHandler = (e) => {
    if (!token) {
      e.preventDefault();
      dispatch(alertActions.setAlert("Please Log-in to continue..."));
      return navigate("/authenticate/login");
    }
    // navigate('open-position')
  }

  if (location) {
    if (location.startsWith("/candidates")) {
      buttons = null;
    } else {
      if (props.openedBy === "me") {
        buttons = (
          <button>
            <Link className="removeBtnStyle" to={`/candidates/${props.id}`}>
              Candidates
            </Link>
          </button>
        );
      } else {
        buttons = (
          <>
            <button onClick={btnHandler}>Save</button>
            <button onClick={btnHandler}>
              <Link className="removeBtnStyle" to={`/apply/${props.jobId}`}>
                Apply
              </Link>
            </button>
          </>
        );
      }
    }
  } else {
    buttons = null;
  }

  return buttons;
};

export default ButtonLogic;
