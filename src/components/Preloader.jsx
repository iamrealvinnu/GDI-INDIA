import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import loadingLogo from "../assets/loading-logo.png";

const Preloader = ({ onFinish }) => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsReady(true);
      setTimeout(onFinish, 1800); 
    }, 3500);

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="fixed inset-0 z-[10000] bg-[#F8FAFC] flex flex-col items-center justify-center overflow-hidden">
      
      {/* 1. THE MONOLITH WATERMARK (GDI NEXUS + SOFTW4RE SOLUTIONS) */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none select-none text-center">
        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 0.04, scale: 1 }}
          transition={{ duration: 4, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center w-full px-4"
        >
          <h2 className="text-[15vw] md:text-[12vw] font-black tracking-tighter text-slate-900 leading-none uppercase whitespace-nowrap">
            GDI NEXUS
          </h2>
          <h3 className="text-[4.5vw] md:text-[3vw] font-bold tracking-[0.3em] md:tracking-[0.45em] text-slate-900 uppercase mt-2 md:mt-4 whitespace-nowrap">
            SOFTWARE SOLUTIONS
          </h3>
        </motion.div>
      </div>

      {/* 2. THE LIGHT REVEAL LOGO */}
      <div className="relative">
        {/* The Base Logo (Ghost Layer) */}
        <div className="opacity-[0.03]">
          <img src={loadingLogo} alt="" className="h-[20rem] md:h-[35rem] object-contain" />
        </div>

        {/* The Etching Logo (Revealed Layer) */}
        <motion.div
          initial={{ clipPath: "inset(100% 0% 0% 0%)" }}
          animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
          transition={{ duration: 3, ease: [0.65, 0, 0.35, 1], delay: 0.5 }}
          className="absolute inset-0"
        >
          <img src={loadingLogo} alt="GDI Nexus" className="h-[20rem] md:h-[35rem] object-contain" />
        </motion.div>

        {/* The Sweeping Light Beam */}
        <motion.div 
          initial={{ top: "100%", opacity: 0 }}
          animate={{ top: "-20%", opacity: [0, 1, 0] }}
          transition={{ duration: 3, ease: [0.65, 0, 0.35, 1], delay: 0.5 }}
          className="absolute inset-x-[-30%] h-px bg-primary shadow-[0_0_80px_20px_rgba(37,99,235,0.4)] z-20 pointer-events-none"
        />
      </div>

      {/* 3. THE LIGHT EXPANSION EXIT (IRIS) */}
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