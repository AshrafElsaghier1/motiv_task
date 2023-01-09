import { Container, ListGroup } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/imgs/logo.png";
import Links from "./Links";
import Stack from "react-bootstrap/Stack";
import cog from "../../assets/imgs/icons/cog.png";
import logout from "../../assets/imgs/icons/logout.png";
import "./sidebar.scss";
const Sidebar = () => {
  return (
    <div id="sidebar">
      <Container className="h-100">
        <div className="sidebar__inner-content d-flex justify-content-between flex-column h-100 ">
          <div className="sidebar__top">
            <div className="logo">
              <Link to="/">
                <img src={logo} alt="logo" />
              </Link>
            </div>
            <div className="sidebar__items pe-4 mt-3">
              <Links />
            </div>
          </div>
          <div className="sidebar__bottom  pe-4 ">
            <ListGroup id="sidebar__ul">
              <ListGroup.Item
                as="li"
                className="sidebar__li w-100 d-flex align-items-center border-0 rounded  p-0 mb-2"
              >
                <NavLink
                  to="/sittings"
                  className="sidebar__link w-100 d-flex align-items-center gap-3 rounded p-2  "
                >
                  <img src={cog} alt={`icon__cog`} />
                  <span> Sittings </span>
                </NavLink>
              </ListGroup.Item>
              <ListGroup.Item
                as="li"
                className="sidebar__li w-100 d-flex align-items-center border-0 rounded  p-0 mb-2"
              >
                <NavLink
                  to="/logout"
                  className="sidebar__link w-100 d-flex align-items-center gap-3 rounded p-2  "
                >
                  <img src={logout} alt={`icon__logout`} />
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
