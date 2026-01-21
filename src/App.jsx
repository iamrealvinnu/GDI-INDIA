import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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

function App() {
  return (
    <Router>
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
    </Router>
  );
}

export default App;
