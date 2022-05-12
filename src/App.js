import Helmet from "react-helmet";
import { ToastContainer } from 'react-toastify';
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Loading from "./SharedAndUtils/Loading";
import Navbar from "./SharedAndUtils/Navbar";
import RequireAuth from "./SharedAndUtils/RequireAuth";
import Home from "./Pages/Home/Home";
import About from "./Pages/About.js";
import Appointment from "./Pages/Appointments/Appointment.js";
import Reviews from "./Pages/Reviews.js";
import Contact from "./Pages/Contact.js";
import Login from "./Pages/Login/Login.js";
import Register from "./Pages/Login/Register";
import Error from "./Pages/Error.js";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [loading, setLoading] = useState(true)
  window.addEventListener('load', () => {
    setLoading(false)
  })

  if (loading) {
    return <Loading />
  }
  return (
    <div >
      <Helmet>
        <title>Home - Doctors Portal</title>
      </Helmet>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/appointment" element={<RequireAuth><Appointment /></RequireAuth>} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
