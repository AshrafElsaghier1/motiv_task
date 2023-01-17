import { Row } from "react-bootstrap";
import CarChart from "./CarChart";
import MilesChart from "./MilesChart";
import "./style.scss";

const Charts = () => {
  return (
    <Row>
      <CarChart />

      <MilesChart />
    </Row>
  );
};

export default Charts;
