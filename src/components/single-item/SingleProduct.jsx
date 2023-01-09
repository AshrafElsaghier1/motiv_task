import { Col } from "react-bootstrap";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import { CiRepeat } from "react-icons/ci";
import car1 from "../../assets/imgs/products/car-1.png";
import "./singleProduct.scss";
const SingleProduct = ({
  name,
  price,
  imgUrl,
  transmission,
  customers,
  type,
}) => {
  return (
    <Col className="col mb-4">
      <div
        className="product__container bg-white p-3 rounded"
        id="product__container"
      >
        <div className="product__inner-top d-flex justify-content-between align-items-start mb-3">
          <div>
            <h4> {name} </h4>
            <h6> {type}</h6>
          </div>
          <button className="icon__container btn btn-0 border-0 bg-transparent btn-transparent d-flex mt-1 p-0">
            <BsHeart />
            <BsHeartFill />
          </button>
        </div>
        <div className="product__inner-center mb-4">
          <img
            src={imgUrl}
            alt="car"
            draggable={false}
            width="75%"
            className="mx-auto d-block"
          />
        </div>
        <div className="product__inner-bottom d-flex align-items-center justify-content-between">
          <div className="d-flex gap-3 align-items-center">
            <div className="d-flex gap-1 align-items-center">
              <span className="icon__container">
                <AiOutlineUser />
              </span>
              <span className="clients__count"> {customers} </span>
            </div>
            <div className="d-flex gap-1 align-items-center">
              <span className=" icon__container">
                <CiRepeat />
              </span>
              <span className="transmission text-capitalize">
                {transmission}
              </span>
            </div>
          </div>
          <div className="inner__price ">
            <span>
              <b>${price}</b>/d
            </span>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default SingleProduct;
