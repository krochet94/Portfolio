import { ReactNode, useState } from "react";
import ReactiveButtons from "reactive-button";
import { FaCheckCircle, FaCircleNotch, FaTimesCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

interface ReactiveButtonProps {
  idleText: ReactNode;
  to: string;
  cName?: string;
}

type ButtonState = "idle" | "loading" | "success" | "error";

function ReactiveButton({ idleText, to, cName }: ReactiveButtonProps) {
  const [state, setState] = useState<ButtonState>("idle");
  const navigate = useNavigate();

  return (
    <ReactiveButtons
      buttonState={state}
      onClick={() => {
        setState("loading");
        setTimeout(() => {
          setState("success");
          navigate(to);
        }, 2000);
      }}
      color="primary"
      idleText={idleText}
      loadingText={
        <>
          <FaCircleNotch /> Loading
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
      type="button"
      className={cName}
      style={{
        borderRadius: "5px",
      }}
      messageDuration={2000}
    />
  );
}

export default ReactiveButton;