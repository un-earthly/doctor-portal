import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About.js";
import Appointment from "./Pages/Appointments/Appointment.js";
import Reviews from "./Pages/Reviews.js";
import Contact from "./Pages/Contact.js";
import Login from "./Pages/Login/Login.js";
import Error from "./Pages/Error.js";
import Footer from "./SharedAndUtils/Footer";
import Navbar from "./SharedAndUtils/Navbar";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Helmet from "react-helmet";
import Register from "./Pages/Login/Register";
import SetFooter from "./SharedAndUtils/SetFooter";

function App() {
  return (
    <div >
      <Helmet>
        <title>Home - Doctors Portal</title>
      </Helmet>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/*" element={<Error />} />
      </Routes>
      <SetFooter><Footer /></SetFooter>
      <ToastContainer />
    </div>
  );
}

export default App;
