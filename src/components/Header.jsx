import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import gdiIcon from "../assets/gdi-icon.png";
import gdiName from "../assets/gdi-name-header.png";

const Header = ({ isLoading }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Products", href: "/products" },
    { name: "Blog", href: "/blog" }
  ];

  const isDarkHero = ["/privacy", "/terms"].includes(location.pathname);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  return (
    <nav
      className={`fixed top-0 w-full z-[1000] transition-all duration-500 ${
        scrolled 
          ? "py-4 bg-white/80 backdrop-blur-2xl shadow-2xl shadow-primary/5 border-b border-slate-100" 
          : "py-6 md:py-8 bg-transparent"
      }`}
    >
      <div className="container mx-auto max-w-7xl px-6 md:px-8 flex items-center justify-between">
        {/* Brand Lockup: Icon Top + Name Bottom (Restored Vertical Stack & Slightly Larger) */}
        <Link to="/" className="flex flex-col items-center group gap-2 py-1">
          <motion.img
            src={gdiIcon}
            alt=""
            className={`h-10 md:h-12 w-auto object-contain transition-all ${
              !scrolled && isDarkHero ? "brightness-200" : "brightness-100"
            }`}
          />
          <motion.img
            src={gdiName}
            alt="GDI Nexus"
            className={`h-6 md:h-8 w-auto object-contain transition-all ${
              !scrolled && isDarkHero ? "brightness-200" : "brightness-100"
            }`}
          />
        </Link>

        {/* Desktop Nav - Nexus Aesthetic */}
        <div className="hidden lg:flex items-center gap-12">
          <ul className="flex items-center gap-10">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.href}
                  className={`relative text-[14px] font-black uppercase tracking-[0.15em] transition-all group ${
                    location.pathname === link.href
                      ? "text-secondary"
                      : (!scrolled && isDarkHero ? "text-white hover:text-white/80" : "text-secondary hover:text-primary")
                  }`}
                >
                  {link.name}
                  <span className={`absolute -bottom-2 left-0 w-full h-0.5 bg-secondary origin-left transition-transform duration-300 ${
                    location.pathname === link.href ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  }`} />
                </Link>
              </li>
            ))}
          </ul>

          <Link
            to="/contact"
            className={`px-10 py-4 rounded-[1.5rem] font-black text-[14px] uppercase tracking-[0.15em] transition-all shadow-xl hover:shadow-primary/30 hover:scale-[1.02] active:scale-[0.98] ${
              !scrolled && isDarkHero 
                ? "bg-white text-secondary hover:bg-accent hover:text-white" 
                : "bg-gradient-to-r from-primary to-secondary text-white shadow-primary/20"
            }`}
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`lg:hidden w-12 h-12 rounded-2xl flex items-center justify-center transition-all ${
            !scrolled && isDarkHero ? "text-white bg-white/10" : "text-charcoal bg-warm-white shadow-inner"
          }`}
        >
          {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>
      </div>

      {/* Immersive Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 lg:hidden bg-white z-[999] flex flex-col pt-32 px-12 pb-12"
          >
            <div className="absolute top-0 right-0 w-full h-full bg-primary/5 -skew-x-12 translate-x-1/2 pointer-events-none" />
            
            <ul className="space-y-8 relative z-10">
              {navLinks.map((link, i) => (
                <motion.li 
                  key={link.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    to={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`block text-5xl font-black uppercase tracking-tighter ${
                      location.pathname === link.href ? "text-primary italic" : "text-charcoal"
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>

            <div className="mt-auto relative z-10">
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="block w-full py-8 bg-primary text-white text-center rounded-[2.5rem] font-black text-xl uppercase tracking-widest shadow-2xl shadow-primary/20"
              >
                START A PROJECT
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Header;