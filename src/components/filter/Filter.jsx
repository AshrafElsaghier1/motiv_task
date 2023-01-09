import { Col, Form, Row } from "react-bootstrap";
import { BsUiRadiosGrid } from "react-icons/bs";
import { RxMixerHorizontal } from "react-icons/rx";
import "./filter.scss";
const Filter = () => {
  return (
    <div id="filter__container">
      <Row className="d-flex align-items-stretch ">
        <Col>
          <div className="d-flex align-items-center gap-3  h-100">
            <Form.Select className="select__input border-0 ps-3">
              <option value="New">New</option>
              <option value="low price">low price</option>
              <option value="high price">high price</option>
            </Form.Select>
            <Form.Select className="select__input border-0 ps-3 ">
              <option value="Toyota">Toyota</option>
              <option value="Hyundai">Hyundai</option>
              <option value="Porsche">Porsche</option>
            </Form.Select>
          </div>
        </Col>
        <Col className="d-flex justify-content-end gap-3 ">
          <button className="btn filter__btn border-0 rounded-circle d-flex align-items-center ">
            <BsUiRadiosGrid />
          </button>
          <button className="btn filter__btn active border-0 rounded-circle d-flex align-items-center">
            <RxMixerHorizontal />
          </button>
        </Col>
      </Row>
    </div>
  );
};

export default Filter;
