import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Footer from "./SharedAndUtils/Footer";
import Navbar from "./SharedAndUtils/Navbar";


function App() {
  return (
    <div >
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
