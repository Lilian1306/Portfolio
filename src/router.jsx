import { lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react"
import ScrollToTop from "./utils/ScrollToTop";

const Navbar = lazy(() => import("./Pages/Navbar"));
const HeroSection = lazy(() => import("./Pages/HeroSection"));
const Servicios = lazy(() => import("./Pages/Servicios"));
const Proyectos = lazy(() => import("./Pages/Proyectos"));
const ContactUs = lazy(() => import("./Pages/ContactUs"));



const Router = () => {
  return (
    
    <BrowserRouter>
      <ScrollToTop />
      <Analytics/>
      <Routes>
        <Route element={<Navbar />}>
          <Route path="/" element={<HeroSection />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/portafolio" element={<Proyectos />} />
          <Route path="/contactanos" element={<ContactUs />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
