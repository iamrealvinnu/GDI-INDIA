import React, { useState } from "react";
import { FaPaperPlane, FaTimes, FaFingerprint } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const NexusAI = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");

  return (
    <div className="fixed right-8 bottom-8 z-[1000]">
      {" "}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{
              opacity: 0,
              y: 100,
              scale: 0.9,
              clipPath: "inset(100% 0% 0% 0%)"
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
              clipPath: "inset(0% 0% 0% 0%)"
            }}
            exit={{
              opacity: 0,
              y: 100,
              scale: 0.9,
              clipPath: "inset(100% 0% 0% 0%)"
            }}
            transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
            className="absolute right-0 bottom-6 md:bottom-12 w-[90vw] max-w-[420px] max-h-[85vh] h-auto bg-white/60 backdrop-blur-3xl border border-white/40 rounded-3xl shadow-[0_80px_150px_rgba(0,0,0,0.15)] flex flex-col overflow-hidden"
          >
            {/* --- HEADER --- */}
            <div className="px-10 pt-14 pb-8">
              <div className="flex justify-between items-start">
                <div className="space-y-1">
                  <motion.h2
                    initial={{ letterSpacing: "0.2em", opacity: 0 }}
                    animate={{ letterSpacing: "0.4em", opacity: 1 }}
                    className="text-[9px] font-black text-[var(--grms-blue)] uppercase"
                  >
                    Intelligence Terminal
                  </motion.h2>
                  <h1 className="text-3xl font-black text-slate-950 tracking-tighter uppercase italic leading-none">
                    NEXUS <span className="text-[var(--grms-blue)]">CORE</span>
                  </h1>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-10 h-10 rounded-2xl bg-slate-950 text-white flex items-center justify-center hover:scale-110 transition-transform shadow-lg"
                >
                  <FaTimes size={12} />
                </button>
              </div>

              {/* --- PROTOCOL STATUS --- */}
              <div className="flex items-center gap-3 mt-8 p-3 bg-blue-50/50 rounded-xl border border-blue-100/50 shadow-sm">
                <div className="flex gap-1.5">
                  <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse shadow-[0_0_8px_rgba(37,99,235,0.6)]"></span>
                  <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse delay-75"></span>
                </div>
                <span className="text-[10px] font-black text-slate-900 uppercase tracking-[0.25em]">
                  PROTOCOL:{" "}
                  <span className="text-[var(--grms-blue)]">
                    ACTIVE EXECUTION
                  </span>
                </span>
              </div>
            </div>

            {/* --- CHAT STREAM --- */}
            <div className="flex-grow px-10 overflow-y-auto space-y-8 scrollbar-hide">
              <div className="space-y-4">
                <div className="inline-block px-8 py-6 bg-white/90 rounded-2xl rounded-tl-none border border-white shadow-sm">
                  <p className="text-sm font-bold text-slate-800 leading-relaxed">
                    Authentication successful. Accessing neural architecture for
                    GDI. <br />
                    <span className="text-[var(--grms-blue)] font-black">
                      How shall we proceed?
                    </span>
                  </p>
                </div>
                <p className="text-[8px] font-black text-slate-400 uppercase tracking-widest ml-6">
                  Secure Entry 01 // Deterministic Log
                </p>
              </div>
            </div>

            {/* --- INPUT TRAY --- */}
            <div className="p-10">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-[var(--grms-blue)] to-indigo-500 rounded-3xl blur opacity-10 group-focus-within:opacity-20 transition-opacity"></div>
                <div className="relative flex items-center bg-white border border-slate-100 rounded-xl p-2 shadow-inner">
                  <input
                    type="text"
                    placeholder="Enter Command..."
                    className="flex-grow bg-transparent px-5 py-4 outline-none font-bold text-slate-800 placeholder:text-slate-300 text-sm"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                  />
                  <button className="w-12 h-12 bg-slate-950 text-white rounded-2xl flex items-center justify-center hover:bg-[var(--grms-blue)] transition-all shadow-xl">
                    <FaPaperPlane size={14} />
                  </button>
                </div>
              </div>
              <div className="flex gap-2.5 mt-6 justify-center">
                {["Architecture", "Governance","Vinay" ].map((tag) => (
                  <button
                    key={tag}
                    className="text-[8px] font-black uppercase tracking-widest text-slate-500 border border-slate-200 px-4 py-2 rounded-full hover:bg-[var(--grms-blue)] hover:text-white transition-all bg-white/50"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* --- TRIGGER ORB --- */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="relative group"
      >
        <div className="absolute -inset-4 bg-[var(--grms-blue)]/20 rounded-full blur-2xl group-hover:bg-[var(--grms-blue)]/40 transition-all" />

        <div className="relative w-16 h-16 bg-white border border-slate-100 rounded-xl flex items-center justify-center shadow-[0_20px_50px_rgba(0,0,0,0.1)] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-transparent to-slate-50 opacity-50" />

          <AnimatePresence mode="wait">
            {!isOpen ? (
              <motion.div
                key="brain"
                initial={{ opacity: 0, rotate: -45 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 45 }}
                className="text-[var(--grms-blue)] text-2xl"
              >
                <FaFingerprint />
              </motion.div>
            ) : (
              <motion.div
                key="close"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-slate-950 text-xl"
              >
                <FaTimes />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Biometric Scanner Line */}
          <motion.div
            animate={{ top: ["-100%", "200%"] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
            className="absolute left-0 w-full h-[2px] bg-[var(--grms-blue)]/30 shadow-[0_0_10px_var(--grms-blue)] pointer-events-none"
          />
        </div>

        {/* Tooltip */}
        <div className="absolute right-20 top-1/2 -translate-y-1/2 px-4 py-2 bg-slate-950 text-white rounded-xl opacity-0 group-hover:opacity-100 transition-all pointer-events-none shadow-2xl">
          <p className="text-[8px] font-black tracking-[0.2em] uppercase whitespace-nowrap italic">
            Terminal: Ready
          </p>
        </div>
      </motion.button>
    </div>
  );
};

export default NexusAI;
