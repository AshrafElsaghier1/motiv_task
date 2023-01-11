import { Container, ListGroup } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/imgs/logo.png";
import Links from "./Links";
import { FiSettings } from "react-icons/fi";
import { SlLogout } from "react-icons/sl";

import "./style.scss";

const Sidebar = () => {
  return (
    <div id="sidebar" className="pb-2">
      <Container className="h-100 px-3">
        <div className="sidebar__inner-content d-flex justify-content-between flex-column h-100 ">
          <div className="sidebar__top">
            <div className="logo">
              <Link to="/" className="d-flex gap-2 align-items-center">
                <div className="d-flex align-items-center">
                  <img src={logo} alt="logo" />
                </div>
                <h2 className="mb-0"> Motiv.</h2>
              </Link>
            </div>
            <div className="sidebar__items pe-3 mt-3">
              <Links />
            </div>
          </div>
          <div className="sidebar__bottom  pe-3 ">
            <ListGroup id="sidebar__ul">
              <ListGroup.Item
                as="button"
                className="sidebar__li w-100 d-flex align-items-center border-0 rounded  p-0 mb-2"
              >
                <NavLink
                  to="/sittings"
                  className="sidebar__link w-100 d-flex align-items-center gap-3 rounded p-2 "
                >
                  <span>
                    <FiSettings />
                  </span>
                  <span> Sittings </span>
                </NavLink>
              </ListGroup.Item>
              <ListGroup.Item
                as="button"
                className="sidebar__li w-100 d-flex align-items-center border-0 rounded  p-0 mb-2"
              >
                <NavLink
                  to="/logout"
                  className="sidebar__link w-100 d-flex align-items-center gap-3 rounded p-2  "
                >
                  <span> {<SlLogout />} </span>
                  <span> Log out</span>
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
