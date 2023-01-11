import { recommendedItems } from "../../dummyData/productsData";
import RecommendItem from "./RecommendItem";

const RecomendedCars = () => {
  return (
    <div className="row row-cols-md-3 mt-3">
      {recommendedItems.map((item) => (
        <RecommendItem key={item.id} {...item} />
      ))}
    </div>
  );
};

export default RecomendedCars;
