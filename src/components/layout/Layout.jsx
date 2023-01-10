import Sidebar from "../sidebar/Sidebar";
import Navbar from "../navbar/Navbar";
import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <main className="row  w-100 g-0">
      <aside className="col-md-3  col-lg-2 bg-white">
        <Sidebar />
      </aside>
      <div className="col-md-9 col-lg-10" style={{ background: "#F5F5F5" }}>
        <Navbar />
        <Container className="px-4  pb-3">
          <Outlet />
        </Container>
      </div>
    </main>
  );
};

export default Layout;
