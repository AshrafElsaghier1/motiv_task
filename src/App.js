import Sidebar from "./components/sidebar/Sidebar";

import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/navbar/Navbar";
import { Container } from "react-bootstrap";
function App() {
  return (
    <main>

      <div className="row  w-100 g-0" >
        <aside className="col-md-3  col-lg-2 bg-white">
          <Sidebar />
        </aside>
        <div className="col-md-9 col-lg-10 bg-light">
          <Navbar />
          <Container className="px-3">



          </Container>
        </div>

      </div>
    </main>
  );
}

export default App;
