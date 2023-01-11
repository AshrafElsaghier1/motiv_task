import React from "react";
import Charts from "../../components/charts/Charts";
import Features from "../../components/features/Features";
import RecomendedCars from "../../components/recommendedCars/RecommendedCars";

const Dashboard = () => {
  return (
    <>
      <Features />
      <Charts />
      <RecomendedCars />
    </>
  );
};

export default Dashboard;
