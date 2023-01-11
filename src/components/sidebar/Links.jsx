import { NavLink } from "react-router-dom";
import ListGroup from "react-bootstrap/ListGroup";

import { navigationItems } from "../../dummyData/navigationData";

import "./links.scss";
const Links = () => {
  return (
    <ListGroup id="sidebar__ul">
      {navigationItems.map(({ id, link, icon, pathLink }) => (
        <ListGroup.Item
          key={id}
          as="button"
          className="sidebar__li w-100 d-flex align-items-center border-0   p-0 mb-2 "
        >
          <NavLink
            to={pathLink}
            className="sidebar__link w-100 d-flex align-items-center gap-3 rounded p-2  "
          >
            <span> {icon} </span>
            <span> {link} </span>
          </NavLink>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default Links;
