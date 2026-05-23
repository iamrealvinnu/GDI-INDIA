import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import loadingLogo from "../assets/loading-logo.png";

const Preloader = ({ onFinish }) => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // 1. Reveal completes at 1.2s.
    // 2. We finish the preloader immediately after the reveal to trigger the unmount & exit animation.
    const timer = setTimeout(() => {
      setIsReady(true);
      setTimeout(onFinish, 800); // Fast finish for instant home page entry
    }, 1300);

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="fixed inset-0 z-[10000] bg-[#F8FAFC] flex flex-col items-center justify-center overflow-hidden"
    >
      
      {/* 1. THE ISOMETRIC SCHEMATIC PLANE */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.15 }}
          transition={{ duration: 1.5 }}
          style={{ 
            perspective: "1000px", 
            width: "300vw", 
            height: "300vh", 
            transformStyle: "preserve-3d" 
          }}
        >
          <motion.div 
            style={{ 
              rotateX: "60deg", 
              rotateZ: "-45deg", 
              width: "100%", 
              height: "100%",
              backgroundImage: 'linear-gradient(#2563EB 1.5px, transparent 1.5px), linear-gradient(90deg, #2563EB 1.5px, transparent 1.5px)', 
              backgroundSize: '80px 80px'
            }}
            animate={{ 
              backgroundPositionY: ["0px", "80px"],
              backgroundPositionX: ["0px", "80px"]
            }}
            transition={{ 
              duration: 4, 
              repeat: Infinity, 
              ease: "linear" 
            }}
          />
        </motion.div>
      </div>

      {/* 2. THE LIGHT REVEAL LOGO */}
      <div className="relative z-10 flex flex-col items-center">
        {/* The Base Logo (Ghost Layer) */}
        <div className="opacity-[0.04]">
          <img src={loadingLogo} alt="" className="h-80 md:h-[35rem] object-contain" />
        </div>

        {/* The Etching Layer */}
        <motion.div
          initial={{ clipPath: "inset(100% 0% 0% 0%)" }}
          animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
          transition={{ duration: 1.2, ease: [0.65, 0, 0.35, 1] }}
          className="absolute inset-0"
        >
          <img src={loadingLogo} alt="GDI Nexus" className="h-80 md:h-[35rem] object-contain" />
        </motion.div>

        {/* The Sweeping Light Beam */}
        <motion.div 
          initial={{ top: "100%", opacity: 0 }}
          animate={{ top: "-20%", opacity: [0, 1, 0] }}
          transition={{ duration: 1.2, ease: [0.65, 0, 0.35, 1] }}
          className="absolute inset-x-[-20%] h-px bg-primary shadow-[0_0_60px_15px_rgba(37,99,235,0.4)] z-20 pointer-events-none"
        />

        {/* The Adapted Architectural Tagline */}
        <div className="relative mt-12 h-8 flex items-center justify-center overflow-hidden">
          {/* Ghost Tagline */}
          <div className="opacity-[0.05] text-[10px] md:text-[12px] font-black text-secondary uppercase tracking-[1em] ml-[1em] whitespace-nowrap">
            Intelligent Software Global Scale
          </div>
          
          {/* Revealed Tagline (Synchronized Etching) */}
          <motion.div
            initial={{ clipPath: "inset(100% 0% 0% 0%)" }}
            animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
            transition={{ duration: 1.5, ease: [0.65, 0, 0.35, 1], delay: 0.8 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <span className="text-[10px] md:text-[12px] font-black text-secondary/60 uppercase tracking-[1em] ml-[1em] whitespace-nowrap">
              Intelligent Software Global Scale
            </span>
          </motion.div>
        </div>
      </div>

    </motion.div>
  );
};

export default Preloader;