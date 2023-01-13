import CarChart from "./CarChart";
import MilesChart from "./MilesChart";
import "./style.scss";

const Charts = () => {
  return (
    <div className="row row-cols-sm-1 row-cols-lg-2 mb-4  ">
      <CarChart />
      <MilesChart />
    </div>
  );
};

export default Charts;
