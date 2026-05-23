import React from "react";
import { motion } from "framer-motion";
import { FaExclamationTriangle, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Terms = () => {
  return (
    <main className="bg-warm-white min-h-screen pt-20 font-sans overflow-hidden">
      {/* 1. HERO SECTION: IMMERSIVE */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-charcoal">
        <div className="absolute inset-0 z-0 opacity-40">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-secondary z-10" />
            <img src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070" alt="Legal" className="w-full h-full object-cover grayscale" />
        </div>
        <div className="container mx-auto px-6 relative z-20 text-center">
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }}>
                <span className="inline-block px-6 py-3 mb-10 rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-white text-[10px] font-black uppercase tracking-[0.4em]">
                    Service Infrastructure Agreement
                </span>
                <h1 className="text-huge font-black text-white uppercase tracking-tighter leading-none">
                    Terms of <br /><span className="text-primary italic">Service.</span>
                </h1>
            </motion.div>
        </div>
      </section>

      {/* 2. CONTENT SECTION */}
      <section className="py-40 px-6 relative bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-24">
            
            <div className="lg:w-2/3">
                <div className="prose-custom max-w-none">
                    <p className="text-[10px] font-black text-primary mb-16 uppercase tracking-[0.5em] leading-none">Revision Cycle: FY 2026</p>
                    
                    <div className="space-y-24">
                        <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                            <h2 className="text-4xl font-black text-charcoal mb-8 uppercase tracking-tighter leading-none">1. Execution</h2>
                            <p className="text-slate-500 text-xl font-medium leading-relaxed">Welcome to GDI Nexus. These Terms of Service ("Terms") govern your deployment of and interaction with our digital architecture, proprietary products, and consulting services. Accessing our systems constitutes absolute agreement to these Terms.</p>
                        </motion.section>

                        <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                            <h2 className="text-4xl font-black text-charcoal mb-8 uppercase tracking-tighter leading-none">2. Operational Use</h2>
                            <p className="text-slate-500 text-xl font-medium leading-relaxed">Services must be utilized strictly for lawful enterprise purposes. You are solely responsible for the integrity of account credentials and all operational activity occurring within your designated technical environment.</p>
                        </motion.section>

                        <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                            <h2 className="text-4xl font-black text-charcoal mb-8 uppercase tracking-tighter leading-none">3. Intellectual Assets</h2>
                            <p className="text-slate-500 text-xl font-medium leading-relaxed">All technical logic, visual frameworks, and proprietary software architecture remain the exclusive property of GDI Nexus. These assets are protected under international copyright, trademark, and trade secret frameworks.</p>
                        </motion.section>

                        <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                            <h2 className="text-4xl font-black text-charcoal mb-8 uppercase tracking-tighter leading-none">4. Restrictions</h2>
                            <p className="text-slate-500 text-xl font-medium leading-relaxed">Unauthorized derivation, modification, or commercial exploitation of GDI Nexus systems is prohibited. Attempts to reverse engineer or decompile proprietary architecture will result in immediate service termination and legal action.</p>
                        </motion.section>
                        
                        <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                            <h2 className="text-4xl font-black text-charcoal mb-8 uppercase tracking-tighter leading-none">5. Liability Framework</h2>
                            <p className="text-slate-500 text-xl font-medium leading-relaxed">Our infrastructure is provided "as is" without warranties of any kind. GDI Nexus assumes no liability for consequential damages arising from system utilization or technical downtime beyond specified SLA agreements.</p>
                        </motion.section>
                    </div>
                </div>
            </div>

            <div className="lg:w-1/3">
                <div className="lg:sticky lg:top-40">
                    <div className="bg-secondary p-12 rounded-[4rem] text-white shadow-2xl relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-48 h-48 bg-primary/20 rounded-full -mr-24 -mt-24 blur-3xl animate-pulse" />
                        <div className="w-16 h-16 bg-primary rounded-[1.5rem] flex items-center justify-center text-white mb-10 shadow-xl">
                            <FaExclamationTriangle size={24} />
                        </div>
                        <h3 className="text-3xl font-black uppercase tracking-tighter mb-6 leading-tight">Legal <br />Terminal</h3>
                        <p className="text-blue-100/70 text-lg font-medium mb-12">For enterprise-specific Master Service Agreements (MSA) or detailed technical audits, please initialize a consultation.</p>
                        <Link to="/contact" className="w-full inline-flex items-center justify-center gap-4 bg-white text-secondary py-6 rounded-2xl font-black text-xs uppercase tracking-[0.3em] hover:bg-accent hover:text-white transition-all shadow-xl">
                            CONTACT LEGAL <FaArrowRight />
                        </Link>
                    </div>
                </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
};

export default Terms;