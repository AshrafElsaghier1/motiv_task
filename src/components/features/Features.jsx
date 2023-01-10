import Feat from "./Feat";
import { featuresData } from "../../dummyData/featuresData";
const Features = () => {
  return (
    <div className="pt-4 row row-cols-lg-4 row-cols-md-3 ">
      {featuresData.map((feature) => (
        <Feat {...feature} key={feature.id} />
      ))}
    </div>
  );
};

export default Features;
