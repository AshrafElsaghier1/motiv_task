import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getRecommendedCars } from "../../features";
import Spinner from "../spinner/Spinner";
import RecommendItem from "./RecommendItem";

const RecomendedCars = () => {
  const { recommendedCars, isLoading, isError } = useSelector(
    (state) => state.products
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRecommendedCars());
  }, [dispatch]);

  return (
    <div className="row row-cols-md-3 mt-3">
      {isLoading ? (
        <Spinner />
      ) : isError ? (
        <h1 className="text-center alert alert-danger w-100 ">Network Error</h1>
      ) : (
        recommendedCars.map((item) => <RecommendItem key={item.id} {...item} />)
      )}
    </div>
  );
};

export default RecomendedCars;
