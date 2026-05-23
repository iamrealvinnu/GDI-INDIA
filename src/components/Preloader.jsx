import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gdiLogo from "../assets/gdi_logo1.png";

const Preloader = ({ onFinish }) => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // Deliberate, expensive timing for an established firm
    const timer = setTimeout(() => {
      setIsReady(true);
      setTimeout(onFinish, 1800); // Wait for the 'Light Expansion' to complete
    }, 4500);

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="fixed inset-0 z-[10000] bg-[#F8FAFC] flex flex-col items-center justify-center overflow-hidden">
      
      {/* 1. THE MONOLITH WATERMARK */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <motion.h2 
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 0.04, scale: 1 }}
          transition={{ duration: 4, ease: [0.22, 1, 0.36, 1] }}
          className="text-[25vw] font-black tracking-tighter text-slate-900 leading-none whitespace-nowrap"
        >
          GDI NEXUS
        </motion.h2>
      </div>

      {/* 2. THE LIGHT REVEAL LOGO */}
      <div className="relative">
        {/* The Base Logo (Ghost Layer) */}
        <div className="opacity-[0.03]">
          <img src={gdiLogo} alt="" className="h-48 md:h-64 object-contain" />
        </div>

        {/* The Etching Logo (Revealed Layer) */}
        <motion.div
          initial={{ clipPath: "inset(100% 0% 0% 0%)" }}
          animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
          transition={{ duration: 3, ease: [0.65, 0, 0.35, 1], delay: 0.5 }}
          className="absolute inset-0"
        >
          <img src={gdiLogo} alt="GDI Nexus" className="h-48 md:h-64 object-contain" />
        </motion.div>

        {/* The Sweeping Light Beam */}
        <motion.div 
          initial={{ top: "100%", opacity: 0 }}
          animate={{ top: "-20%", opacity: [0, 1, 0] }}
          transition={{ duration: 3, ease: [0.65, 0, 0.35, 1], delay: 0.5 }}
          className="absolute inset-x-[-20%] h-px bg-primary shadow-[0_0_60px_15px_rgba(37,99,235,0.4)] z-20 pointer-events-none"
        />
      </div>

      {/* 4. THE LIGHT EXPANSION EXIT (IRIS) */}
      <AnimatePresence>
        {isReady && (
          <motion.div 
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 20, opacity: 1 }}
            transition={{ duration: 1.8, ease: [0.76, 0, 0.24, 1] }}
            className="absolute z-50 w-24 h-24 bg-[#F8FAFC] rounded-full"
          />
        )}
      </AnimatePresence>

    </div>
  );
};

export default Preloader;