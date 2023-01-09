import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './pages/dashboard/Dashboard';
import BookingCar from './pages/booking/BookingCar';
import Error from './components/error/Error';
import Layout from './components/layout/Layout';

function App() {
  return (
    <>

      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/booking" element={<BookingCar />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
