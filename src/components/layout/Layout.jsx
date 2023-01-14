import Sidebar from "../sidebar/Sidebar";
import Navbar from "../navbar/Navbar";
import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import "./style.scss";

const Layout = () => {
  return (
    <main className="row  w-100 g-0 main">
      <aside className=" col-1  col-md-3  col-lg-2  ">
        <Sidebar />
      </aside>
      <div className="col-11 col-md-9 col-lg-10  layout__container ">
        <Navbar />
        <Container className="px-md-4  pb-3">
          <Outlet />
        </Container>
      </div>
    </main>
  );
};

export default Layout;
