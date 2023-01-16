import { Col } from "react-bootstrap";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { BsPatchPlus } from "react-icons/bs";
import { CiRepeat } from "react-icons/ci";
import vector from "../../assets/imgs/icons/Vector.png";
import "./style.scss";
const RecommendItem = ({ bgColor, title, name, price, imgUrl, distance }) => {
  return (
    <Col className="mb-3">
      <div
        className="product__recommended-container  "
        style={{ background: bgColor }}
      >
        <div className="d-flex align-items-center gap-2 mb-2 product__inner-top ">
          <img src={vector} alt="icon" />
          <h4 className="mb-0"> {title} </h4>
        </div>

        <div className="product__inner-center mb-2 mt-2">
          <img
            src={imgUrl}
            alt="car"
            draggable={false}
            className="mx-auto d-block"
          />
        </div>
        <div className="product__inner-bottom">
          <h3 className="mb-2"> {name} </h3>
          <div className="d-flex justify-content-between align-items-center">
            <div className="left d-flex align-items-center gap-3 icons__container ">
              <span>
                <b>
                  <CiRepeat />
                </b>
              </span>
              <span> {distance} </span>
              <span>
                <BsPatchPlus />
              </span>
              <span>
                <AiOutlineThunderbolt />
              </span>
            </div>
            <div className="right">
              <b className="mb-0"> ${price}/h </b>
            </div>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default RecommendItem;
