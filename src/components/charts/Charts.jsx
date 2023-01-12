import CarChart from "./CarChart";
import MilesChart from "./MilesChart";
import "./style.scss";

const Charts = () => {
  return (
    <div className="row row-cols-sm-1 row-cols-md-2 ">
      <MilesChart />
      <CarChart />
    </div>
  );
};

export default Charts;
