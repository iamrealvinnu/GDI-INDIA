import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Services from "./components/pages/Services";
import Industries from "./components/pages/Industries";
import Footer from "./components/Footer";
import Team from "./components/pages/Team";
import Products from "./components/pages/Products";
import Blog from "./components/pages/Blog";
import Terms from "./components/pages/Terms";
import Privacy from "./components/pages/Privacy";
import ScrollToTop from "./components/ScrollToTop";
import NexusAI from "./components/pages/NexusAI";
import BackToTop from "./components/pages/BackToTop";
import PageTracker from "./components/PageTracker";

function App() {
  return (
    <Router>
      <PageTracker />

      <Header />
      <BackToTop />
      <NexusAI />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/team" element={<Team />} />
        <Route path="/products" element={<Products />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
      </Routes>
      <Footer />
      <ToastContainer position="top-right" autoClose={3000} />
    </Router>
  );
}

export default App;
