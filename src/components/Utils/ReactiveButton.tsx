import { ReactNode, useCallback, useEffect, useRef, useState } from "react";
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
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current !== null) {
        window.clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const handleClick = useCallback(() => {
    if (state !== "idle") {
      return;
    }

    setState("loading");

    if (timeoutRef.current !== null) {
      window.clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = window.setTimeout(() => {
      setState("success");
      navigate(to);
    }, 2000);
  }, [navigate, state, to]);

  return (
    <ReactiveButtons
      buttonState={state}
      onClick={handleClick}
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
        minWidth: "220px",
        whiteSpace: "nowrap",
      }}
      messageDuration={2000}
    />
  );
}

export default ReactiveButton;