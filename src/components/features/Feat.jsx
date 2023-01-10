import { Col } from "react-bootstrap";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import "./features.scss";
const Feat = ({ title, text, precentage, color, icon, bgColor }) => {
  return (
    <Col className="mb-3">
      <div className="feat__container" id="feat__container">
        <div className="feat__inner-top d">
          <span
            className="icon__container d-flex align-items-center justify-content-center mx-auto mb-3 rounded-circle"
            style={{ color, backgroundColor: bgColor }}
          >
            {icon}
          </span>
          <h3 className="mb-4"> {title} </h3>
        </div>
        <div className="feat__inner-bottom mb-3">
          <CircularProgressbar
            strokeWidth="9"
            value={precentage}
            text={text}
            circleRatio={0.75}
            rounded={true}
            styles={buildStyles({
              rotation: 1 / 2 + 1 / 8,
              strokeLinecap: "butt",
              trailColor: "#eee",
              pathColor: color,
            })}
          />
        </div>
      </div>
    </Col>
  );
};

export default Feat;
