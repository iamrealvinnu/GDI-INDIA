import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Industries", href: "/industries" },
    // { name: "Team", href: "/team" },
    { name: "Services", href: "/services" },
    { name: "Products", href: "/products" },
    { name: "Blog", href: "/blog" },
  ];

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [isOpen]);

  return (
    <nav
      className="fixed w-full z-[100] px-4"
      style={{ top: "calc(env(safe-area-inset-top) + 1rem)" }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Glass Header */}
        <div className="relative flex items-center justify-between px-6 py-3 bg-[var(--grms-blue)] border border-white/20 backdrop-blur-xl rounded-2xl md:rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.3)] overflow-hidden">

          {/* Glow */}
          <div className="absolute -left-10 top-0 w-40 h-full bg-white/10 skew-x-[20deg] blur-2xl pointer-events-none" />

          {/* Logo */}
          <a href="/" className="relative z-10">
            <img
              src="https://gdinexus.com/wp-content/uploads/2024/04/logo.png"
              alt="GDI Nexus"
              className="h-10 md:h-12 brightness-0 invert"
            />
          </a>

          {/* Desktop Nav */}
          <ul className="hidden lg:flex items-center gap-2 bg-black/20 rounded-full px-2 py-1 border border-white/5">
            {navLinks.map((link) => (
              <li key={link.name}>
                <motion.a
                  href={link.href}
                  whileHover={{ scale: 1.05 }}
                  className="px-5 py-2 rounded-full text-xs font-bold tracking-widest text-white/90 hover:text-white hover:bg-[var(--grms-blue)] transition-all"
                >
                  {link.name.toUpperCase()}
                </motion.a>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <a
            href="/contact"
            className="hidden md:block bg-white text-[var(--grms-blue)] px-6 py-2.5 rounded-xl font-black text-sm hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] transition-all active:scale-95"
          >
            LET&apos;S TALK
          </a>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden w-10 h-10 flex flex-col justify-center items-center gap-1.5 relative z-50"
          >
            <span
              className={`h-1 w-6 bg-white rounded-full transition-all ${
                isOpen ? "rotate-45 translate-y-2.5" : ""
              }`}
            />
            <span
              className={`h-1 w-4 bg-white rounded-full transition-all ${
                isOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-1 w-6 bg-white rounded-full transition-all ${
                isOpen ? "-rotate-45 -translate-y-2.5" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.96 }}
            transition={{ duration: 0.35, ease: [0.23, 1, 0.32, 1] }}
            className="
              fixed inset-x-4
              top-[calc(env(safe-area-inset-top)+6rem)]
              bg-[var(--grms-blue)]/95
              backdrop-blur-3xl
              border border-white/20
              rounded-[2.5rem]
              p-10
              shadow-2xl
              lg:hidden
              z-[90]
            "
          >
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_right,_white,_transparent)] pointer-events-none" />

            <div className="relative z-10 flex flex-col gap-6">
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.08 }}
                  onClick={() => setIsOpen(false)}
                  className="text-3xl font-black text-white tracking-tight hover:text-blue-200"
                >
                  {link.name}
                </motion.a>
              ))}

              <motion.a
                href="/contact"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                onClick={() => setIsOpen(false)}
                className="mt-4 bg-white text-[var(--grms-blue)] py-5 rounded-2xl text-center font-black tracking-widest hover:scale-[1.02] transition-transform"
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
