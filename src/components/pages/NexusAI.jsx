import React, { useState, useEffect, useRef } from "react";
import { FaPaperPlane, FaTimes, FaFingerprint } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";

// 🔹 API ENDPOINT
const API_URL = `${import.meta.env.VITE_API_BASE_URL}/api/Chat`;
// const API_URL = "/api/Chat";

const NexusAI = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const chatEndRef = useRef(null);

  const [messages, setMessages] = useState([
    {
      role: "ai",
      content:
        "Authentication successful. Accessing neural architecture for GDI. How shall we proceed?"
    }
  ]);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "end"
    });
  }, [messages]);

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
      let errorMessage = "Protocol failure. Nexus Core unreachable.";

      if (error.code === "ECONNABORTED") {
        errorMessage = "Response timeout. Nexus Core is thinking too long.";
      }
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
                  className="w-10 h-10 rounded-2xl bg-slate-950 text-white flex items-center justify-center"
                >
                  <FaTimes size={12} />
                </button>
              </div>
            </div>

            {/* CHAT STREAM */}
            <div className="flex-grow px-6 overflow-y-auto space-y-6">
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
                <p className="text-xs text-slate-400 italic">
                  Nexus Core processing…
                </p>
              )}

              {/* 👇 SCROLL TARGET */}
              <div ref={chatEndRef} />
            </div>

            {/* INPUT */}
            <div className="p-10">
              <div className="flex items-center bg-white border rounded-xl p-2">
                <input
                  type="text"
                  placeholder="Enter Command..."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSend()}
                  disabled={loading}
                  className="flex-grow px-5 py-4 outline-none font-bold"
                />
                <button
                  onClick={handleSend}
                  disabled={loading}
                  className="w-12 h-12 bg-slate-950 text-white rounded-2xl flex items-center justify-center disabled:opacity-50"
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
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 bg-white rounded-xl shadow-xl flex items-center justify-center"
      >
        {!isOpen ? <FaFingerprint size={22} /> : <FaTimes size={20} />}
        <motion.div
          animate={{ top: ["-100%", "200%"] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
          className="absolute left-0 w-full h-[2px] bg-[var(--grms-blue)]/30 shadow-[0_0_10px_var(--grms-blue)] pointer-events-none"
        />
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
