import React from "react";
import "./EmailRow.css";
import { Checkbox, IconButton } from "@material-ui/core";
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined";
import LabelImportantOutlinedIcon from "@material-ui/icons/LabelImportantOutlined";
import { useDispatch } from "react-redux";
import { SELECTED_MAIL } from '../../../actionTypes'
import { useHistory } from 'react-router-dom'

function EmailRow({ id, title, subject, description, time, sender }) {
  const dispatch = useDispatch();
  const history = useHistory()

  const openMail = () => {
    dispatch({
      type: SELECTED_MAIL,
      payload: { id, title, subject, description, time, sender },
    });

    history.push(`/${id}`)
  };

  return (
    <div onClick={openMail} className="emailRow">
      <div className="emailRow_options">
        <Checkbox />
        <IconButton>
          <StarBorderOutlinedIcon />
        </IconButton>
        <IconButton>
          <LabelImportantOutlinedIcon />
        </IconButton>
      </div>
      <div className="emailRow_title"> {title} </div>
      <div className="emailRow_message">
        <h4>{subject} </h4>
        <span className="emailRow_description">- {description}</span>
      </div>
      <p className="emailRow_time"> {time} </p>
    </div>
  );
}

export default EmailRow;
