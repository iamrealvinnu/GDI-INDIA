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
import sdvosbLogo from "../assets/SBA-SDVOSB-Logo.png";
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
    <footer className="relative bg-secondary text-white pt-20 pb-10 overflow-hidden border-t border-white/5">
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
        {/* Top Tier: Compact Branding & Newsletter */}
        <div className="grid lg:grid-cols-12 gap-12 mb-16 items-center border-b border-white/5 pb-16">
          <div className="lg:col-span-7">
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter leading-none text-white mb-6 uppercase">
              Building for <span className="text-primary italic">India.</span> <br />
              Scaling for <span className="text-accent italic">The World.</span>
            </h2>
            <p className="text-blue-100/60 text-lg font-medium max-w-xl">
              Engineering world-class technical cores designed for absolute exponential growth.
            </p>
          </div>

          <div className="lg:col-span-5">
            <div className="bg-white/5 p-8 rounded-[3rem] border border-white/10 backdrop-blur-xl">
              <form onSubmit={handleSubmit} className="relative">
                <input
                  type="email"
                  placeholder="STRATEGIC UPDATES: ENTER EMAIL..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-xs font-black text-white placeholder:text-slate-500 focus:outline-none focus:border-accent transition-all pr-16 uppercase tracking-widest"
                />
                <button type="submit" className="absolute right-2 top-2 bottom-2 bg-white text-secondary w-12 rounded-xl flex items-center justify-center hover:bg-accent hover:text-white transition-all shadow-xl">
                  <FaPaperPlane size={14} />
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Middle Tier: Unified Identity Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16 border-b border-white/5 items-start">
          {/* 1. Connect */}
          <div className="space-y-6">
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-accent leading-none">Connect</h4>
            <div className="flex gap-4">
              {[FaLinkedinIn, FaInstagram, FaFacebookF].map((Icon, i) => (
                <a key={i} href="#" className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-lg hover:bg-primary transition-all">
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* 2. Contact */}
          <div className="space-y-6">
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-accent leading-none">Inquiries</h4>
            <div className="space-y-4">
              <a href="mailto:admin@gdinexus.in" className="flex items-center gap-3 text-sm font-bold text-white hover:text-primary transition-all">
                <FaEnvelope className="text-primary" /> admin@gdinexus.in
              </a>
              <a href="tel:+917483648727" className="flex items-center gap-3 text-sm font-bold text-white hover:text-primary transition-all">
                <FaPhone className="text-primary" /> +91 7483648727
              </a>
            </div>
          </div>

          {/* 3. Global Identifiers */}
          <div className="lg:col-span-2 space-y-6">
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-accent leading-none">Global Identifiers</h4>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
               {[
                 { label: "UEI", val: "J5QSUA5GP9M5" },
                 { label: "DUNS", val: "119194692" },
                 { label: "CAGE", val: "9SXZ4" },
                 { label: "PAN", val: "ABBFG6793J" }
               ].map((id, i) => (
                 <div key={i}>
                   <p className="text-[8px] font-black text-primary uppercase mb-1">{id.label}</p>
                   <p className="text-[10px] font-bold text-white tracking-tighter">{id.val}</p>
                 </div>
               ))}
            </div>
          </div>
        </div>

        {/* Bottom Tier: Certifications & Legal */}
        <div className="py-12 flex flex-col xl:flex-row items-center justify-between gap-12">
          {/* Left Side: SBA SDVOSB */}
          <div className="flex items-center gap-6 bg-white/5 px-8 py-4 rounded-2xl border border-white/10">
             <img src={sdvosbLogo} alt="SBA SDVOSB" className="h-16 w-auto" />
             <div className="text-left border-l border-white/10 pl-6">
                <p className="text-[9px] font-black text-accent uppercase tracking-widest">SBA SDVOSB Partner</p>
                <p className="text-[10px] font-black text-blue-100/40 uppercase tracking-tighter">GST: 33ABBFG6793J1Z3 | TAN: CMBG08053D</p>
             </div>
          </div>
          
          {/* Right Side: Global Partners & ISO */}
          <div className="flex flex-wrap justify-center xl:justify-end gap-6">
            <div className="flex items-center gap-6 bg-white/5 px-8 py-4 rounded-2xl border border-white/10">
               <img src={microsoftLogo} alt="Microsoft Cloud Partner" className="h-10 w-auto" />
               <div className="text-left border-l border-white/10 pl-6">
                  <p className="text-[9px] font-black text-primary uppercase tracking-widest">Microsoft</p>
                  <p className="text-[10px] font-bold text-white uppercase tracking-widest">Cloud Service Partner</p>
               </div>
            </div>
            <div className="flex items-center gap-6 bg-white/5 px-8 py-4 rounded-2xl border border-white/10">
               <img src={isoLogo} alt="ISO 27001:2022" className="h-10 w-auto" />
               <div className="text-left border-l border-white/10 pl-6">
                  <p className="text-[9px] font-black text-accent uppercase tracking-widest">Security Standard</p>
                  <p className="text-[10px] font-bold text-white uppercase tracking-widest">ISO 27001:2022</p>
               </div>
            </div>
          </div>
        </div>

        <div className="py-12 flex flex-col lg:flex-row items-center justify-between gap-12 border-t border-white/5">
          <div className="text-center lg:text-right w-full">
             <div className="flex justify-center lg:justify-end gap-8 mb-4">
                <Link to="/privacy" className="text-[10px] font-black text-blue-100/40 hover:text-white uppercase tracking-widest transition-all">Privacy Protocol</Link>
                <Link to="/terms" className="text-[10px] font-black text-blue-100/40 hover:text-white uppercase tracking-widest transition-all">Terms of Service</Link>
             </div>
             <p className="text-[9px] font-black text-blue-100/20 uppercase tracking-[0.4em]">
                © {new Date().getFullYear()} GDI Nexus Software Solutions LLP.
             </p>
          </div>
        </div>
      </div>

      <button onClick={scrollToTop} className="fixed bottom-10 right-10 w-16 h-16 bg-white text-secondary rounded-2xl shadow-2xl z-50 flex items-center justify-center hover:bg-accent hover:text-white transition-all border border-slate-100">
        <FaArrowUp />
      </button>
    </footer>
  );
}

export default Footer;