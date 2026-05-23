import React, { useState, useEffect, useRef } from "react";
import {
  FaPaperPlane,
  FaTimes,
  FaFingerprint,
  FaChevronLeft,
  FaCheckCircle,
  FaUsers,
  FaWarehouse,
  FaGraduationCap,
  FaBrain,
  FaLaptopCode,
  FaUserMd,
  FaArrowRight
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";
import { Link } from "react-router-dom";

const operationalProducts = [
  {
    name: "Talentics ERP",
    category: "operations",
    oneLiner: "Advanced Talent Management",
    description: "Enterprise-grade ERP for talent acquisition, payroll, and performance tracking with integrated AI insights.",
    icon: <FaUsers />,
    features: ["Automated Payroll", "Performance Scoring", "Resource Allocation"],
    price: "Seat-based Licensing",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Nexus WMS",
    category: "operations",
    oneLiner: "Intelligent Warehousing",
    description: "Real-time warehouse and asset management system designed for global logistics and high-volume tracking.",
    icon: <FaWarehouse />,
    features: ["Inventory Tracking", "IoT Integration", "Predictive Logistics"],
    price: "Asset-based Pricing",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Skillytics AI",
    category: "ai",
    oneLiner: "Workforce Intelligence",
    description: "Data-driven workforce assessment platform using AI to identify skill gaps and optimize team performance.",
    icon: <FaBrain />,
    features: ["Competency Mapping", "Skill Gap Analysis", "Growth Forecasting"],
    price: "Analytics Package",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Nexus LMS",
    category: "education",
    oneLiner: "Scalable Learning",
    description: "Powerful learning management system for corporate training and educational institutions with adaptive paths.",
    icon: <FaGraduationCap />,
    features: ["Course Automation", "Certification Engine", "User Analytics"],
    price: "User-based Subscription",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Hospital Pro",
    category: "healthcare",
    oneLiner: "Healthcare Management",
    description: "End-to-end hospital management system for patient records, billing, and intelligent scheduling.",
    icon: <FaUserMd />,
    features: ["Electronic Health Records", "Appointment AI", "Medical Billing"],
    price: "Hospital-based Licensing",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80"
  }
];

const API_URL = `${import.meta.env.VITE_API_BASE_URL}/Chat`;

const ProductCardChat = ({ product, onSelect }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    onClick={() => onSelect(product)}
    className="bg-white rounded-[2rem] border border-slate-100 overflow-hidden hover:shadow-xl transition-all cursor-pointer group"
  >
    <div className="relative h-40">
      <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
      <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-500" />
    </div>
    <div className="p-6">
      <div className="flex items-start gap-4 mb-4">
        <div className="w-10 h-10 bg-primary/5 text-primary rounded-xl flex items-center justify-center text-lg">
          {product.icon}
        </div>
        <div>
          <h4 className="font-black text-charcoal text-sm uppercase tracking-tight">{product.name}</h4>
          <p className="text-[10px] text-primary font-black uppercase tracking-widest">{product.oneLiner}</p>
        </div>
      </div>
      <div className="flex items-center justify-between mt-6 pt-4 border-t border-slate-50">
        <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{product.price}</span>
        <FaArrowRight className="text-primary text-sm group-hover:translate-x-1 transition-transform" />
      </div>
    </div>
  </motion.div>
);

const ProductDetailsModal = ({ product, onClose, onBack }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 bg-secondary/95 backdrop-blur-xl z-[2000] flex items-center justify-center p-4"
    onClick={onClose}
  >
    <motion.div
      initial={{ scale: 0.9, opacity: 0, y: 50 }}
      animate={{ scale: 1, opacity: 1, y: 0 }}
      exit={{ scale: 0.9, opacity: 0, y: 50 }}
      className="bg-white rounded-[4rem] max-w-3xl max-h-[90vh] overflow-hidden w-full flex flex-col shadow-2xl"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="relative h-64 md:h-80 overflow-hidden">
        <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-charcoal/30" />
        <button onClick={onClose} className="absolute top-8 right-8 w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white hover:text-charcoal transition-all shadow-xl">
          <FaTimes size={20} />
        </button>
      </div>
      <div className="p-10 md:p-16 flex-grow overflow-y-auto">
        <div className="flex items-center gap-6 mb-8">
           <div className="w-20 h-20 bg-primary/5 text-primary rounded-[1.5rem] flex items-center justify-center text-4xl shadow-inner">
             {product.icon}
           </div>
           <div>
              <h2 className="text-4xl font-black text-charcoal uppercase tracking-tighter leading-none">{product.name}</h2>
              <p className="text-xs font-black text-primary uppercase tracking-[0.3em] mt-2">{product.oneLiner}</p>
           </div>
        </div>
        <p className="text-slate-500 text-lg leading-relaxed mb-10 font-medium">{product.description}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
          {product.features.map((f, i) => (
            <div key={i} className="flex items-center gap-4 p-5 bg-warm-white rounded-[1.5rem] border border-slate-100 shadow-sm">
              <FaCheckCircle className="text-primary text-lg" />
              <span className="text-sm font-black text-slate-700 uppercase tracking-tight">{f}</span>
            </div>
          ))}
        </div>
        <div className="flex flex-col sm:flex-row gap-6">
           <button onClick={onBack} className="flex-1 px-10 py-6 bg-slate-100 text-slate-500 rounded-[2rem] font-black uppercase text-xs tracking-[0.2em] hover:bg-slate-200 transition-all">
             BACK TO TERMINAL
           </button>
           <Link to="/contact" onClick={onClose} className="flex-[2] px-10 py-6 bg-primary text-white text-center rounded-[2rem] font-black uppercase text-xs tracking-[0.2em] hover:bg-secondary transition-all shadow-2xl shadow-primary/20">
             DISCUSS DEPLOYMENT
           </Link>
        </div>
      </div>
    </motion.div>
  </motion.div>
);

const NexusAI = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [productView, setProductView] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const chatEndRef = useRef(null);
  const inputRef = useRef(null);
  const messagesContainerRef = useRef(null);

  const [messages, setMessages] = useState([
    {
      role: "ai",
      content: "Nexus Intelligence Terminal initialized. State your query or request a technical briefing.",
      type: "text"
    }
  ]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 150);
      if (messagesContainerRef.current) {
        messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
      }
    }
  }, [isOpen]);

  useEffect(() => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const productKeywords = ["product", "solution", "erp", "wms", "ai", "lms", "hospital", "software", "catalog", "list"];

  const handleSend = async () => {
    if (!input.trim() || loading) return;

    const userMsg = input.trim();
    setMessages((prev) => [...prev, { role: "user", content: userMsg, type: "text" }]);
    setInput("");
    setLoading(true);

    const isProductQuery = productKeywords.some(k => userMsg.toLowerCase().includes(k));

    if (isProductQuery) {
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          { role: "ai", content: "Retrieving operational product suite from secure repository...", type: "text" },
          { role: "ai", content: operationalProducts, type: "products" }
        ]);
        setLoading(false);
      }, 600);
    } else {
      try {
        const res = await axios.post(API_URL, { message: userMsg }, { headers: { "Content-Type": "application/json" }, timeout: 5000 });
        setMessages((prev) => [...prev, { role: "ai", content: res.data.answer, type: "text" }]);
      } catch (err) {
        setMessages((prev) => [...prev, { role: "ai", content: "Terminal error: Communication protocol failure. Please utilize manual contact channels.", type: "text" }]);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <>
      <AnimatePresence>
        {productView === "details" && selectedProduct && (
          <ProductDetailsModal 
            product={selectedProduct} 
            onClose={() => { setProductView(null); setSelectedProduct(null); }} 
            onBack={() => { setProductView(null); setSelectedProduct(null); }} 
          />
        )}
      </AnimatePresence>

      <div className="fixed right-6 bottom-6 md:right-10 md:bottom-10 z-[1000]">
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.9, rotate: 2 }}
              animate={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, y: 50, scale: 0.9, rotate: -2 }}
              className="absolute right-0 bottom-24 w-[90vw] sm:w-[450px] md:w-[500px] h-[75vh] max-h-[800px] bg-white rounded-[3rem] border border-slate-100 shadow-[0_50px_120px_rgba(0,0,0,0.15)] flex flex-col overflow-hidden"
            >
              {/* HEADER */}
              <div className="px-10 pt-12 pb-8 bg-white border-b border-slate-50 flex justify-between items-center">
                <div>
                  <h2 className="text-[10px] font-black text-primary uppercase tracking-[0.5em] mb-2 leading-none">Intelligence Terminal</h2>
                  <h1 className="text-3xl font-black text-charcoal uppercase tracking-tighter italic leading-none">NEXUS <span className="text-primary">CORE</span></h1>
                </div>
                <button onClick={() => setIsOpen(false)} className="w-12 h-12 bg-warm-white text-slate-400 rounded-2xl flex items-center justify-center hover:bg-primary hover:text-white transition-all shadow-inner">
                  <FaTimes />
                </button>
              </div>

              {/* MESSAGES */}
              <div ref={messagesContainerRef} className="flex-grow p-8 overflow-y-auto space-y-8 scroll-smooth bg-warm-white/30">
                {messages.map((msg, i) => (
                  <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                    {msg.type === "text" ? (
                      <div className={`max-w-[85%] px-6 py-5 rounded-[2rem] text-sm font-black uppercase tracking-tight leading-relaxed ${
                        msg.role === "user" ? "bg-primary text-white rounded-br-none shadow-2xl shadow-primary/20" : "bg-white text-charcoal rounded-tl-none border border-slate-100 shadow-sm"
                      }`}>
                        {msg.content}
                      </div>
                    ) : msg.type === "products" ? (
                      <div className="grid grid-cols-1 gap-6 w-full mt-2">
                        {msg.content.map((p, idx) => (
                          <ProductCardChat key={idx} product={p} onSelect={(p) => { setSelectedProduct(p); setProductView("details"); }} />
                        ))}
                      </div>
                    ) : null}
                  </div>
                ))}
                {loading && (
                  <div className="flex justify-start">
                    <div className="bg-white px-6 py-5 rounded-[2rem] rounded-tl-none border border-slate-100 shadow-sm">
                      <div className="flex gap-3">
                        <div className="w-2 h-2 bg-primary/40 rounded-full animate-bounce" />
                        <div className="w-2 h-2 bg-primary/40 rounded-full animate-bounce [animation-delay:0.2s]" />
                        <div className="w-2 h-2 bg-primary/40 rounded-full animate-bounce [animation-delay:0.4s]" />
                      </div>
                    </div>
                  </div>
                )}
                <div ref={chatEndRef} />
              </div>

              {/* INPUT */}
              <div className="p-8 bg-white border-t border-slate-100">
                <div className="flex items-center gap-4 bg-warm-white p-3 rounded-[2rem] border border-slate-100 focus-within:border-primary focus-within:ring-8 focus-within:ring-primary/5 transition-all">
                  <input
                    ref={inputRef}
                    type="text"
                    placeholder="ENTER COMMAND..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleSend()}
                    className="flex-grow bg-transparent px-5 py-3 outline-none text-xs font-black text-charcoal uppercase tracking-widest placeholder:text-slate-300"
                  />
                  <button onClick={handleSend} disabled={loading || !input.trim()} className="w-12 h-12 bg-primary text-white rounded-2xl flex items-center justify-center hover:bg-secondary transition-all shadow-xl shadow-primary/20">
                    <FaPaperPlane size={16} />
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* TRIGGER */}
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.05, rotate: 5 }}
          whileTap={{ scale: 0.95 }}
          className="w-20 h-20 bg-white rounded-[2rem] shadow-2xl border border-slate-100 flex items-center justify-center relative group hover:shadow-primary/20 transition-all"
        >
          {isOpen ? <FaTimes size={24} className="text-primary" /> : <FaFingerprint size={32} className="text-primary" />}
          <div className="absolute right-24 top-1/2 -translate-y-1/2 px-6 py-3 bg-secondary text-white rounded-2xl text-[10px] font-black uppercase tracking-[0.4em] opacity-0 group-hover:opacity-100 transition-all whitespace-nowrap pointer-events-none shadow-2xl">
            {isOpen ? "TERMINATE" : "INITIALIZE"}
          </div>
        </motion.button>
      </div>
    </>
  );
};

export default NexusAI;