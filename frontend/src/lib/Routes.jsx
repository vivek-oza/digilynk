// App.js
import Layout from "@/components/digilynk/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import AboutUs from "../components/digilynk/AboutUs";
import Service from "../components/digilynk/Service";
import WebDevelopment from "../components/digilynk/WebDevelopment";
import SoftwareTesting from "../components/digilynk/SoftwareTesting";

export default function DigilynkRoutes() {
  return (
    <BrowserRouter>
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
