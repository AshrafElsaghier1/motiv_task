import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Filter from "../../components/filter/Filter";
import SingleProduct from "../../components/single-item/SingleProduct";
import Spinner from "../../components/spinner/Spinner";
import { getProducts } from "../../features";
import "./style.scss";

const BookingCar = () => {
  const { products, isLoading, isError } = useSelector(
    (state) => state.products
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  const [smallGrid, setSmallGrid] = useState(false);
  const smallGridHandler = () => setSmallGrid(false);
  const largeGridHandler = () => setSmallGrid(true);

  return (
    <div className="booking__container pt-2 pt-md-5" id="booking">
      <h2 className="title__heading mb-3 mb-md-0">Booking</h2>
      <div className="d-none d-md-block">
        <Filter
          smallGridHandler={smallGridHandler}
          largeGridHandler={largeGridHandler}
          grid={smallGrid}
        />
      </div>
      <div
        className={`row ${
          smallGrid
            ? "row-cols-1  row-cols-sm-1 row-cols-lg-2"
            : "row-cols-lg-3 row-cols-sm-2"
        } `}
      >
        {isLoading ? (
          <Spinner />
        ) : isError ? (
          <h1 className="text-center alert alert-danger w-100 ">
            Network Error
          </h1>
        ) : (
          products.map((product) => {
            return <SingleProduct key={product.id} {...product} />;
          })
        )}
      </div>
    </div>
  );
};

export default BookingCar;
