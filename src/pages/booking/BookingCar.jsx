import Filter from "../../components/filter/Filter";
import SingleProduct from "../../components/single-item/SingleProduct";
import { products } from "../../dummyData/productsData";
import "./booking.scss";
const BookingCar = () => {
  return (
    <div className="booking__container pt-5" id="booking">
      <h2 className="title__heading ">Booking</h2>
      <>
        <Filter />
      </>
      <div className="row row-cols-lg-3 ">
        {products.map((product) => (
          <SingleProduct key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};

export default BookingCar;
