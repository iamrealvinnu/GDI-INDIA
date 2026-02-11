import React, { useState, useEffect, useRef } from "react";
import { FaPaperPlane, FaTimes, FaFingerprint } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";

// 🔹 API ENDPOINT
const API_URL = `${import.meta.env.VITE_API_BASE_URL}/api/Chat`;

const NexusAI = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const chatEndRef = useRef(null);
  const inputRef = useRef(null); // New ref for input focus

  const [messages, setMessages] = useState([
    {
      role: "ai",
      content:
        "Authentication successful. Accessing neural architecture for GDI. How shall we proceed?"
    }
  ]);

  // Focus input when chat opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  }, [isOpen]);

  // Scroll to bottom when messages change
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "end"
    });
  }, [messages]);

  // Auto-focus input after sending message
  useEffect(() => {
    if (!loading && isOpen && inputRef.current) {
      inputRef.current?.focus();
    }
  }, [loading, isOpen]);

  // 🔹 SEND MESSAGE
  const handleSend = async () => {
    if (!input.trim() || loading) return;

    const userMessage = input;

    // Add user message
    setMessages((prev) => [...prev, { role: "user", content: userMessage }]);

    setInput("");
    setLoading(true);

    try {
      const response = await axios.post(
        API_URL,
        { message: userMessage },
        {
          headers: {
            "Content-Type": "application/json"
          },
          timeout: 5000
        }
      );

      setMessages((prev) => [
        ...prev,
        { role: "ai", content: response.data.answer }
      ]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          role: "ai",
          content: "Protocol failure. Nexus Core unreachable."
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  // Handle Enter key press
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="fixed right-8 bottom-8 z-[1000]">
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
            className="absolute right-0 bottom-6 md:bottom-12 w-[90vw] max-w-[420px] max-h-[85vh] bg-white/60 backdrop-blur-3xl border border-white/40 rounded-3xl shadow-[0_80px_150px_rgba(0,0,0,0.15)] flex flex-col overflow-hidden"
            onClick={() => inputRef.current?.focus()} // Click anywhere in chat to focus input
          >
            {/* HEADER */}
            <div className="px-10 pt-14 pb-8">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-[9px] font-black text-blue-600 uppercase tracking-[0.4em]">
                    Intelligence Terminal
                  </h2>
                  <h1 className="text-3xl font-black uppercase italic">
                    NEXUS <span className="text-blue-600">CORE</span>
                  </h1>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-10 h-10 rounded-2xl bg-slate-950 text-white flex items-center justify-center hover:bg-slate-800 transition-colors"
                >
                  <FaTimes size={12} />
                </button>
              </div>
            </div>

            {/* CHAT STREAM */}
            <div className="flex-grow px-6 overflow-y-auto space-y-6 pb-4">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex ${
                    msg.role === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`px-4 py-4 rounded-xl max-w-[85%] font-bold
                 ${
                   msg.role === "user"
                     ? "bg-blue-600 text-white rounded-br-none"
                     : "bg-white text-slate-800 rounded-tl-none"
                 }`}
                  >
                    {msg.content}
                  </div>
                </div>
              ))}

              {loading && (
                <div className="flex justify-start">
                  <div className="px-4 py-4 rounded-xl bg-white text-slate-800 rounded-tl-none font-bold animate-pulse">
                    Nexus Core processing…
                  </div>
                </div>
              )}

              {/* 👇 SCROLL TARGET */}
              <div ref={chatEndRef} />
            </div>

            {/* INPUT */}
            <div className="p-10 pt-4">
              <div className="flex items-center bg-white border border-gray-200 rounded-xl p-2 hover:border-blue-400 transition-colors">
                <input
                  ref={inputRef} // Attach ref here
                  type="text"
                  placeholder="Enter Command..."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  disabled={loading}
                  className="flex-grow px-5 py-4 outline-none font-bold bg-transparent placeholder:text-gray-400"
                  autoFocus
                />
                <button
                  onClick={handleSend}
                  disabled={loading || !input.trim()}
                  className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all ${
                    loading || !input.trim()
                      ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                      : "bg-slate-950 text-white hover:bg-blue-600 hover:scale-105 active:scale-95"
                  }`}
                >
                  <FaPaperPlane size={14} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* TRIGGER */}
      <motion.button
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-16 h-16 bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-xl flex items-center justify-center relative group hover:shadow-2xl transition-all"
      >
        {!isOpen ? (
          <FaFingerprint size={22} className="text-blue-600" />
        ) : (
          <FaTimes size={20} className="text-blue-600" />
        )}
        
        {/* Animated border */}
        <motion.div
          animate={{ 
            top : ["-100%", "200%"],
            transition: { 
              duration: 3, 
              repeat: Infinity, 
              ease: "linear" 
            } 
          }}
          className="absolute inset-0 rounded-xl border-2 border-transparent border-t-blue-400/50 pointer-events-none"
        />

        {/* Tooltip */}
        <div className="absolute right-20 top-1/2 -translate-y-1/2 px-4 py-2 bg-slate-950 text-white rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none shadow-2xl whitespace-nowrap">
          <p className="text-[8px] font-black tracking-[0.2em] uppercase italic">
            Terminal: {isOpen ? "Active" : "Ready"}
          </p>
        </div>
      </motion.button>
    </div>
  );
};

export default NexusAI;