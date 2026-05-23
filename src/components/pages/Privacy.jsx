import React from "react";
import { motion } from "framer-motion";
import { FaLock, FaEyeSlash, FaDatabase } from "react-icons/fa";

const Privacy = () => {
  return (
    <main className="bg-warm-white min-h-screen pt-20 font-sans overflow-hidden">
      {/* 1. HERO SECTION: IMMERSIVE */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-secondary">
        <div className="absolute inset-0 z-0 opacity-40">
            <div className="absolute inset-0 bg-gradient-to-b from-primary/30 to-secondary z-10" />
            <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070" alt="Security" className="w-full h-full object-cover grayscale" />
        </div>
        <div className="container mx-auto px-6 relative z-20 text-center">
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }}>
                <span className="inline-block px-6 py-3 mb-10 rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-white text-[10px] font-black uppercase tracking-[0.4em]">
                    Information Security Standard
                </span>
                <h1 className="text-huge font-black text-white uppercase tracking-tighter leading-none">
                    Privacy <br /><span className="text-primary italic">Policy.</span>
                </h1>
            </motion.div>
        </div>
      </section>

      {/* 2. CONTENT SECTION */}
      <section className="py-40 px-6 relative bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-24">
            
            {/* Main Content */}
            <div className="lg:w-2/3">
                <div className="prose-custom max-w-none">
                    <p className="text-[10px] font-black text-primary mb-16 uppercase tracking-[0.5em] leading-none">Effective: Jan 13, 2026</p>
                    
                    <div className="space-y-24">
                        <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                            <h2 className="text-4xl font-black text-charcoal mb-8 uppercase tracking-tighter leading-none">1. Protocol</h2>
                            <p className="text-slate-500 text-xl font-medium leading-relaxed">GDI Nexus Software Solutions ("we," "our," or "us") is committed to absolute data integrity. This Privacy Policy defines our protocols for collecting, safeguarding, and processing information within our technical ecosystems.</p>
                        </motion.section>

                        <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                            <h2 className="text-4xl font-black text-charcoal mb-8 uppercase tracking-tighter leading-none">2. Data Acquisition</h2>
                            <p className="text-slate-500 text-xl font-medium leading-relaxed">We collect proprietary data points voluntarily provided during service initialization, such as enterprise credentials and contact vectors. System-level telemetry, including IP matrices and browser signatures, may be recorded for optimization.</p>
                        </motion.section>

                        <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                            <h2 className="text-4xl font-black text-charcoal mb-8 uppercase tracking-tighter leading-none">3. Operational Usage</h2>
                            <p className="text-slate-500 text-xl font-medium leading-relaxed">Collected data is utilized strictly for service maintenance and optimization. This includes multi-factor personalization, direct intelligence reporting, and proactive technical anomaly detection.</p>
                        </motion.section>

                        <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                            <h2 className="text-4xl font-black text-charcoal mb-8 uppercase tracking-tighter leading-none">4. Disclosure Matrix</h2>
                            <p className="text-slate-500 text-xl font-medium leading-relaxed">GDI Nexus does not monetize personal or enterprise data. Information may be accessible to verified technical partners under strict NDA for operational execution or as mandated by international legal frameworks.</p>
                        </motion.section>
                        
                        <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                            <h2 className="text-4xl font-black text-charcoal mb-8 uppercase tracking-tighter leading-none">5. Encryption Layer</h2>
                            <p className="text-slate-500 text-xl font-medium leading-relaxed">We employ military-grade encryption protocols for data in transit and at rest. While our security-first architecture minimizes risk, absolute security in global networks remains an asymptotic objective.</p>
                        </motion.section>
                    </div>
                </div>
            </div>

            {/* Sidebar */}
            <div className="lg:w-1/3">
                <div className="lg:sticky lg:top-40">
                    <div className="bg-warm-white p-12 rounded-[4rem] border border-slate-100 shadow-inner relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 blur-2xl" />
                        <h4 className="text-[10px] font-black text-primary uppercase tracking-[0.4em] mb-10 leading-none">Compliance Hub</h4>
                        <div className="space-y-6">
                            {[
                                {icon: <FaLock />, label: "End-to-End Encryption"},
                                {icon: <FaEyeSlash />, label: "Zero-Knowledge Storage"},
                                {icon: <FaDatabase />, label: "Secure Cloud Clusters"}
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-6 p-6 bg-white rounded-[2rem] border border-slate-50 shadow-sm">
                                    <div className="text-primary text-2xl">{item.icon}</div>
                                    <span className="text-[10px] font-black text-charcoal uppercase tracking-[0.2em]">{item.label}</span>
                                </div>
                            ))}
                        </div>
                        <div className="mt-12 pt-10 border-t border-slate-200">
                            <p className="text-xs font-bold text-slate-400 mb-6 uppercase tracking-widest">Inquiry Terminal</p>
                            <Link to="/contact" className="inline-flex items-center gap-4 text-primary font-black uppercase tracking-tighter hover:gap-6 transition-all">
                                Request Data Audit <FaArrowRight />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Privacy;