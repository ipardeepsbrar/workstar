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

  const applyHandler = (e) => {
    if (!token) {
      e.preventDefault();
      dispatch(alertActions.setAlert("Please Log-in to continue..."));
      return navigate("/authenticate/login");
    }
    navigate(`/apply/${props.jobId}`)
  }
  const saveHandler = (e) => {
    // if (!token) {
    //   e.preventDefault();
    //   dispatch(alertActions.setAlert("Please Log-in to continue..."));
    //   return navigate("/authenticate/login");
    // }
    // navigate(`/apply/${props.jobId}`)
  }

  // if (location) {
  //   if (location.startsWith("/candidates")) {
  //     buttons = null;
  //   } else {
  //     if (location.startsWith("/provide-jobs" || "/my-profile")) {
  //       buttons = (
  //         <button>
  //           <Link className="removeBtnStyle" to={`/candidates/${props.id}`}>
  //             Candidates
  //           </Link>
  //         </button>
  //       );
  //     } else {
  //       buttons = (
  //         <>
  //           <button onClick={saveHandler}>Save</button>
  //           <button onClick={applyHandler}>
  //             {/* <Link className="removeBtnStyle" to={`/apply/${props.jobId}`}> */}
  //               Apply
  //             {/* </Link> */}
  //           </button>
  //         </>
  //       );
  //     }
  //   }
  // } else {
  //   buttons = null;
  // }

  if (location) {
    if (location.startsWith("/candidates")) {
      buttons = null;
    } 
    else if (location.startsWith("/provide-jobs") || location.startsWith("/my-profile")) {
        buttons = (
          <button>
            <Link className="removeBtnStyle" to={`/candidates/${props.id}`}>
              Candidates
            </Link>
          </button>
        );
      } 
    else {
        buttons = (
          <>
            <button onClick={saveHandler}>Save</button>
            <button onClick={applyHandler}>
              {/* <Link className="removeBtnStyle" to={`/apply/${props.jobId}`}> */}
                Apply
              {/* </Link> */}
            </button>
          </>
        );
      }
    }
  // } else {
  //   buttons = null;
  // }

  return buttons;
};

export default ButtonLogic;
