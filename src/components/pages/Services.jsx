import React from "react";
import { 
  FaBrain, FaChartBar, FaCode, FaCloud, 
  FaPaintBrush, FaBuilding, FaArrowRight, FaCheckCircle, FaMicrosoft 
} from "react-icons/fa";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const serviceCapabilities = [
  {
    icon: <FaBrain />,
    title: "AI & Agentic Systems",
    oneLiner: "Engineering autonomous logic with deterministic reliability.",
    description: "Moving beyond stochastic models to build agentic systems with built-in runtime governance and causal auditing for enterprise-grade safety.",
    features: ["Agentic Orchestration", "Predictive Neural Modeling", "NLP & Local LLM Tuning", "Safety Guardrails"],
    glow: "group-hover:shadow-[0_30px_100px_rgba(59,130,246,0.2)]"
  },
  {
    icon: <FaChartBar />,
    title: "Data Liquidity",
    oneLiner: "Converting raw data into a high-velocity strategic asset.",
    description: "End-to-end data engineering that ensures your information is structured, accessible, and ready for high-fidelity predictive analytics.",
    features: ["Real-time Analytics", "Data Warehousing", "Business Intelligence", "ETL Pipelines"],
    glow: "group-hover:shadow-[0_30px_100px_rgba(99,102,241,0.2)]"
  },
  {
    icon: <FaCode />,
    title: "Full-Stack Engineering",
    oneLiner: "Developing resilient, cross-platform software ecosystems.",
    description: "Building production-grade applications across iOS, Android, and Web that maintain structural integrity at scale.",
    features: ["Enterprise Systems", "Scalable Backends", "Mobile & Web Apps", "API Orchestration"],
    glow: "group-hover:shadow-[0_30px_100px_rgba(30,58,138,0.15)]"
  },
  {
    icon: <FaCloud />,
    title: "Azure Cloud Infrastructure",
    oneLiner: "Elastic, secure, and invisible infrastructure deployment.",
    description: "Certified Microsoft cloud solutions designed to migrate and optimize your most critical workloads with zero-latency scaling.",
    features: ["Azure Migration", "Serverless Computing", "Cloud Governance", "DevOps Pipelines"],
    glow: "group-hover:shadow-[0_30px_100px_rgba(59,130,246,0.2)]"
  },
  {
    icon: <FaPaintBrush />,
    title: "Aesthetic UX Design",
    oneLiner: "The intersection of fluid design and functional logic.",
    description: "Crafting modern, high-performance user interfaces that prioritize engagement and seamless human-machine interaction.",
    features: ["UI/UX Architecture", "Performance Optimization", "E-commerce Flows", "Fluid Interactions"],
    glow: "group-hover:shadow-[0_30px_100px_rgba(79,70,229,0.2)]"
  },
  {
    icon: <FaBuilding />,
    title: "Enterprise Architecture",
    oneLiner: "Aligning technical foundations with business destiny.",
    description: "Strategic planning that bridges the gap between legacy bottlenecks and modern, agile digital transformation.",
    features: ["IT Strategy", "Digital Governance", "System Integration", "Audit Protocols"],
    glow: "group-hover:shadow-[0_30px_100px_rgba(15,23,42,0.15)]"
  }
];

function Services() {
  return (
    <main className="bg-gradient-to-b from-slate-50 via-white to-slate-100 min-h-screen text-slate-900 overflow-hidden">
      
      {/* --- HERO SECTION --- */}
      <section className="relative pt-40 pb-20 px-6">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[var(--grms-blue)]/5 blur-[120px] -mr-40 pointer-events-none" />
        
        <div className="container mx-auto relative z-10 text-center lg:text-left">
          <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
            <span className="inline-block px-4 py-1.5 mb-6 rounded-full border border-blue-100 bg-white/60 backdrop-blur-md text-[var(--grms-blue)] text-[10px] font-black tracking-[.4em] uppercase">
              The Nexus Capability Index
            </span>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-none mb-10 uppercase italic">
              ENGINEERING <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--grms-blue)] to-indigo-600">CAPABILITIES.</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-500 max-w-2xl font-medium leading-relaxed italic">
              "Building software that works in the real world, not just in notebooks."
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- SERVICES GRID --- */}
      <section className="py-24 px-6 relative">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {serviceCapabilities.map((service, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0, transition: { delay: index * 0.1 } }
                }}
                className="group relative h-full"
              >
                <div className={`relative bg-white border border-slate-100 rounded-[3rem] p-10 h-full transition-all duration-500 transform group-hover:-translate-y-4 shadow-[0_20px_60px_rgba(0,0,0,0.06)] ${service.glow}`}>
                  <div className="text-4xl text-[var(--grms-blue)] mb-8 bg-slate-50 w-20 h-20 rounded-3xl flex items-center justify-center group-hover:bg-[var(--grms-blue)] group-hover:text-white transition-all duration-500">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-black text-slate-950 mb-2 tracking-tighter uppercase italic leading-none">{service.title}</h3>
                  <p className="text-[var(--grms-blue)] font-black text-[9px] uppercase tracking-widest mb-6">{service.oneLiner}</p>
                  <p className="text-slate-500 font-medium leading-relaxed mb-8 text-sm">{service.description}</p>
                  
                  <div className="pt-8 border-t border-slate-50 bg-slate-50/50 -mx-10 px-10 rounded-b-[3rem]">
                    <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-6 italic">Technical Focus</h4>
                    <ul className="space-y-4 pb-4">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-3 text-xs font-bold text-slate-800">
                          <FaCheckCircle className="text-[var(--grms-blue)] text-[10px]" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- MICROSOFT PARTNERSHIP: THE OBSIDIAN HUB (FIXED TEXT VISIBILITY) --- */}
      <section className="py-32 px-6">
        <div className="container mx-auto">
          <div className="bg-[var(--grms-blue)] rounded-[4rem] p-12 lg:p-24 relative overflow-hidden shadow-2xl border border-white/5">
            <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: `radial-gradient(var(--grms-blue) 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />
            
            <div className="relative z-10 max-w-5xl mx-auto">
              <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-16">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" 
                  alt="Microsoft Logo" 
                  className="h-10 w-auto"
                />
                <div className="hidden md:block h-12 w-px bg-white/20" />
                <div className="text-center md:text-left">
                  <p className="text-white font-black text-[10px] uppercase tracking-[0.4em] leading-none mb-2 italic opacity-80">Official Solutions Partner</p>
                  <h2 className="text-white text-3xl md:text-4xl font-black tracking-tighter uppercase italic">Microsoft Cloud Excellence</h2>
                </div>
              </div>

              <p className="text-slate-400 text-xl font-medium text-center leading-relaxed mb-16 max-w-3xl mx-auto">
                As a certified partner, we deliver enterprise-grade Azure infrastructure, ensuring your 
                data and AI workflows are built on the world's most <span className="text-white font-bold">secure and scalable foundation.</span>
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                <HighlightBox title="Azure Expertise" detail="Specialized in cloud-native AI deployment." />
                <HighlightBox title="Security First" detail="ISO-aligned cloud governance protocols." />
                <HighlightBox title="Cost Control" detail="Optimized resource orchestration and ROI." />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="py-40 text-center px-6">
        <h2 className="text-5xl md:text-8xl font-black text-slate-950 tracking-tighter italic uppercase mb-12 leading-none">
          INITIATE <br/> <span className="text-[var(--grms-blue)]">TRANSFORMATION.</span>
        </h2>
        <a href="/contact" className="group relative inline-flex items-center gap-4 bg-slate-950 text-white px-14 py-7 rounded-full font-black text-lg transition-all shadow-2xl hover:-translate-y-2 hover:bg-[var(--grms-blue)]">
          CUSTOM SOLUTION INQUIRY <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
        </a>
      </section>
    </main>
  );
}

// Fixed HighlightBox Sub-component: Text stays White/Slate on hover for visibility
function HighlightBox({ title, detail }) {
  return (
    <div className="p-8 border border-white/10 rounded-3xl bg-white/[0.02] backdrop-blur-xl transition-all duration-300 hover:border-[var(--grms-blue)]/50 hover:bg-white/[0.05] text-center group">
      {/* Title stays white even on hover */}
      <h4 className="text-white font-black text-sm uppercase tracking-widest mb-3 transition-colors">
        {title}
      </h4>
      {/* Detail stays visible slate on hover */}
      <p className="text-slate-400 text-xs font-medium leading-relaxed group-hover:text-slate-300 transition-colors">
        {detail}
      </p>
    </div>
  );
}

export default Services;