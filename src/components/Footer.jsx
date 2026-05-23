import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaLinkedinIn,
  FaInstagram,
  FaFacebookF,
  FaEnvelope,
  FaMapMarkerAlt,
  FaArrowUp,
  FaPhone,
  FaPaperPlane,
  FaGlobe
} from "react-icons/fa";
import { motion } from "framer-motion";
import gdiLogo from "../assets/gdi_logo1.png";
import axios from "axios";
import { toast } from "react-toastify";

function Footer() {
  const [email, setEmail] = useState("");
  const api = import.meta.env.VITE_API_BASE_URL;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) {
      toast.error("Email is required");
      return;
    }

    try {
      await axios.post(`${api}/Contacts/subscribe`, { email: email }, {
        headers: { "Content-Type": "application/json" }
      });
      toast.success("Subscribed successfully!");
      setEmail("");
    } catch (error) {
      console.error("Newsletter error:", error);
      toast.error("Subscription failed");
    }
  };

  return (
    <footer className="relative bg-secondary text-white pt-32 pb-12 overflow-hidden border-t border-white/5">
      {/* Background Accent: Immersive Gradient & Isometric Grid */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 right-0 w-[60vw] h-[60vw] bg-primary/20 rounded-full blur-[120px] -mr-32 -mt-32" />
        <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] bg-accent/10 rounded-full blur-[100px] -ml-20 -mb-20" />
      </div>

      {/* Pro-Level Dark Isometric Grid (High Visibility) */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden opacity-[0.08]">
        <div style={{ 
          perspective: "1200px", 
          width: "300vw", 
          height: "300vh", 
          transformStyle: "preserve-3d" 
        }}>
          <div style={{ 
            rotateX: "65deg", 
            rotateZ: "-45deg", 
            width: "100%", 
            height: "100%",
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.4) 1.5px, transparent 1.5px), linear-gradient(90deg, rgba(255,255,255,0.4) 1.5px, transparent 1.5px)', 
            backgroundSize: '140px 140px'
          }} />
        </div>
      </div>

      <div className="container mx-auto px-8 relative z-10 max-w-7xl">
        {/* Top Tier: Branding & Statement */}
        <div className="grid lg:grid-cols-12 gap-20 mb-32 items-start">
          <div className="lg:col-span-7">
            <h2 className="text-5xl md:text-6xl font-black tracking-tighter leading-none text-white mb-10 uppercase">
              Building for <span className="text-primary italic">India.</span> <br />
              Scaling for <span className="text-accent italic">The World.</span>
            </h2>
            <p className="text-blue-100/60 text-xl font-medium leading-relaxed max-w-2xl">
              We engineer world-class technical cores rooted in trust and designed for absolute exponential growth. Join us in architecting the future.
            </p>
          </div>

          {/* Newsletter Card */}
          <div className="lg:col-span-5 w-full">
            <div className="bg-white/5 p-12 rounded-[4rem] border border-white/10 backdrop-blur-xl shadow-2xl">
              <span className="text-[10px] font-black text-accent uppercase tracking-[0.4em] mb-4 block">Strategic Brief</span>
              <h4 className="text-3xl font-black mb-4 uppercase tracking-tighter">Stay Informed.</h4>
              <p className="text-blue-100/60 text-lg font-medium mb-10">Initialize subscription to receive strategic technical reports.</p>
              <form onSubmit={handleSubmit} className="relative">
                <input
                  type="email"
                  placeholder="ENTER EMAIL ADDRESS..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-[2rem] px-8 py-6 text-sm font-black text-white placeholder:text-slate-500 focus:outline-none focus:border-accent transition-all pr-20 uppercase tracking-widest"
                />
                <button
                  type="submit"
                  className="absolute right-3 top-3 bottom-3 bg-white text-secondary w-14 rounded-2xl flex items-center justify-center hover:bg-accent hover:text-white transition-all shadow-xl"
                >
                  <FaPaperPlane size={18} />
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Middle Tier: Cleaner Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 pb-20 border-b border-white/5 items-start text-left">
          
          {/* 1. Connect */}
          <div className="space-y-8">
            <h4 className="text-[10px] font-black uppercase tracking-[0.5em] text-accent leading-none">Connect</h4>
            <div className="flex gap-4">
              <a href="https://www.linkedin.com/in/gdi-nexus-b44196308/" className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-xl hover:bg-primary hover:border-primary transition-all shadow-xl">
                <FaLinkedinIn />
              </a>
              <a href="https://www.instagram.com/gdi_nexus?igsh=MTF4dXl6MjRrendwMg%3D%3D" className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-xl hover:bg-primary hover:border-primary transition-all shadow-xl">
                <FaInstagram />
              </a>
              <a href="https://www.facebook.com/people/Gdi-Nexus/pfbid0ze6CfTdKQU8fsiW2KkevyF9o7Y1SGATYKTmykkmTbWxYdFRWwN9sbpXpDYKbwvnEl/" className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-xl hover:bg-primary hover:border-primary transition-all shadow-xl">
                <FaFacebookF />
              </a>
            </div>
          </div>

          {/* 2. Headquarters */}
          <div className="space-y-8">
            <h4 className="text-[10px] font-black uppercase tracking-[0.5em] text-accent leading-none">Headquarters</h4>
            <div className="space-y-6">
              <div className="flex gap-6 items-start">
                <FaMapMarkerAlt className="text-primary text-xl mt-1" />
                <div>
                  <span className="text-white text-lg font-black uppercase tracking-tighter leading-none block mb-2">
                    Nilgiris, Tamil Nadu
                  </span>
                  <p className="text-[11px] font-black text-blue-100/40 uppercase tracking-widest leading-relaxed max-w-[240px]">
                    33, Thoppan Line, Fingerpost Kandal, Udagamandalam, 643001
                  </p>
                </div>
              </div>
              <div className="flex gap-6 items-center">
                <FaPhone className="text-primary text-xl" />
                <a href="tel:+917483648727" className="text-white text-lg font-black transition-all">
                  +91 7483648727
                </a>
              </div>
            </div>
          </div>

          {/* 3. Digital Nexus */}
          <div className="space-y-8">
            <h4 className="text-[10px] font-black uppercase tracking-[0.5em] text-accent leading-none">Digital Nexus</h4>
            <div className="space-y-6">
              <div className="flex gap-6 items-center">
                <FaEnvelope className="text-primary text-xl mt-1" />
                <a href="mailto:admin@gdinexus.in" className="text-white text-lg font-black transition-all lowercase">
                  admin@gdinexus.in
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Registration Row: Enhanced Trust Markers */}
        <div className="py-12 border-b border-white/5 bg-white/[0.02] rounded-[2rem] px-8">
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-6">
            {[
              { label: "GST", value: "33ABBFG6793J1Z3" },
              { label: "TAN", value: "CMBG08053D" },
              { label: "LLP NO", value: "ACI-9725" },
              { label: "PAN", value: "ABBFG6793J" }
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <span className="text-[10px] font-black text-accent uppercase tracking-[0.2em] opacity-80">{item.label}</span>
                <span className="text-[12px] font-bold text-white tracking-widest leading-none">{item.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Tier: Enhanced Visibility */}
        <div className="pt-16 flex flex-col md:flex-row justify-between items-center gap-8 border-t border-white/5 mt-12">
          <p className="text-blue-100/60 text-[11px] font-black uppercase tracking-[0.3em]">
            © {new Date().getFullYear()} GDI Nexus Software Solutions. All Protocols Reserved.
          </p>
          <div className="flex items-center gap-10">
            <Link to="/privacy" className="text-blue-100/60 hover:text-accent text-[11px] font-black uppercase tracking-[0.3em] transition-colors">
              Privacy Protocol
            </Link>
            <div className="w-1 h-1 bg-white/10 rounded-full" />
            <Link to="/terms" className="text-blue-100/60 hover:text-accent text-[11px] font-black uppercase tracking-[0.3em] transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-10 right-10 w-20 h-20 bg-white text-secondary rounded-[2rem] shadow-2xl z-50 flex items-center justify-center hover:bg-accent hover:text-white transition-all border border-slate-100"
      >
        <FaArrowUp size={24} />
      </button>
    </footer>
  );
}

export default Footer;