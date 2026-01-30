// App.js

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import Layout from "@/components/digilynk/Layout";
import {
  BrowserRouter,
  Routes,
  Route,
  ScrollRestoration,
} from "react-router-dom";
import NewHomePage from "../pages/NewHomePage";
import ContactPage from "../pages/ContactPage";
import AboutUsPage from "../pages/AboutUsPage";
import WebDevelopmentPage from "../pages/WebDevelopmentPage";
import SoftwareTestingPage from "../pages/SoftwareTestingPage";
import NotFoundPage from "../pages/NotFoundPage";
import BlogPage from "../pages/BlogPage";
import BlogListPage from "../pages/BlogListPage";
import BlogEditorPage from "../pages/BlogEditorPage";

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
          <Route index element={<NewHomePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/blog" element={<BlogListPage />} />
          <Route path="/blog/new" element={<BlogEditorPage />} />
          <Route path="/blog/edit/:id" element={<BlogEditorPage />} />
          <Route path="/blog/:id" element={<BlogPage />} />
          <Route
            path="/services/web-development"
            element={<WebDevelopmentPage />}
          />
          <Route
            path="/services/software-testing"
            element={<SoftwareTestingPage />}
          />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
