import { BrowserRouter, Routes, Route } from "react-router-dom";
import HeroSection from "./Pages/HeroSection";
import Servicios from "./Pages/Servicios";
import Portfolio from "./Pages/Portfolio";
import ContactUs from "./Pages/ContactUs";
import Navbar from "./Pages/Navbar";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Navbar />}>
          <Route path="/" element={<HeroSection />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/portafolio" element={<Portfolio />} />
          <Route path="/contactanos" element={<ContactUs />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
