import { Col, Container, Dropdown, DropdownButton, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import searchIcon from "../../assets/imgs/icons/search.png";
import notification from "../../assets/imgs/icons/notification.png";
import avatar from "../../assets/imgs/icons/avatar.png";
import "./navbar.scss";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="bg-white d-flex align-items-center" id="navbar">
      <Container>
        <Row>
          <Col className="d-flex align-items-center">
            <InputGroup className="input__container rounded">
              <InputGroup.Text
                id="basic-addon1"
                className=" border-0 bg-transparent"
              >
                <img src={searchIcon} alt="search_icon" width="15" />
              </InputGroup.Text>
              <Form.Control
                placeholder="Search or type"
                aria-describedby="basic-addon1"
                className=" border-0 bg-transparent ps-0"
              />
            </InputGroup>
          </Col>
          <Col>
            <div className="sittings__container d-flex justify-content-end align-items-center gap-4 ">
              <div className="notification__icon">
                <img src={notification} alt="notification_icon" />
              </div>
              <DropdownButton
                id="dropdown-basic-button"
                title={
                  <img src={avatar} alt="avatar" className="rounded-circle" />
                }
                variant="none"
                className="p-0"
              >
                <Dropdown.Item>
                  <NavLink to="/">Settings </NavLink>
                </Dropdown.Item>
                <Dropdown.Item>
                  <NavLink to="/">Log out </NavLink>
                </Dropdown.Item>
              </DropdownButton>
            </div>
          </Col>
        </Row>
      </Container>
    </nav>
  );
};

export default Navbar;
