import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaArrowRight,
  FaCheckCircle,
  FaUsers,
  FaWarehouse,
  FaGraduationCap,
  FaBrain,
  FaLaptopCode,
  FaUserMd,
  FaBoxOpen,
  FaQuoteLeft,
  FaAward
} from "react-icons/fa";
import { Link } from "react-router-dom";

// Image Imports
import EmpireStarImg from "../../assets/EmpireStar.png";
import AxxendLogo from "../../assets/axxend_corp_logo.jpeg";
import GDI_Nexus_Logo from "../../assets/grms_logo.png";
import HospitalLogo from "../../assets/SaiNivasFoundation.jpeg";

const operationalProducts = [
  {
    name: "Talentics ERP",
    category: "operations",
    id: "PRD-01",
    oneLiner: "Advanced Talent Management",
    description: "Enterprise-grade ERP for talent acquisition, payroll, and performance tracking with integrated AI insights.",
    icon: <FaUsers />,
    features: ["Automated Payroll", "Performance Scoring", "Resource Allocation"],
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Nexus WMS",
    category: "operations",
    id: "PRD-02",
    oneLiner: "Intelligent Warehousing",
    description: "Real-time warehouse and asset management system designed for global logistics and high-volume tracking.",
    icon: <FaWarehouse />,
    features: ["Inventory Tracking", "IoT Integration", "Predictive Logistics"],
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Skillytics AI",
    category: "ai",
    id: "PRD-03",
    oneLiner: "Workforce Intelligence",
    description: "Data-driven workforce assessment platform using AI to identify skill gaps and optimize team performance.",
    icon: <FaBrain />,
    features: ["Competency Mapping", "Skill Gap Analysis", "Growth Forecasting"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Nexus LMS",
    category: "education",
    id: "PRD-04",
    oneLiner: "Scalable Learning",
    description: "Powerful learning management system for corporate training and educational institutions with adaptive paths.",
    icon: <FaGraduationCap />,
    features: ["Course Automation", "Certification Engine", "User Analytics"],
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Hospital Pro",
    category: "healthcare",
    id: "PRD-05",
    oneLiner: "Healthcare Management",
    description: "End-to-end hospital management system for patient records, billing, and intelligent scheduling.",
    icon: <FaUserMd />,
    features: ["Electronic Health Records", "Appointment AI", "Medical Billing"],
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "E-Box Training",
    category: "education",
    id: "PRD-06",
    oneLiner: "Technical Labs",
    description: "Virtual engineering lab platform for technical skill development and automated code assessment.",
    icon: <FaLaptopCode />,
    features: ["Hands-on Labs", "Real-time Debugging", "Skill Verification"],
    image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?auto=format&fit=crop&w=800&q=80"
  }
];

const ProductCard = ({ product, index }) => (
  <motion.div
    layout
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1, duration: 0.8 }}
    viewport={{ once: true, margin: "-50px" }}
    className="group bg-white rounded-[4rem] border border-slate-100 shadow-sm hover:shadow-2xl transition-all overflow-hidden flex flex-col h-full"
  >
    <div className="relative h-72 overflow-hidden bg-slate-50">
      <img 
        src={`${product.image}&w=800&q=70`} 
        alt={product.name} 
        loading="lazy"
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1.5s]" 
      />
      <div className="absolute inset-0 bg-charcoal/20 group-hover:bg-transparent transition-colors duration-500" />
      <div className="absolute top-8 left-8 w-16 h-16 bg-white/90 backdrop-blur-md rounded-2xl flex items-center justify-center text-primary text-3xl shadow-xl">
        {product.icon}
      </div>
    </div>
    <div className="p-12 flex flex-col flex-grow">
      <div className="mb-8">
        <span className="text-xs font-black text-primary uppercase tracking-[0.3em] mb-3 block">{product.oneLiner}</span>
        <h3 className="text-4xl font-black text-charcoal mb-4 uppercase tracking-tighter leading-none">{product.name}</h3>
      </div>
      <p className="text-slate-500 text-lg leading-relaxed mb-10 font-medium flex-grow">{product.description}</p>
      <div className="pt-8 border-t border-slate-50">
        <ul className="space-y-4 mb-10">
          {product.features.map((f, i) => (
            <li key={i} className="flex items-center gap-4 text-sm font-black uppercase tracking-widest text-slate-700">
              <FaCheckCircle className="text-primary" /> {f}
            </li>
          ))}
        </ul>
        <Link to="/contact" className="inline-flex items-center gap-4 bg-gradient-to-r from-primary to-secondary text-white px-10 py-5 rounded-[2rem] font-black text-xs tracking-widest hover:shadow-primary/40 hover:scale-[1.02] transition-all shadow-xl shadow-primary/20 group">
          EXPLORE PRODUCT 
          <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
        </Link>
      </div>
    </div>
  </motion.div>
);

function Products() {
  const [activeTab, setActiveTab] = useState("all");
  const categories = [
    { id: "all", label: "All Products" },
    { id: "operations", label: "Operations" },
    { id: "ai", label: "AI & Data" },
    { id: "education", label: "Education" }
  ];

  const filteredProducts = operationalProducts.filter(
    (p) => activeTab === "all" || p.category === activeTab
  );

  return (
    <main className="bg-warm-white min-h-screen text-charcoal font-sans overflow-hidden">
      
      {/* 1. HERO SECTION: IMMERSIVE */}
      <section className="relative pt-40 pb-32 px-6 bg-white text-center overflow-hidden">
        <div className="absolute top-0 left-0 w-[50vw] h-[50vw] bg-primary/5 rounded-full blur-[120px] -ml-20 -mt-20 pointer-events-none" />
        
        <div className="container mx-auto max-w-7xl relative z-10">
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }} 
            animate={{ scale: 1, opacity: 1 }} 
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary/5 text-primary rounded-full text-xs font-black uppercase tracking-[0.3em] mb-12 border border-primary/10"
          >
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            Proprietary IP
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-huge font-black mb-12"
          >
            Built <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent italic">Solutions.</span> <br />
            Digital <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent italic">Assets.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="text-2xl md:text-3xl text-slate-500 max-w-4xl mx-auto font-medium leading-relaxed"
          >
            Our software ecosystem designed for operational excellence and high-fidelity performance.
          </motion.p>
        </div>
      </section>

      {/* 2. FILTER TABS: BOLD */}
      <section className="py-20 px-6">
        <div className="flex justify-center gap-4 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-10 py-5 rounded-[2rem] text-xs font-black uppercase tracking-widest transition-all ${
                activeTab === cat.id ? "bg-primary text-white shadow-2xl shadow-primary/30" : "bg-white text-slate-400 hover:text-charcoal border border-slate-100"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* 3. PRODUCTS GRID */}
      <section className="pb-40 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-12">
            <AnimatePresence mode="popLayout">
              {filteredProducts.map((p, i) => (
                <ProductCard key={p.id} product={p} index={i} />
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* 4. TESTIMONIAL: BIG & BOLD */}
      <section className="py-40 px-6 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col lg:grid lg:grid-cols-12 gap-24 items-center">
            <div className="lg:col-span-7">
              <span className="text-xs font-black text-primary uppercase tracking-[0.5em] mb-6 block">Proven Deployments</span>
              <h2 className="text-mega font-black text-charcoal mb-12 uppercase tracking-tighter leading-none">Trusted by <br /><span className="text-primary italic">Global Leaders.</span></h2>
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="p-16 bg-warm-white rounded-[4rem] border border-slate-100 relative shadow-inner"
              >
                <FaQuoteLeft className="text-8xl text-primary/5 absolute top-10 right-10" />
                <p className="text-2xl text-slate-600 italic leading-relaxed mb-12 relative z-10 font-medium">
                  "GDI Nexus has been a game-changer for our operations. Their Talentics ERP allowed us to scale our workforce management across three countries without any technical friction."
                </p>
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 bg-primary text-white rounded-2xl flex items-center justify-center text-3xl shadow-xl">
                    <FaAward />
                  </div>
                  <div>
                    <h4 className="text-xl font-black text-charcoal uppercase tracking-tight">Sofia Aravind</h4>
                    <p className="text-xs text-slate-400 font-black uppercase tracking-[0.2em]">Operations Director, Global Tech</p>
                  </div>
                </div>
              </motion.div>
            </div>
            <div className="lg:col-span-5 grid grid-cols-2 gap-12 opacity-30 grayscale items-center">
              <img src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" alt="Microsoft" className="w-full h-12 object-contain" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" alt="AWS" className="w-full h-12 object-contain" />
              <img src={EmpireStarImg} alt="Empire Star" className="w-full h-16 object-contain" />
              <img src={AxxendLogo} alt="Axxend" className="w-full h-16 object-contain" />
              <img src={GDI_Nexus_Logo} alt="GDI Nexus" className="w-full h-16 object-contain" />
              <img src={HospitalLogo} alt="Healthcare" className="w-full h-16 object-contain" />
            </div>
          </div>
        </div>
      </section>

      {/* 5. CTA: IMMERSIVE */}
      <section className="py-40 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="bg-secondary rounded-[4rem] p-16 md:p-32 text-center text-white relative overflow-hidden">
             <div className="absolute inset-0 bg-primary/5 pointer-events-none" />
             <h2 className="text-mega font-black mb-12 uppercase tracking-tighter">Ready for a <br /><span className="text-accent italic">Technical Demo?</span></h2>
             <p className="text-2xl text-blue-100/70 mb-16 max-w-2xl mx-auto font-medium leading-relaxed">Experience how our built solutions can modernize your business workflows and drive absolute efficiency.</p>
             <Link to="/contact" className="inline-flex items-center gap-4 px-16 py-8 bg-gradient-to-r from-primary to-secondary text-white rounded-[3rem] font-black text-xl tracking-widest hover:shadow-primary/40 hover:scale-[1.02] transition-all shadow-2xl shadow-primary/20">
               SCHEDULE A DEMO <FaArrowRight />
             </Link>
          </div>
        </div>
      </section>

    </main>
  );
}

export default Products;