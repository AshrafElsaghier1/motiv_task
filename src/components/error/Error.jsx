import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./error.scss";
const Error = () => {
  const navigator = useNavigate();
  const navigationHandler = () => navigator("/dashboard");
  return (
    <div className="d-flex align-items-center justify-content-center flex-column gap-5  pt-5">
      <h1 className="alert alert-danger h1"> Page Not Found ! </h1>
      <Button variant="none" onClick={navigationHandler} className="error__btn">
        Back To Dashboard
      </Button>
    </div>
  );
};

export default Error;
