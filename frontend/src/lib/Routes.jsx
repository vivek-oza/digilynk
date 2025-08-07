// App.js

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import Layout from "@/components/digilynk/Layout";
import { BrowserRouter, Routes, Route, ScrollRestoration } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ContactPage from "../pages/ContactPage";
import AboutUsPage from "../pages/AboutUsPage";
import WebDevelopmentPage from "../pages/WebDevelopmentPage";
import SoftwareTestingPage from "../pages/SoftwareTestingPage";
import GraphicDesignPage from "../pages/GraphicDesignPage";
import ServicesPage from '../pages/ServicesPage';


function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}


export default function DigilynkRoutes() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/web-development" element={<WebDevelopmentPage />} />
          <Route path="/services/software-testing" element={<SoftwareTestingPage />} />
          <Route path="/services/design" element={<GraphicDesignPage />} />
          {/* Other routes */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
