// App.js

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import Layout from "@/components/digilynk/Layout";
import { BrowserRouter, Routes, Route, ScrollRestoration } from "react-router-dom";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import AboutUs from "../components/digilynk/AboutUs";
import Service from "../components/digilynk/Service";
import WebDevelopment from "../components/digilynk/WebDevelopment";
import SoftwareTesting from "../components/digilynk/SoftwareTesting";


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
          <Route index element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/services" element={<Service />} />
          <Route path="/web-development" element={<WebDevelopment />} />
          <Route path="/software-testing" element={<SoftwareTesting />} />
          {/* Other routes */}
          {/* <Route path="/web-development" element={<WebDevelopment />} />
          <Route path="/about" element={<About />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
