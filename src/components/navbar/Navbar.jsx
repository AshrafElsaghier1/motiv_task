import { Col, Container, Dropdown, DropdownButton, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import searchIcon from "/assets/imgs/icons/search.png";
import notification from "/assets/imgs/icons/notification.png";
import avatar from "/assets/imgs/icons/avatar.png";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../../theme/themeContext";
import { MdOutlineNightlight } from "react-icons/md";
import { CiLight } from "react-icons/ci";

import "./style.scss";
const Navbar = () => {
  const { theme, toggleThemeHandler } = useContext(ThemeContext);

  return (
    <nav className=" d-flex align-items-center" id="navbar">
      <Container className="px-md-4">
        <Row>
          <Col className="d-flex align-items-center">
            <InputGroup className="input__container rounded">
              <InputGroup.Text
                id="basic-addon1"
                className=" border-0 bg-transparent"
              >
                <img src={searchIcon} alt="search_icon" width="14" />
              </InputGroup.Text>
              <Form.Control
                placeholder="Search or type"
                aria-describedby="basic-addon1"
                className=" border-0 bg-transparent ps-0"
              />
            </InputGroup>
          </Col>
          <Col className="d-flex justify-content-end">
            <div className="sittings__container d-flex justify-content-end align-items-center gap-4 ">
              <div className="notification__icon d-flex align-items-center gap-3">
                <button
                  className="  theme__mode   btn btn-sm border-0"
                  onClick={toggleThemeHandler}
                >
                  <span>
                    {theme === "dark" ? <CiLight /> : <MdOutlineNightlight />}
                  </span>
                </button>
                <img src={notification} alt="notification_icon" width="14" />
              </div>

              <DropdownButton
                id="dropdown-basic-button"
                title={
                  <img
                    src={avatar}
                    alt="avatar"
                    className="rounded-circle"
                    width=""
                  />
                }
                variant="none"
                className="p-0"
              >
                <Dropdown.Item as="button">
                  <NavLink to="/">Settings </NavLink>
                </Dropdown.Item>
                <Dropdown.Item as="button">
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
