import { Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";
import BookingCar from "./pages/booking/BookingCar";
import Error from "./components/error/Error";
import Layout from "./components/layout/Layout";
import { useEffect, useState } from "react";
import { ThemeContext } from "./theme/themeContext";
import "bootstrap/dist/css/bootstrap.min.css";
import "./app.scss";

function App() {
  const storedTheme = localStorage.length
    ? localStorage.getItem("theme")
    : "light";
  const [theme, setTheme] = useState(storedTheme);

  const toggleThemeHandler = () => {
    setTheme((theme) => (theme === "light" ? "dark" : "light"));
  };
  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ toggleThemeHandler, theme }}>
      <div id={theme} className="app">
        <Routes basename="/motiv_task">
          <Route path="/motiv_task" element={<Layout />}>
            <Route />
            <Route
              path="/motiv_task"
              element={<Navigate to="/motiv_task/dashboard" />}
            />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="booking" element={<BookingCar />} />
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
