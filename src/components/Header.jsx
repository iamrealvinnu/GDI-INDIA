import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  // ADDED "Blog" to the array
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Industries", href: "/industries" },
    { name: "Team", href: "/team" },
    { name: "Services", href: "/services" },
    { name: "Products", href: "/products" },
    { name: "Blog", href: "/blog" }, 
  ];

  return (
    <nav className="fixed w-full top-4 z-[100] px-4">
      <div className="max-w-7xl mx-auto">
        {/* Glassmorphism Container */}
        <div className="bg-[var(--grms-blue)] border border-white/20 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] rounded-2xl md:rounded-[2rem] px-6 py-3 flex items-center justify-between relative overflow-hidden transition-all duration-300 hover:border-white/40">
          
          {/* Animated Background Glow */}
          <div className="absolute -left-10 top-0 w-40 h-full bg-white/10 skew-x-[20deg] blur-2xl pointer-events-none" />

          {/* Logo Section */}
          <div className="relative z-10 flex items-center">
            <a href="/" className="hover:opacity-80 transition-opacity">
              <img 
                src="https://gdinexus.com/wp-content/uploads/2024/04/logo.png" 
                alt="Logo" 
                className="h-10 md:h-12 w-auto brightness-0 invert" 
              />
            </a>
          </div>

          {/* Desktop Links - Pill Interaction */}
          <ul className="hidden lg:flex items-center gap-2 bg-black/20 rounded-full px-2 py-1 border border-white/5">
            {navLinks.map((link) => (
              <li key={link.name}>
                <motion.a
                  href={link.href}
                  whileHover={{ scale: 1.05 }}
                  className="px-5 py-2 rounded-full text-xs font-bold tracking-widest text-white/90 hover:text-white hover:bg-[var(--grms-blue)] transition-all duration-300 block"
                >
                  {link.name.toUpperCase()}
                </motion.a>
              </li>
            ))}
          </ul>

          {/* Action Button */}
          <div className="hidden md:block">
            <a 
              href="/contact" 
              className="bg-white text-[var(--grms-blue)] px-6 py-2.5 rounded-xl font-black text-sm hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] transition-all active:scale-95"
            >
              LET'S TALK
            </a>
          </div>

          {/* Mobile Toggle */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden w-10 h-10 flex flex-col justify-center items-center gap-1.5 z-50 relative group"
          >
             <span className={`h-1 w-6 bg-white rounded-full transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2.5" : ""}`} />
             <span className={`h-1 w-4 bg-white rounded-full transition-all duration-300 ${isOpen ? "opacity-0" : ""}`} />
             <span className={`h-1 w-5 bg-white rounded-full transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2.5 w-6" : "group-hover:w-6"}`} />
          </button>
        </div>
      </div>

      {/* Full-Screen Mobile Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
            className="absolute top-24 left-4 right-4 bg-[var(--grms-blue)]/95 backdrop-blur-3xl border border-white/20 rounded-[2.5rem] p-10 lg:hidden shadow-2xl overflow-hidden"
          >
             {/* Subtle background pattern for mobile menu */}
             <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_right,_white,_transparent)] pointer-events-none"></div>
            <div className="flex flex-col gap-6 relative z-10">
              {navLinks.map((link, idx) => (
                <motion.a 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  key={link.name} 
                  href={link.href} 
                  className="text-3xl font-black text-white tracking-tighter hover:text-blue-200 transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.a 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                href="/contact" 
                className="w-full text-center bg-white text-[var(--grms-blue)] py-5 rounded-2xl font-black tracking-widest mt-4 hover:scale-[1.02] transition-transform"
              >
                INITIATE CONTACT
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Header;