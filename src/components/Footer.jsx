import React from "react";
import { Link } from "react-router-dom";
import { 
  FaLinkedinIn, 
  FaTwitter, 
  FaArrowRight, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaArrowUp 
} from "react-icons/fa";
import { motion } from "framer-motion";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#050a15] text-white pt-20 pb-10 overflow-hidden border-t border-white/10">
      {/* Background Accent: Tech Grid Overlay - Unchanged */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: `linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Top Tier: The Vision Statement - Changed to all White */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-16 gap-8">
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter leading-tight text-white">
              ENGINEERING THE <br/>
              <span className="text-white">NEXT DIGITAL FRONTIER.</span>
            </h2>
          </div>
          
          {/* Microsoft Official Solutions Partner Badge - Unchanged */}
          <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-[0_0_30px_rgba(255,255,255,0.1)] transition-transform hover:scale-105">
             <img 
               src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" 
               alt="Microsoft Logo" 
               className="h-6 w-auto"
             />
             <div className="h-8 w-[1px] bg-gray-300 mx-2"></div>
             <div className="flex flex-col">
               <span className="text-[10px] font-black text-gray-500 uppercase tracking-tighter leading-none">Solutions Partner</span>
               <span className="text-sm font-bold text-gray-900 leading-tight">Digital & App Innovation</span>
               <span className="text-[9px] text-gray-400 font-semibold uppercase leading-none mt-1">Azure Certified</span>
             </div>
          </div>
        </div>

        {/* Main Grid Tier */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/5">
          
          {/* Column 1: Brand Identity */}
          <div className="lg:col-span-4 space-y-6">
            <img 
              src="https://gdinexus.com/wp-content/uploads/2024/04/logo.png" 
              alt="GDI Nexus" 
              className="h-12 w-auto brightness-0 invert" 
            />
            <p className="text-white text-sm leading-relaxed max-w-sm opacity-90">
              Transforming complex data into actionable intelligence. GDI Nexus delivers elite-level AI solutions for global enterprises.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-[var(--grms-blue)] hover:border-[var(--grms-blue)] transition-all">
                <FaLinkedinIn className="text-white" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-[var(--grms-blue)] hover:border-[var(--grms-blue)] transition-all">
                <FaTwitter className="text-white" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Navigation - Changed Header and Hover Accent to White */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-black text-xs uppercase tracking-widest mb-6">NAVIGATION</h4>
            <ul className="space-y-4">
              {['Home', 'About', 'Team', 'Products', 'Services'].map((item) => (
                <li key={item}>
                  <Link to={`/${item.toLowerCase()}`} className="text-white hover:opacity-70 transition-all text-sm font-medium flex items-center gap-2 group">
                    <span className="w-0 h-[1.5px] bg-white group-hover:w-4 transition-all"></span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Details - Changed Header and Icons to White */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-black text-xs uppercase tracking-widest mb-6">HEADQUARTERS</h4>
            <ul className="space-y-5 text-sm">
              <li className="flex gap-4 items-start">
                <FaMapMarkerAlt className="text-white mt-1" />
                <span className="text-white leading-relaxed">123 Tech Street, Silicon Valley<br/>CA 94027, United States</span>
              </li>
              <li className="flex gap-4 items-center">
                <FaEnvelope className="text-white" />
                <a href="mailto:info@gdinexus.com" className="text-white hover:underline underline-offset-4 transition-all font-medium">info@gdinexus.com</a>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter / CTA Card - Kept blue for branding balance */}
          <div className="lg:col-span-3">
            <div className="bg-[var(--grms-blue)] p-6 rounded-2xl shadow-2xl hover:translate-y-[-5px] transition-transform duration-300">
              <h4 className="text-white font-black text-lg mb-2 leading-tight">Join the Revolution</h4>
              <p className="text-white/80 text-xs mb-6">Get the latest AI insights delivered to your inbox.</p>
              <div className="flex flex-col gap-2">
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  className="bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-white transition-all"
                />
                <button className="bg-white text-[var(--grms-blue)] font-black py-2 rounded-lg text-sm hover:bg-opacity-90 transition-all flex items-center justify-center gap-2">
                  SUBSCRIBE <FaArrowRight size={10} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Tier: Legal & Metadata */}
        <div className="mt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/40 text-[10px] font-bold tracking-[0.2em] uppercase">
            © {new Date().getFullYear()} GDI Nexus. All rights reserved.
          </p>
          <div className="flex gap-10 text-[10px] font-bold uppercase tracking-widest">
            <Link to="/privacy" className="text-white/40 hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-white/40 hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>

      {/* Modern Fixed Scroll-to-Top */}
      <motion.button
        onClick={scrollToTop}
        whileHover={{ y: -5 }}
        className="fixed bottom-10 right-10 bg-white text-[var(--grms-blue)] p-4 rounded-xl shadow-2xl z-50 hover:bg-[var(--grms-blue)] hover:text-white transition-all border border-white/10"
      >
        <FaArrowUp />
      </motion.button>
    </footer>
  );
}

export default Footer;