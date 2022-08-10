import React, { useState } from "react";
import ReactiveButtons from "reactive-button";
import { useNavigate } from "react-router-dom";
import { FaCircleNotch, FaCheckCircle, FaTimesCircle } from "react-icons/fa";

function ReactiveButton(props) {
const [state, setState] = useState('idle');  
const navigate = useNavigate()

  return (
    <ReactiveButtons
      buttonState={state}
      onClick={() => {
        setState("loading");
        setTimeout(() => {
          setState("success");
          navigate(props.to);
        }, 2000);
      }}
      color={'primary'}
      idleText={props.idleText}
      loadingText={
        <>
          <FaCircleNotch spin/> Loading
        </>
      }
      successText={
        <>
          <FaCheckCircle /> Success
        </>
      }
      errorText={
        <>
          <FaTimesCircle /> Error
        </>
      }
      type={"button"}
      className={props.cName}
      style={{
        borderRadius: "5px",
      }}
      messageDuration={2000}
    />
  );
}

export default ReactiveButton;
