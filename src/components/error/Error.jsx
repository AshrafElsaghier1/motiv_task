import { useNavigate } from "react-router-dom";
import "./style.scss";
const Error = () => {
  const navigator = useNavigate();
  const navigationHandler = () => navigator("/dashboard");
  return (
    <div className="d-flex align-items-center justify-content-center flex-column gap-5  pt-5">
      <h1 className="alert alert-danger h1"> Page Not Found ! </h1>
      <button onClick={navigationHandler} className="btn" id="error__btn">
        Back To Dashboard
      </button>
    </div>
  );
};

export default Error;
