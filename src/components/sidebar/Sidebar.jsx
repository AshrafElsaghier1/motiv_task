import { Container, ListGroup, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import logo from "/assets/imgs/logo.png";
import Links from "./Links";
import { FiSettings } from "react-icons/fi";
import { SlLogout } from "react-icons/sl";

import "./style.scss";

const Sidebar = () => {
  return (
    <div id="sidebar" className="pb-2">
      <Container className="h-100  px-0 px-md-3">
        <div className="sidebar__inner-content d-flex justify-content-between flex-column  w-100">
          <div className="sidebar__top">
            <div className="logo justify-content-center justify-content-md-start ">
              <Link to="/" className="d-flex gap-2 align-items-center ">
                <div className="d-flex align-items-center ">
                  <img src={logo} alt="logo" />
                </div>
                <h2 className="mb-0 d-none d-md-block"> Motiv.</h2>
              </Link>
            </div>
            <div className="sidebar__items pe-md-3 d-flex d-md-block justify-content-center mt-1 mt-md-3">
              <Links />
            </div>
          </div>
          <div className="sidebar__bottom pe-0 pe-md-3 d-flex d-md-block justify-content-center">
            <ListGroup id="sidebar__ul">
              <ListGroup.Item
                as="button"
                className="sidebar__li w-100 d-flex align-items-center border-0 rounded  p-0 mb-2"
              >
                <NavLink
                  to="/sittings"
                  className="sidebar__link w-100 d-flex align-items-center gap-3 rounded p-2 "
                  data-tooltip="Sittings"
                >
                  <span>
                    <FiSettings />
                  </span>
                  <span className="d-none d-md-block">Sittings </span>
                </NavLink>
              </ListGroup.Item>
              <ListGroup.Item
                as="button"
                className="sidebar__li w-100 d-flex align-items-center border-0   p-0 mb-2"
              >
                <NavLink
                  to="/logout"
                  className="sidebar__link w-100 d-flex align-items-center gap-3  p-2  "
                  data-tooltip="Log out"
                >
                  <span> {<SlLogout />} </span>
                  <span className="d-none d-md-block">Log out</span>
                </NavLink>
              </ListGroup.Item>
            </ListGroup>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Sidebar;
