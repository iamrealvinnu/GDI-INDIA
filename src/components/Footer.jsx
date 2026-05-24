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
  FaPaperPlane
} from "react-icons/fa";
import { motion } from "framer-motion";
import gdiLogo from "../assets/gdi_logo1.png";
import isoLogo from "../assets/iso.png";
import microsoftLogo from "../assets/Microsoft_logo.svg";
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
    <footer className="relative bg-secondary text-white pt-24 pb-12 overflow-hidden border-t border-white/5">
      {/* Background Accent: Immersive Gradient & Isometric Grid */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 right-0 w-[60vw] h-[60vw] bg-primary/20 rounded-full blur-[120px] -mr-32 -mt-32" />
        <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] bg-accent/10 rounded-full blur-[100px] -ml-20 -mb-20" />
      </div>

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden opacity-[0.08]">
        <div style={{ perspective: "1200px", width: "300vw", height: "300vh", transformStyle: "preserve-3d" }}>
          <div style={{ 
            rotateX: "65deg", rotateZ: "-45deg", width: "100%", height: "100%",
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.4) 1.5px, transparent 1.5px), linear-gradient(90deg, rgba(255,255,255,0.4) 1.5px, transparent 1.5px)', 
            backgroundSize: '140px 140px'
          }} />
        </div>
      </div>

      <div className="container mx-auto px-8 relative z-10 max-w-7xl">
        
        {/* Tier 1: Authoritative Statement */}
        <div className="mb-20 border-b border-white/5 pb-16">
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-none text-white mb-8 uppercase">
            Building for <span className="text-primary italic">India.</span> <br />
            Scaling for <span className="text-accent italic">The World.</span>
          </h2>
          <p className="text-blue-100/60 text-2xl font-medium max-w-3xl leading-relaxed">
            Engineering world-class technical cores designed for absolute exponential growth.
          </p>
        </div>

        {/* Tier 2: The Executive Grid (Simplified English) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          
          {/* 1. Connect */}
          <div className="space-y-8">
            <h4 className="text-[11px] font-black uppercase tracking-[0.5em] text-accent leading-none">Connect</h4>
            <div className="flex gap-4">
              {[FaLinkedinIn, FaInstagram, FaFacebookF].map((Icon, i) => (
                <a key={i} href="#" className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-xl hover:bg-primary hover:border-primary transition-all shadow-xl">
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* 2. Contact Us */}
          <div className="space-y-8">
            <h4 className="text-[11px] font-black uppercase tracking-[0.5em] text-accent leading-none">Contact Us</h4>
            <div className="space-y-6">
              <a href="mailto:admin@gdinexus.in" className="flex items-center gap-4 text-lg font-bold text-white hover:text-primary transition-all group">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                  <FaEnvelope />
                </div>
                admin@gdinexus.in
              </a>
              <a href="tel:+917483648727" className="flex items-center gap-4 text-lg font-bold text-white hover:text-primary transition-all group">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                  <FaPhone />
                </div>
                +91 7483648727
              </a>
            </div>
          </div>

          {/* 3. Certified Network */}
          <div className="space-y-8">
            <h4 className="text-[11px] font-black uppercase tracking-[0.5em] text-accent leading-none">Certified Network</h4>
            <div className="flex items-center gap-6 bg-white/5 p-6 rounded-3xl border border-white/10 group hover:border-primary/50 transition-all">
               <img src={microsoftLogo} alt="Microsoft" className="h-12 w-auto" />
               <div className="text-left border-l border-white/10 pl-6">
                  <p className="text-[9px] font-black text-primary uppercase tracking-widest mb-1">Microsoft</p>
                  <p className="text-[11px] font-bold text-white uppercase tracking-widest leading-tight">Cloud Service Partner</p>
               </div>
            </div>
          </div>

          {/* 4. Quality & Security */}
          <div className="space-y-8">
            <h4 className="text-[11px] font-black uppercase tracking-[0.5em] text-accent leading-none">Security</h4>
            <div className="flex items-center gap-6 bg-white/5 p-6 rounded-3xl border border-white/10 group hover:border-accent/50 transition-all">
               <img src={isoLogo} alt="ISO" className="h-12 w-auto" />
               <div className="text-left border-l border-white/10 pl-6">
                  <p className="text-[9px] font-black text-accent uppercase tracking-widest mb-1">ISO Certified</p>
                  <p className="text-[11px] font-bold text-white uppercase tracking-widest leading-tight">ISO 27001:2022</p>
               </div>
            </div>
          </div>
        </div>

        {/* Tier 3: Newsletter (Simple English) */}
        <div className="bg-white/5 p-10 rounded-[4rem] border border-white/10 backdrop-blur-xl mb-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-full bg-primary/5 -skew-x-12 translate-x-1/2 pointer-events-none" />
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10">
            <div>
              <h4 className="text-3xl font-black text-white mb-2 uppercase tracking-tighter">Subscribe to Updates.</h4>
              <p className="text-blue-100/40 text-sm font-bold uppercase tracking-widest">Get the latest news and technology insights from our firm.</p>
            </div>
            <form onSubmit={handleSubmit} className="relative w-full lg:w-[450px]">
              <input
                type="email"
                placeholder="YOUR EMAIL ADDRESS..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-white/5 border border-white/20 rounded-[2rem] px-8 py-6 text-sm font-black text-white placeholder:text-slate-500 focus:outline-none focus:border-accent transition-all pr-20 uppercase tracking-widest"
              />
              <button type="submit" className="absolute right-3 top-3 bottom-3 bg-white text-secondary w-14 rounded-2xl flex items-center justify-center hover:bg-accent hover:text-white transition-all shadow-xl">
                <FaPaperPlane size={18} />
              </button>
            </form>
          </div>
        </div>

        {/* Tier 4: Legal & Final Sign-off (Simple English) */}
        <div className="pt-12 flex flex-col md:flex-row justify-between items-center gap-12 border-t border-white/5">
          <div className="flex items-center gap-10">
            <Link to="/privacy" className="text-[11px] font-black text-blue-100/40 hover:text-white uppercase tracking-[0.3em] transition-all">Privacy Policy</Link>
            <div className="w-1 h-1 bg-white/10 rounded-full" />
            <Link to="/terms" className="text-[11px] font-black text-blue-100/40 hover:text-white uppercase tracking-[0.3em] transition-all">Terms of Service</Link>
          </div>
          
          <p className="text-[10px] font-black text-blue-100/20 uppercase tracking-[0.5em] text-center md:text-right">
            © {new Date().getFullYear()} GDI Nexus Software Solutions LLP. All Rights Reserved.
          </p>
        </div>
      </div>

      <button onClick={scrollToTop} className="fixed bottom-10 right-10 w-16 h-16 bg-white text-secondary rounded-2xl shadow-2xl z-50 flex items-center justify-center hover:bg-accent hover:text-white transition-all border border-slate-100">
        <FaArrowUp />
      </button>
    </footer>
  );
}

export default Footer;