import { useEffect } from "react";
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

  return (
    <div className="booking__container pt-5" id="booking">
      <h2 className="title__heading ">Booking</h2>
      <>
        <Filter />
      </>
      <div className="row row-cols-lg-3 ">
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
