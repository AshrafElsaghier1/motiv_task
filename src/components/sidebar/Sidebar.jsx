import { Link } from "react-router-dom";

import logo from "log";
const Sidebar = () => {
  return (
    <aside id="sidebar">
      <div className="sidebar__top">
        <div className="logo">
          <Link to="/">
            <img src="" />
          </Link>
        </div>
        <div className="sidebar__items"></div>
      </div>
    </aside>
  );
};

export default Sidebar;
