import React, { useState, useEffect, useRef, useCallback } from "react";
import {
  FaPaperPlane,
  FaTimes,
  FaFingerprint,
  FaExternalLinkAlt,
  FaChevronLeft,
  FaCheckCircle,
  FaUsers,
  FaWarehouse,
  FaGraduationCap,
  FaBrain,
  FaLaptopCode,
  FaCogs,
  FaDumbbell,
  FaUtensils,
  FaAward,
  FaUserMd
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";
import { Link } from "react-router-dom";

// Import your products data (you might want to move this to a shared file)
const operationalProducts = [
  {
    name: "Talentics ERP",
    category: "operations",
    oneLiner: "Comprehensive ERP",
    description:
      "Enterprise Resource Planning for talent management and operational efficiency with AI-driven insights.",
    icon: <FaUsers />,
    features: ["HR Automation", "Payroll Integration", "Performance Analytics"],
    price: "Seat-based Licensing",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "WMS & AMS Pro",
    category: "operations",
    oneLiner: "Advanced Management Suite",
    description:
      "Warehouse and Asset Management System for real-time tracking and logistics optimization.",
    icon: <FaWarehouse />,
    features: [
      "Real-time Tracking",
      "IoT Integration",
      "Predictive Maintenance"
    ],
    price: "Asset-based Pricing",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Nexus LMS",
    category: "operations",
    oneLiner: "Scalable Learning Platform",
    description:
      "Learning Management System for corporate training and educational excellence with adaptive learning paths.",
    icon: <FaGraduationCap />,
    features: [
      "Adaptive Learning",
      "Certification Tracking",
      "Interactive Content"
    ],
    price: "User-based Subscription",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "SKILLYTICS AI",
    category: "operations",
    oneLiner: "Data-Driven Assessments",
    description:
      "Workforce analytics platform with data-driven skill assessments and competency mapping.",
    icon: <FaBrain />,
    features: ["Skill Gap Analysis", "Career Pathing", "Benchmark Analytics"],
    price: "Analytics Package",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "E-BOX Platform",
    category: "operations",
    oneLiner: "Technical Training Suite",
    description:
      "Engineering training platform designed for the next generation with hands-on virtual labs.",
    icon: <FaLaptopCode />,
    features: ["Virtual Labs", "Code Assessment", "Industry Certifications"],
    price: "Course-based Model",
    image:
      "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "OperaFlow Suite",
    category: "operations",
    oneLiner: "Process Automation Core",
    description:
      "End-to-end business process automation with workflow orchestration and compliance tracking.",
    icon: <FaCogs />,
    features: ["Workflow Automation", "Compliance Audit", "Process Mining"],
    price: "Process-based Pricing",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Gym Management System",
    category: "operations",
    oneLiner: "Fitness Intelligence Tracker",
    description:
      "Software suite designed for efficiently managing gyms with advanced tracking.",
    icon: <FaDumbbell />,
    features: [
      "Admin Management",
      "Member Portal",
      "Exercise Tracking",
      "Invoice Creation"
    ],
    price: "Branch-based Licensing",
    image:
      "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Hotel Management System",
    category: "operations",
    oneLiner: "Empire Menu Zone",
    description:
      "Hotel suite designed for simplifying and streamlining hotel operations.",
    icon: <FaUtensils />,
    features: [
      "Table Booking",
      "Menu Ordering",
      "Admin Management",
      "Email Invoice"
    ],
    price: "Outlet-based Licensing",
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Relationship Management System",
    category: "operations",
    oneLiner: "Customer Relationship Suite",
    description:
      "Software system for managing leads, accounts, and ongoing customer interactions.",
    icon: <FaAward />,
    features: [
      "Lead Management",
      "Contact Management",
      "Email Marketing",
      "Task Creation"
    ],
    price: "Process-based Pricing",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Hospital Management System",
    category: "operations",
    oneLiner: "Smart Healthcare Suite",
    description:
      "End-to-end hospital management system for handling patients, appointments, prescriptions, and billing with real-time insights.",
    icon: <FaUserMd />,
    features: [
      "Patient Records",
      "Appointment Scheduling",
      "E-Prescriptions",
      "Billing & Invoicing",
      "Doctor Dashboard"
    ],
    price: "Hospital-based Licensing",
    image:
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80"
  }
];

// 🔹 API ENDPOINT
const API_URL = `${import.meta.env.VITE_API_BASE_URL}/api/Chat`;

// Product Card Component for Chat - FIXED: Handle icon rendering properly
const ProductCardChat = ({ product, onSelect }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-lg transition-all cursor-pointer"
      onClick={() => onSelect(product)}
      whileHover={{ y: -5 }}
    >
      <div className="relative h-40 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-3 right-3">
          <div className="px-2 py-1 bg-[var(--grms-blue)]/90 text-white text-[8px] font-black uppercase tracking-widest rounded-full">
            {product.category}
          </div>
        </div>
      </div>
      <div className="p-4">
        <div className="flex items-start gap-3 mb-2">
          <div className="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center text-lg text-[var(--grms-blue)]">
            {/* Properly render the icon component */}
            {product.icon}
          </div>
          <div>
            <h4 className="font-black text-slate-900 text-sm uppercase">
              {product.name}
            </h4>
            <p className="text-xs text-slate-500">{product.oneLiner}</p>
          </div>
        </div>
        <p className="text-xs text-slate-600 mb-3 line-clamp-2">
          {product.description}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-xs font-black text-[var(--grms-blue)]">
            {product.price}
          </span>
          <span className="text-xs text-slate-400 flex items-center gap-1">
            <FaExternalLinkAlt size={10} /> View
          </span>
        </div>
      </div>
    </motion.div>
  );
};

// Product Details Modal for Chat
const ProductDetailsModal = ({ product, onClose, onBack }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/50 z-[2000] flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-white rounded-[3rem] max-w-4xl max-h-[90vh] overflow-hidden w-full"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="relative h-64 md:h-80 overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

          <div className="absolute bottom-6 left-6 right-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <button
                    onClick={onBack}
                    className="w-10 h-10 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                  >
                    <FaChevronLeft />
                  </button>
                  <span className="px-3 py-1 bg-[var(--grms-blue)] text-white text-[10px] font-black uppercase tracking-widest rounded-full">
                    {product.category}
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-black text-white">
                  {product.name}
                </h2>
                <p className="text-white/80 text-lg">{product.oneLiner}</p>
              </div>
              <div className="text-right">
                <div className="text-2xl font-black text-white">
                  {product.price}
                </div>
                <div className="text-sm text-white/70">Pricing Model</div>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 md:p-10 overflow-y-auto max-h-[50vh]">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h3 className="text-xl font-black text-slate-900 mb-4">
                Description
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {product.description}
              </p>

              <div className="mt-8">
                <h3 className="text-xl font-black text-slate-900 mb-4">
                  Key Features
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {product.features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl"
                    >
                      <FaCheckCircle className="text-emerald-500" />
                      <span className="font-medium text-slate-700">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-slate-50 rounded-2xl p-6">
                <h3 className="text-lg font-black text-slate-900 mb-4">
                  Quick Actions
                </h3>
                <div className="space-y-3">
                  <Link
                    to="/contact"
                    className="block w-full bg-[var(--grms-blue)] text-white text-center py-3 rounded-xl font-black text-sm uppercase tracking-wider hover:bg-blue-600 transition-colors"
                  >
                    Request Demo
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const NexusAI = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [productView, setProductView] = useState(null); // 'list' or 'details'
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [displayedProducts, setDisplayedProducts] = useState([]);
  const chatEndRef = useRef(null);
  const inputRef = useRef(null);
  const messagesContainerRef = useRef(null);

  const [messages, setMessages] = useState([
    {
      role: "ai",
      content:
        "Authentication successful. Accessing neural architecture for GDI. How shall we proceed?",
      type: "text"
    }
  ]);

  // Focus input when chat opens - IMPROVED VERSION
  useEffect(() => {
    if (isOpen) {
      // Small delay to ensure the chat is fully rendered
      const timer = setTimeout(() => {
        if (inputRef.current) {
          inputRef.current.focus();
          // Also scroll to bottom when opening
          if (messagesContainerRef.current) {
            messagesContainerRef.current.scrollTop =
              messagesContainerRef.current.scrollHeight;
          }
        }
      }, 150);

      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  // Scroll to bottom when messages change
  useEffect(() => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop =
        messagesContainerRef.current.scrollHeight;
    }
  }, [messages, displayedProducts]);

  // Auto-focus input after sending message
  useEffect(() => {
    if (!loading && isOpen && inputRef.current) {
      const timer = setTimeout(() => {
        inputRef.current?.focus();
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [loading, isOpen]);

  // Product-related keywords - EXPANDED
  const productKeywords = [
    "products",
    "solutions",
    "offerings",
    "services",
    "talentics",
    "wms",
    "lms",
    "skillytics",
    "e-box",
    "operaflow",
    "erp",
    "warehouse",
    "learning",
    "training",
    "gym",
    "hotel",
    "crm",
    "system",
    "software",
    "platform",
    "suite",
    "show me",
    "list",
    "what do you offer",
    "catalog",
    "show all",
    "all products",
    "everything",
    "complete list",
    "hospital",
    "healthcare"
  ];

  // Enhanced product search function
  const searchProducts = useCallback((query) => {
    const queryLower = query.toLowerCase().trim();

    // Check if user wants to see ALL products
    if (
      queryLower.includes("all") ||
      queryLower.includes("every") ||
      queryLower.includes("complete")
    ) {
      return operationalProducts;
    }

    // Check for specific product matches
    const specificMatches = operationalProducts.filter((product) => {
      const productNameLower = product.name.toLowerCase();
      const productDescriptionLower = product.description.toLowerCase();
      const productFeaturesLower = product.features.join(" ").toLowerCase();
      const productCategoryLower = product.category.toLowerCase();

      return (
        queryLower.includes(productNameLower.split(" ")[0]) ||
        productNameLower.includes(queryLower) ||
        productDescriptionLower.includes(queryLower) ||
        productFeaturesLower.includes(queryLower) ||
        productCategoryLower.includes(queryLower) ||
        queryLower.includes(productCategoryLower)
      );
    });

    // If specific matches found, return them
    if (specificMatches.length > 0) {
      return specificMatches;
    }

    // Check for keyword matches in query
    const keywordMatches = operationalProducts.filter((product) => {
      const productText =
        `${product.name} ${product.description} ${product.features.join(" ")} ${product.oneLiner}`.toLowerCase();
      return productKeywords.some(
        (keyword) =>
          queryLower.includes(keyword) && productText.includes(keyword)
      );
    });

    // If keyword matches found, return them
    if (keywordMatches.length > 0) {
      return keywordMatches;
    }

    // If no matches, return ALL products instead of just 3
    return operationalProducts;
  }, []);

  // Enhanced API handler
  const handleSend = async () => {
    if (!input.trim() || loading) return;

    const userMessage = input.trim();
    const userMessageLower = userMessage.toLowerCase();
    const userMessageObj = { role: "user", content: userMessage, type: "text" };

    // Add user message
    setMessages((prev) => [...prev, userMessageObj]);
    setInput("");
    setLoading(true);

    // Check if message is product-related
    const isProductQuery = productKeywords.some((keyword) =>
      userMessageLower.includes(keyword)
    );

    if (isProductQuery) {
      // Show products in chat
      setTimeout(() => {
        const foundProducts = searchProducts(userMessage);

        setDisplayedProducts(foundProducts);
        setProductView("list");

        const aiResponse =
          foundProducts.length === operationalProducts.length
            ? `Showing all ${foundProducts.length} operational excellence products. Click any product to view details:`
            : foundProducts.length > 0
              ? `Found ${foundProducts.length} products matching your query. Click any product to view details:`
              : `I couldn't find specific products matching your query. Here are all our products:`;

        setMessages((prev) => [
          ...prev,
          {
            role: "ai",
            content: aiResponse,
            type: "text"
          },
          {
            role: "ai",
            content:
              foundProducts.length > 0 ? foundProducts : operationalProducts,
            type: "products"
          }
        ]);
        setLoading(false);
      }, 300);
    } else {
      // Regular API call for other queries
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
          { role: "ai", content: response.data.answer, type: "text" }
        ]);
      } catch (error) {
        setMessages((prev) => [
          ...prev,
          {
            role: "ai",
            content: "Protocol failure. Nexus Core unreachable.",
            type: "text"
          }
        ]);
      } finally {
        setLoading(false);
      }
    }
  };

  // Handle product selection
  const handleProductSelect = (product) => {
    setSelectedProduct(product);
    setProductView("details");
  };

  // Handle back from details view
  const handleBackToList = () => {
    setProductView("list");
    setSelectedProduct(null);
    // Refocus input after returning from details
    setTimeout(() => {
      inputRef.current?.focus();
    }, 100);
  };

  // Handle Enter key press
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  // Close product details
  const handleCloseDetails = () => {
    setProductView(null);
    setSelectedProduct(null);
    // Refocus input after closing details
    setTimeout(() => {
      inputRef.current?.focus();
    }, 100);
  };

  // Show all products handler
  const handleShowAllProducts = () => {
    const userMessageObj = {
      role: "user",
      content: "Show all products",
      type: "text"
    };
    setMessages((prev) => [...prev, userMessageObj]);
    setDisplayedProducts(operationalProducts);

    setMessages((prev) => [
      ...prev,
      {
        role: "ai",
        content: `Showing all ${operationalProducts.length} operational excellence products:`,
        type: "text"
      },
      {
        role: "ai",
        content: operationalProducts,
        type: "products"
      }
    ]);
  };

  return (
    <>
      {/* Product Details Modal */}
      <AnimatePresence>
        {productView === "details" && selectedProduct && (
          <ProductDetailsModal
            product={selectedProduct}
            onClose={handleCloseDetails}
            onBack={handleBackToList}
          />
        )}
      </AnimatePresence>

      {/* Chat Interface */}
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
              className="absolute right-0 bottom-6 md:bottom-12 
w-[95vw] sm:w-[90vw] md:w-[420px] lg:w-[500px]
max-h-[85vh]
bg-white/60 backdrop-blur-3xl border border-[var(--grms-blue)] rounded-3xl shadow-[0_80px_150px_rgba(0,0,0,0.15)] flex flex-col overflow-hidden"
              onClick={() => {
                // Click anywhere in chat to focus input
                setTimeout(() => {
                  inputRef.current?.focus();
                }, 50);
              }}
            >
              {/* HEADER */}
              <div className="px-10 pt-14 pb-8">
                <div className="flex justify-between items-start">
                  <div>
                    <h2 className="text-[9px] font-black text-[var(--grms-blue)] uppercase tracking-[0.4em]">
                      {productView === "details"
                        ? "Product Explorer"
                        : "Intelligence Terminal"}
                    </h2>
                    <h1 className="text-3xl font-black uppercase italic">
                      NEXUS <span className="text-[var(--grms-blue)]">CORE</span>
                    </h1>
                  </div>
                  <button
                    onClick={() => {
                      setIsOpen(false);
                      setProductView(null);
                      setSelectedProduct(null);
                    }}
                    className="w-10 h-10 rounded-2xl bg-slate-950 text-white flex items-center justify-center hover:bg-slate-800 transition-colors"
                  >
                    <FaTimes size={12} />
                  </button>
                </div>
              </div>

              {/* CHAT STREAM - Added ref for scrolling */}
              <div
                ref={messagesContainerRef}
                className="flex-grow px-6 overflow-y-auto space-y-6 pb-4"
              >
                {messages.map((msg, i) => (
                  <div
                    key={i}
                    className={`flex ${
                      msg.role === "user" ? "justify-end" : "justify-start"
                    }`}
                  >
                    {msg.type === "text" ? (
                      <div
                        className={`px-4 py-4 rounded-xl max-w-[85%] font-bold
                     ${
                       msg.role === "user"
                         ? "bg-[var(--grms-blue)] text-white rounded-br-none"
                         : "bg-white text-slate-800 rounded-tl-none"
                     }`}
                      >
                        {msg.content}
                      </div>
                    ) : msg.type === "products" &&
                      Array.isArray(msg.content) ? (
                      <div className="w-full">
                        <div className="grid grid-cols-1 gap-4 mt-2">
                          {msg.content.map((product, idx) => (
                            <ProductCardChat
                              key={`${product.name}-${idx}`}
                              product={product}
                              onSelect={handleProductSelect}
                            />
                          ))}
                        </div>
                        <div className="mt-4 text-xs text-slate-500 text-center">
                          {msg.content.length} product
                          {msg.content.length !== 1 ? "s" : ""} found
                        </div>
                      </div>
                    ) : null}
                  </div>
                ))}

                {loading && !displayedProducts.length && (
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
              <div className="p-4 sm:p-6 md:p-8 pt-3">
                <div className="flex items-center bg-white border border-gray-200 rounded-xl p-1 sm:p-2 hover:border-blue-400 transition-colors">
                  <input
                    ref={inputRef}
                    type="text"
                    placeholder={
                      productView === "details"
                        ? "Ask about products..."
                        : "Enter Command..."
                    }
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    disabled={loading}
                    className="flex-grow px-3 sm:px-4 md:px-3 py-2 sm:py-3 md:py-2 outline-none font-bold bg-transparent placeholder:text-gray-400 text-sm sm:text-base "
                  />

                  <button
                    onClick={handleSend}
                    disabled={loading || !input.trim()}
                    className={`w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-xl sm:rounded-2xl flex items-center justify-center transition-all
                       ${
                         loading || !input.trim()
                           ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                           : "bg-slate-950 text-white hover:bg-blue-600 hover:scale-105 active:scale-95"
                       }`}
                  >
                    <FaPaperPlane className="text-xs sm:text-sm md:text-base" />
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
            setProductView(null);
            setSelectedProduct(null);
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
              top: ["-100%", "200%"],
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
    </>
  );
};

export default NexusAI;
