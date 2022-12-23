import React from "react";
import { Link } from "react-router-dom";

const ButtonLogic = (props) => {
  const location = props.location;
  let buttons;

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
            <button>Save</button>
            <button>
              <Link className="removeBtnStyle" to={`/apply/${props.id}`}>
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
