import React from "react";
import { 
  FaHeartbeat, FaUniversity, FaShoppingCart, FaTruck, 
  FaGraduationCap, FaIndustry, FaArrowRight, FaChartBar, FaCheckCircle 
} from "react-icons/fa";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const industries = [
  {
    id: "ID-01",
    icon: <FaHeartbeat />,
    title: "Healthcare",
    description: "Architecting AI-powered diagnostics and secure compliance management systems.",
    solutions: ["Medical Imaging AI", "Patient Analytics", "HIPAA Governance"],
    glow: "group-hover:shadow-[0_30px_100px_rgba(59,130,246,0.25)]"
  },
  {
    id: "ID-02",
    icon: <FaUniversity />,
    title: "Finance & Banking",
    description: "High-velocity fraud detection and algorithmic risk assessment models.",
    solutions: ["Fraud Intelligence", "Risk Analytics", "Digital Banking"],
    glow: "group-hover:shadow-[0_30px_100px_rgba(99,102,241,0.25)]"
  },
  {
    id: "ID-03",
    icon: <FaShoppingCart />,
    title: "Retail & Commerce",
    description: "Neural recommendation engines and real-time inventory optimization.",
    solutions: ["Recommendation AI", "Demand Forecasting", "Customer Mapping"],
    glow: "group-hover:shadow-[0_30px_100px_rgba(30,58,138,0.2)]"
  },
  {
    id: "ID-04",
    icon: <FaTruck />,
    title: "Supply Chain",
    description: "Predictive logistics and IoT-integrated route optimization.",
    solutions: ["Route Optimization", "IoT Integration", "Predictive Logistics"],
    glow: "group-hover:shadow-[0_30px_100px_rgba(59,130,246,0.25)]"
  },
  {
    id: "ID-05",
    icon: <FaGraduationCap />,
    title: "Education",
    description: "Administrative automation and personalized neural learning platforms.",
    solutions: ["Learning Analytics", "Virtual Classrooms", "Admin Automation"],
    glow: "group-hover:shadow-[0_30px_100px_rgba(79,70,229,0.25)]"
  },
  {
    id: "ID-06",
    icon: <FaIndustry />,
    title: "Manufacturing",
    description: "Industrial IoT and quality control automation at global scale.",
    solutions: ["Quality Control AI", "Industrial IoT", "Scale Optimization"],
    glow: "group-hover:shadow-[0_30px_100px_rgba(15,23,42,0.2)]"
  }
];

function Industries() {
  return (
    <main className="bg-gradient-to-b from-slate-50 via-white to-slate-100 min-h-screen text-slate-900 overflow-hidden">
      
      {/* --- HERO: THE SECTOR INDEX --- */}
      <section className="relative pt-40 pb-20 px-6">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[var(--grms-blue)]/5 blur-[120px] -mr-40 pointer-events-none" />
        
        <div className="container mx-auto relative z-10 text-center lg:text-left">
          <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
            <span className="inline-block px-4 py-1.5 mb-6 rounded-full border border-blue-100 bg-white/60 backdrop-blur-md text-[var(--grms-blue)] text-[10px] font-black tracking-[.4em] uppercase shadow-sm">
              Global Domain Expertise
            </span>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-none mb-10">
              INDUSTRIES <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--grms-blue)] to-indigo-600 italic">WE SERVE.</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-500 max-w-2xl font-medium leading-relaxed">
              Precision-engineered AI ecosystems tailored for the world's most <span className="text-slate-950 font-bold">critical sectors.</span>
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- INDUSTRY GRID: THE FLOATING CARDS --- */}
      <section className="py-24 px-6 relative">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {industries.map((item, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0, transition: { delay: index * 0.1, duration: 0.6 } }
                }}
                className="group relative h-full"
              >
                {/* ID Label */}
                <div className="absolute top-6 right-8 text-[10px] font-black text-slate-300 group-hover:text-[var(--grms-blue)] tracking-[0.3em] z-20 transition-colors uppercase">
                  {item.id}
                </div>

                {/* Card Body - Deep Shadows & Luxury Lift */}
                <div className={`relative bg-white border border-slate-100 rounded-[3rem] p-10 h-full transition-all duration-500 transform group-hover:-translate-y-4 shadow-[0_30px_70px_rgba(0,0,0,0.07)] ${item.glow}`}>
                  
                  {/* Icon Block */}
                  <div className="text-4xl text-[var(--grms-blue)] mb-8 bg-slate-50 w-20 h-20 rounded-3xl flex items-center justify-center group-hover:scale-110 group-hover:bg-[var(--grms-blue)] group-hover:text-white transition-all duration-500 shadow-inner">
                    {item.icon}
                  </div>
                  
                  <h3 className="text-3xl font-black text-slate-950 mb-4 tracking-tighter uppercase italic leading-none">{item.title}</h3>
                  <p className="text-slate-500 font-medium leading-relaxed mb-10">{item.description}</p>
                  
                  {/* Solutions Cluster */}
                  <div className="pt-8 border-t border-slate-50 bg-slate-50/50 -mx-10 px-10 rounded-b-[3rem]">
                    <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-6">Execution Solutions</h4>
                    <ul className="space-y-4 pb-4">
                      {item.solutions.map((sol, idx) => (
                        <li key={idx} className="flex items-center gap-3 text-sm font-bold text-slate-800">
                          <FaCheckCircle className="text-[var(--grms-blue)] text-xs" />
                          {sol}
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

      {/* --- STATS: THE IMPACT SCORE (COLOR UPDATED TO WHITE) --- */}
      <section className="py-32 px-6">
        <div className="container mx-auto">
          <div className="bg-[#020617] rounded-[4rem] p-12 lg:p-24 relative overflow-hidden shadow-[0_60px_120px_rgba(0,0,0,0.4)]">
            {/* Ambient Background Glow */}
            <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-[var(--grms-blue)]/10 rounded-full blur-[100px] pointer-events-none" />
            
            <div className="relative z-10">
              <div className="text-center mb-20">
                {/* Icon now Pure White */}
                <FaChartBar className="text-white text-6xl mx-auto mb-6 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]" />
                {/* Heading now Pure White */}
                <h2 className="text-white text-4xl md:text-7xl font-black tracking-tighter uppercase italic drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                  THE IMPACT SCORE
                </h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20">
                <StatBox number="40%" desc="Efficiency Gain in Healthcare" />
                <StatBox number="99.5%" desc="Financial Fraud Accuracy" />
                <StatBox number="35%" desc="Supply Chain Cost Reduction" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- CTA: THE CUSTOM BUILD --- */}
      <section className="py-40 px-6">
        <div className="container mx-auto text-center">
          <motion.div 
            whileInView={{ scale: [0.98, 1], opacity: [0, 1] }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-5xl md:text-8xl font-black text-slate-950 tracking-tighter mb-8 leading-none italic uppercase">
              BEYOND <br/>
              <span className="text-[var(--grms-blue)]">THE CATALOG.</span>
            </h2>
            <p className="text-xl text-slate-500 font-medium mb-12 max-w-2xl mx-auto">
              Our AI solutions are agnostic. We build custom neural bridges for industries that demand <span className="text-slate-900 font-bold">zero-latency scaling.</span>
            </p>
            <a 
              href="/contact" 
              className="group relative inline-flex items-center gap-4 bg-slate-950 text-white px-14 py-7 rounded-full font-black text-lg hover:bg-[var(--grms-blue)] transition-all shadow-2xl hover:-translate-y-2 overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              <span className="relative z-10 flex items-center gap-4 uppercase tracking-widest">
                Request Custom Audit <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
              </span>
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

// StatBox: High Contrast & Luxe
function StatBox({ number, desc }) {
  return (
    <div className="text-center p-10 border border-white/5 rounded-[2.5rem] bg-white/[0.03] backdrop-blur-xl transition-all hover:bg-white/[0.07] hover:border-white/10 group">
      <div className="text-7xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-[var(--grms-blue)] mb-4 tracking-tighter group-hover:scale-110 transition-transform duration-500 drop-shadow-[0_0_25px_rgba(59,130,246,0.4)]">
        {number}
      </div>
      <p className="text-white font-black uppercase text-[10px] tracking-[0.25em] leading-relaxed max-w-[180px] mx-auto opacity-90">
        {desc}
      </p>
    </div>
  );
}

export default Industries;